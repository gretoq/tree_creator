import { ILocalKeys } from '../../types';
import { loadFromLocalStorage } from '../../utils/localStorage';
import {
  addBranchToBranch,
  addBranchToRoot,
  createRoot,
  editBranchName,
  editRootName,
  removeBranchFromBranch,
  removeBranchFromRoot,
  removeRoot,
} from './controllers';
import { Action, RootActions, State } from './types';

const initialState: State = {
  root: loadFromLocalStorage(ILocalKeys.ROOT),
};

export const rootReducer = (
  state: State = initialState,
  action: Action,
): State => {
  switch (action.type) {
    case RootActions.CREATE:
      return createRoot(action.payload);

    case RootActions.ADD_BRANCH:
      if (!state.root) {
        return state;
      }

      if (!action.payload.id) {
        return addBranchToRoot(action.payload.branch, state.root);
      }

      return addBranchToBranch(
        action.payload.id,
        action.payload.branch,
        state.root,
      );

    case RootActions.EDIT_ROOT_NAME:
      if (!state.root) {
        return state;
      }

      return editRootName(action.payload, state.root);

    case RootActions.EDIT_BRANCH_NAME:
      if (!state.root) {
        return state;
      }

      return editBranchName(
        action.payload.name,
        action.payload.branchId,
        state.root,
      );

    case RootActions.DELETE_BRANCH:
      if (!state.root) {
        return state;
      }

      if (!action.payload.parentId) {
        return removeBranchFromRoot(action.payload.id, state.root);
      }

      return removeBranchFromBranch(
        action.payload.parentId,
        action.payload.id,
        state.root,
      );

    case RootActions.DELETE:
      return removeRoot();

    default:
      return state;
  }
};
