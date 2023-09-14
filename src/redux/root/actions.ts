import { IBranch, IRoot } from '../../types';
import {
  AddBranchAction,
  CreateAction,
  DeleteBranchAction,
  DeleteRootAction,
  EditBranchName,
  EditRootName,
  RootActions,
} from './types';

const createRoot = (root: IRoot): CreateAction => ({
  type: RootActions.CREATE,
  payload: root,
});

const addBranch = (newBranch: IBranch, id?: string): AddBranchAction => ({
  type: RootActions.ADD_BRANCH,
  payload: {
    branch: newBranch,
    id,
  },
});

const editRootName = (name: string): EditRootName => ({
  type: RootActions.EDIT_ROOT_NAME,
  payload: name,
});

const editBranchName = (name: string, branchId: string): EditBranchName => ({
  type: RootActions.EDIT_BRANCH_NAME,
  payload: {
    name,
    branchId,
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

export const actions = {
  createRoot,
  addBranch,
  editRootName,
  editBranchName,
  deleteBranch,
  removeRoot,
};
