import { ILocalKeys, INode, IRoot } from '../../types';
import { getBranchById } from '../../utils/helpers';
import {
  loadFromLocalStorage,
  removeFromLocalStorage,
  updateLocalStorage,
} from '../../utils/localStorage';
import { Action, RootActions, State } from './types';

const initialState: State = {
  root: loadFromLocalStorage(ILocalKeys.ROOT),
};

export const rootReducer = (
  state: State = initialState,
  action: Action,
): State => {
  let updatedRoot: IRoot;
  let updatedState: State;
  let foundedBranch: INode | null;

  switch (action.type) {
    case RootActions.CREATE:
      updatedRoot = action.payload;
      updatedState = { root: updatedRoot };

      updateLocalStorage(ILocalKeys.ROOT, updatedRoot);

      return updatedState;

    case RootActions.ADD_BRANCH:
      if (!state.root) {
        return state;
      }

      if (!action.payload.id) {
        updatedRoot = {
          ...state.root,
          branches: [...(state.root.branches || []), action.payload.node],
        };

        updatedState = {
          root: updatedRoot,
        };

        updateLocalStorage(ILocalKeys.ROOT, updatedRoot);

        return updatedState;
      }

      updatedState = JSON.parse(JSON.stringify(state));

      if (!updatedState.root) {
        return state;
      }

      foundedBranch = getBranchById(
        action.payload.id,
        updatedState.root.branches,
      );

      foundedBranch?.branches.push(action.payload.node);

      updatedRoot = updatedState.root;

      updateLocalStorage(ILocalKeys.ROOT, updatedRoot);

      return updatedState;

    case RootActions.DELETE_BRANCH:
      updatedState = JSON.parse(JSON.stringify(state));

      if (!updatedState.root) {
        return state;
      }

      if (!action.payload.parentId) {
        updatedRoot = updatedState.root;

        updatedState.root.branches = updatedRoot.branches.filter(
          ({ id }) => id !== action.payload.id,
        );

        updateLocalStorage(ILocalKeys.ROOT, updatedRoot);

        return updatedState;
      }

      foundedBranch = getBranchById(
        action.payload.parentId,
        updatedState.root?.branches,
      );

      if (!foundedBranch) {
        return state;
      }

      foundedBranch.branches = foundedBranch.branches.filter(
        ({ id }) => id !== action.payload.id,
      );

      updatedRoot = updatedState.root;

      updateLocalStorage(ILocalKeys.ROOT, updatedRoot);

      return updatedState;

    case RootActions.DELETE:
      removeFromLocalStorage(ILocalKeys.ROOT);

      return { root: null };

    default:
      return state;
  }
};
