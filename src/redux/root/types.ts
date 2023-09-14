import { INode, IRoot } from '../../types';

export enum RootActions {
  CREATE = 'root/CREATE',
  ADD_BRANCH = 'root/ADD_BRANCH',
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
    node: INode;
    id?: string;
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
  | DeleteBranchAction
  | DeleteRootAction;

export type State = {
  root: IRoot | null;
};
