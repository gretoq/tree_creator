import { IBranch, ILocalKeys, IRoot } from '../../types';
import { getBranchById, getCopyRoot } from '../../utils/helpers';
import {
  removeFromLocalStorage,
  updateLocalStorage,
} from '../../utils/localStorage';
import { State } from './types';

export const createRoot = (root: IRoot): State => {
  updateLocalStorage(ILocalKeys.ROOT, root);

  return { root };
};

export const addBranchToRoot = (branch: IBranch, root: IRoot): State => {
  const copyRoot = getCopyRoot(root);

  copyRoot.branches.push(branch);

  updateLocalStorage(ILocalKeys.ROOT, copyRoot);

  return { root: copyRoot };
};

export const addBranchToBranch = (
  branchId: string,
  branch: IBranch,
  root: IRoot,
): State => {
  const copyRoot = getCopyRoot(root);

  const foundedBranch = getBranchById(branchId, copyRoot.branches);

  if (!foundedBranch) {
    return { root };
  }

  foundedBranch.branches.push(branch);

  updateLocalStorage(ILocalKeys.ROOT, copyRoot);

  return { root: copyRoot };
};

export const editRootName = (name: string, root: IRoot): State => {
  const copyRoot = getCopyRoot(root);

  copyRoot.name = name;

  updateLocalStorage(ILocalKeys.ROOT, copyRoot);

  return { root: copyRoot };
};

export const editBranchName = (
  name: string,
  branchId: string,
  root: IRoot,
): State => {
  const copyRoot = getCopyRoot(root);

  const foundedBranch = getBranchById(branchId, copyRoot.branches);

  if (!foundedBranch) {
    return { root };
  }

  foundedBranch.name = name;

  updateLocalStorage(ILocalKeys.ROOT, copyRoot);

  return { root: copyRoot };
};

export const removeBranchFromRoot = (branchId: string, root: IRoot): State => {
  const copyRoot = getCopyRoot(root);

  copyRoot.branches = copyRoot.branches.filter(({ id }) => id !== branchId);

  updateLocalStorage(ILocalKeys.ROOT, copyRoot);

  return { root: copyRoot };
};

export const removeBranchFromBranch = (
  parentId: string,
  branchId: string,
  root: IRoot,
): State => {
  const copyRoot = getCopyRoot(root);

  const foundedParentBranch = getBranchById(parentId, copyRoot.branches);

  if (!foundedParentBranch) {
    return { root };
  }

  foundedParentBranch.branches = foundedParentBranch.branches.filter(
    ({ id }) => id !== branchId,
  );

  updateLocalStorage(ILocalKeys.ROOT, copyRoot);

  return { root: copyRoot };
};

export const removeRoot = (): State => {
  removeFromLocalStorage(ILocalKeys.ROOT);

  return { root: null };
};
