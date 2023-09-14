export enum ILocalKeys {
  ROOT = 'root',
}

export interface IRoot {
  name: string;
  branches: IBranch[];
}

export interface IBranch {
  readonly id: string;
  name: string;
  branches: IBranch[];
}

export interface IToast {
  title: string;
  description: string;
  danger?: boolean;
}
