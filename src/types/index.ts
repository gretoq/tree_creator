export enum ILocalKeys {
  ROOT = 'root',
}

export interface IRoot {
  name: string;
  branches: INode[];
}

export interface INode {
  readonly id: string;
  name: string;
  branches: INode[];
}

export interface IToast {
  title: string;
  description: string;
  danger?: boolean;
}
