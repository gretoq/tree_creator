import { IBranch, IRoot } from '../../types';

export enum RootActions {
  CREATE = 'root/CREATE',
  ADD_BRANCH = 'root/ADD_BRANCH',
  EDIT_ROOT_NAME = 'root/EDIT_ROOT_NAME',
  EDIT_BRANCH_NAME = 'root/EDIT_BRANCH_NAME',
  DELETE_BRANCH = 'root/DELETE_BRANCH',
  DELETE = 'root/DELETE',
}

export type CreateAction = {
  type: RootActions.CREATE;
  payload: IRoot;
};

export type AddBranchAction = {
  type: RootActions.ADD_BRANCH;
  payload: {
    branch: IBranch;
    id?: string;
  };
};

export type EditRootName = {
  type: RootActions.EDIT_ROOT_NAME;
  payload: string;
};

export type EditBranchName = {
  type: RootActions.EDIT_BRANCH_NAME;
  payload: {
    name: string;
    branchId: string;
  };
};

export type DeleteBranchAction = {
  type: RootActions.DELETE_BRANCH;
  payload: {
    id: string;
    parentId?: string;
  };
};

export type DeleteRootAction = {
  type: RootActions.DELETE;
};

export type Action =
  | CreateAction
  | AddBranchAction
  | EditRootName
  | EditBranchName
  | DeleteBranchAction
  | DeleteRootAction;

export type State = {
  root: IRoot | null;
};
