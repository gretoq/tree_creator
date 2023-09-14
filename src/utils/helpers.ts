import { INode } from '../types';

export const getBranchById = (
  id: string,
  rootBranches: INode[],
): INode | null => {
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
