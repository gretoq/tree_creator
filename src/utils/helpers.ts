import { IBranch, IRoot } from '../types';

export const getBranchById = (
  id: string,
  rootBranches: IBranch[],
): IBranch | null => {
  for (const branch of rootBranches) {
    if (branch.id === id) {
      return branch;
    }

    if (branch.branches.length !== 0) {
      const foundedBranch = getBranchById(id, branch.branches);

      if (foundedBranch !== null) {
        return foundedBranch;
      }
    }
  }

  return null;
};

export const getCopyRoot = (root: IRoot): IRoot => {
  const copyRoot = JSON.parse(JSON.stringify(root));

  return copyRoot;
};
