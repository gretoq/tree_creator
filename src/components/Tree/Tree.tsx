import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { actions, selectRoot } from '../../redux/root';
import { INode, IToast } from '../../types';
import { ConfirmModal } from '../ConfirmModal';
import { CreateModal } from '../CreateModal';
import { MainButton } from '../MainButton';
import { Toaster } from '../Toaster';
import { TreeBranch } from '../TreeBranch';

export const Tree = () => {
  const [openCreateRootModal, setOpenCreateRootModal] = useState(false);
  const [openConfirmDeleteRoot, setopenConfirmDeleteRoot] = useState(false);

  const [name, setName] = useState('');

  const [showToast, setShowToast] = useState(false);
  const [toastBody, setToastBody] = useState<IToast | null>(null);

  const [openCreateBranchModal, setOpenCreateBranchModal] = useState(false);
  const [openConfirmDeleteBranch, setOpenConfirmDeleteBranch] = useState(false);

  const [currentBranchId, setCurrentBranchId] = useState<string>('');
  const [parentBranchId, setParentBranchId] = useState<string>('');

  const { root } = useAppSelector(selectRoot);
  const dispatch = useAppDispatch();

  const handleOpenCreateRootModal = () => {
    setOpenCreateRootModal(true);
  };

  const handleCloseCreateRootModal = () => {
    setOpenCreateRootModal(false);

    setName('');
  };

  const handleOpenCreateBranchModal = (id?: string) => {
    if (id) {
      setParentBranchId(id);
    }

    setOpenCreateBranchModal(true);
  };

  const handleCloseCreateBranchModal = () => {
    setOpenCreateBranchModal(false);
  };

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleOpenConfirmDeleteRoot = () => {
    setopenConfirmDeleteRoot(true);
  };

  const handleCloseConfirmDeleteRoot = () => {
    setopenConfirmDeleteRoot(false);
  };

  const hadnleOpenConfirmDeleteNode = (id: string, parentId?: string) => {
    if (parentId) {
      setParentBranchId(parentId);
    }

    setCurrentBranchId(id);
    setOpenConfirmDeleteBranch(true);
  };

  const handleCloseConfirmDeleteBranch = () => {
    setOpenConfirmDeleteBranch(false);

    setParentBranchId('');
    setCurrentBranchId('');
  };

  const handleCreateRoot = () => {
    if (!name.trim()) {
      setToastBody({
        title: 'Wrong input',
        description: 'Name of root is required!',
        danger: true,
      });

      setShowToast(true);

      setOpenCreateRootModal(false);

      return;
    }

    const newRoot = {
      name,
      branches: [],
    };

    dispatch(actions.createRoot(newRoot));

    handleCloseCreateRootModal();

    setName('');

    setToastBody({
      title: 'Successful',
      description: 'New Root is created!',
    });

    setShowToast(true);
  };

  const handleDeleteRoot = () => {
    dispatch(actions.removeRoot());

    handleCloseConfirmDeleteRoot();

    setToastBody({
      title: 'Successful',
      description: 'Root is deleted!',
    });

    setShowToast(true);
  };

  const handleAddBranch = () => {
    if (!name.trim()) {
      setToastBody({
        title: 'Wrong input',
        description: 'Name of branch is required!',
        danger: true,
      });

      setShowToast(true);

      setOpenCreateRootModal(false);

      return;
    }

    const id = uuidv4();

    const newBranch: INode = {
      id,
      name,
      branches: [],
    };

    dispatch(actions.addBranch(newBranch, parentBranchId));

    handleCloseCreateBranchModal();

    setToastBody({
      title: 'Successful',
      description: 'New Branch is added!',
    });

    setShowToast(true);

    setName('');

    setParentBranchId('');
  };

  const handleDeleteBranch = () => {
    if (!currentBranchId) {
      setToastBody({
        title: 'No data',
        description: 'Oops.. Something went wrong, please try again later!',
        danger: true,
      });

      setShowToast(true);

      setOpenConfirmDeleteBranch(false);

      return;
    }

    dispatch(actions.deleteBranch(currentBranchId, parentBranchId));

    setOpenConfirmDeleteBranch(false);

    setToastBody({
      title: 'Successful',
      description: 'Branch is deleted!',
    });

    setShowToast(true);

    setCurrentBranchId('');
    setParentBranchId('');
  };

  const handleCloseToast = () => {
    setShowToast(false);
  };

  return (
    <>
      <CreateModal
        isOpen={openCreateRootModal}
        title="Create root"
        label="Root name"
        textValue={name}
        onChange={handleName}
        onOk={handleCreateRoot}
        onClose={handleCloseCreateRootModal}
      />

      <CreateModal
        isOpen={openCreateBranchModal}
        title="Create branch"
        label="Branch name"
        textValue={name}
        onChange={handleName}
        onOk={handleAddBranch}
        onClose={handleCloseCreateBranchModal}
      />

      <ConfirmModal
        open={openConfirmDeleteRoot}
        onClose={handleCloseConfirmDeleteRoot}
        title="Are you sure you want to delete the root?"
        onOk={handleDeleteRoot}
      />

      <ConfirmModal
        open={openConfirmDeleteBranch}
        onClose={handleCloseConfirmDeleteBranch}
        title="Are you sure you want to delete the branch?"
        onOk={handleDeleteBranch}
      />

      {!root && <h2 className="mb-3">Let`s create a Root</h2>}

      <div className="mb-4">
        <MainButton
          text={root ? 'Delete root' : 'Create root'}
          handlerOnClick={
            root ? handleOpenConfirmDeleteRoot : handleOpenCreateRootModal
          }
          danger={!!root}
        />
      </div>

      {root && (
        <TreeBranch
          root={root}
          addNode={handleOpenCreateBranchModal}
          removeBranch={hadnleOpenConfirmDeleteNode}
        />
      )}

      {toastBody && (
        <Toaster
          show={showToast}
          toastBody={toastBody}
          onClose={handleCloseToast}
        />
      )}
    </>
  );
};
