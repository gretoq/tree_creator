import { INode, IRoot } from '../../types';
import {
  AddBranchAction,
  CreateAction,
  DeleteBranchAction,
  DeleteRootAction,
  RootActions,
} from './types';

const createRoot = (root: IRoot): CreateAction => ({
  type: RootActions.CREATE,
  payload: root,
});

const addBranch = (newBranch: INode, id?: string): AddBranchAction => ({
  type: RootActions.ADD_BRANCH,
  payload: {
    node: newBranch,
    id,
  },
});

const deleteBranch = (
  branchId: string,
  parentId?: string,
): DeleteBranchAction => ({
  type: RootActions.DELETE_BRANCH,
  payload: {
    id: branchId,
    parentId,
  },
});

const removeRoot = (): DeleteRootAction => ({
  type: RootActions.DELETE,
});

export const actions = { createRoot, addBranch, deleteBranch, removeRoot };
