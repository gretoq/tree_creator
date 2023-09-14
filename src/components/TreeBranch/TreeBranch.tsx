import React, { useState } from 'react';
import { Badge, Button } from 'react-bootstrap';
import { BiEditAlt, BiSolidDownArrow, BiSolidRightArrow } from 'react-icons/bi';
import { BsFileEarmarkPlus, BsTrash } from 'react-icons/bs';

import { IBranch, IRoot } from '../../types';

interface Props {
  root?: IRoot;
  branch?: IBranch;
  parentId?: string;

  addNode: (parentId?: string) => void;
  removeBranch: (branchId: string, parentId?: string) => void;
  onEditName: (newName: string, branchId?: string) => void;
}

export const TreeBranch: React.FC<Props> = ({
  root,
  branch,
  parentId,
  addNode,
  removeBranch,
  onEditName,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newBranchName, setNewBranchName] = useState(
    root?.name || branch?.name,
  );

  const node = root ? root : branch;
  const totalBranches = node?.branches.length;
  const id = branch?.id;

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const toggleEditing = () => {
    setIsEditing((prev) => !prev);
  };

  const handleAddNode = () => {
    if (root) {
      addNode();

      return;
    }

    addNode(id);
  };

  const handleEditName = () => {
    if (!newBranchName) {
      return;
    }

    if (newBranchName === node?.name) {
      toggleEditing();

      return;
    }

    if (branch) {
      onEditName(newBranchName, branch.id);

      toggleEditing();

      return;
    }

    onEditName(newBranchName);

    toggleEditing();
  };

  const handleDeleteBranch = () => {
    if (root && id) {
      removeBranch(id);

      return;
    }

    if (id) {
      removeBranch(id, parentId);
    }
  };

  return (
    <>
      {node && (
        <article>
          <div className="d-flex align-items-center gap-4 mb-3">
            {Number(totalBranches) > 0 && (
              <Button
                onClick={handleToggle}
                data-toggle="tooltip"
                title={isOpen ? 'Collapse' : 'Expand'}
              >
                {isOpen ? <BiSolidDownArrow /> : <BiSolidRightArrow />}

                {totalBranches && (
                  <Badge
                    data-toggle="tooltip"
                    title={`${totalBranches} branche(s) in this ${
                      root ? 'root' : 'branch'
                    }`}
                  >
                    {totalBranches}
                  </Badge>
                )}
              </Button>
            )}

            <div
              style={{
                border: '1px solid black',
              }}
              className="p-2 border rounded"
              onClick={toggleEditing}
            >
              {isEditing ? (
                <div className="d-flex align-items-center gap-3">
                  <input
                    type="text"
                    value={newBranchName}
                    className={`${root ? 'h4' : 'h6'}`}
                    onChange={(e) => setNewBranchName(e.target.value)}
                    onBlur={handleEditName}
                    onKeyUp={(e) => {
                      if (e.key === 'Enter') {
                        handleEditName();
                      }

                      if (e.key === 'Escape') {
                        toggleEditing();
                      }
                    }}
                    autoFocus
                  />

                  <Button
                    onClick={handleEditName}
                    data-toggle="tooltip"
                    title="Edit name"
                  >
                    <BiEditAlt />
                  </Button>
                </div>
              ) : root ? (
                <h3>
                  <strong>{node.name}</strong>
                </h3>
              ) : (
                <h5>{node.name}</h5>
              )}
            </div>

            <Button
              onClick={handleAddNode}
              data-toggle="tooltip"
              title="Add new branch"
            >
              <BsFileEarmarkPlus />
            </Button>

            {!root && (
              <Button
                variant="danger"
                onClick={handleDeleteBranch}
                data-toggle="tooltip"
                title="Delete this branch"
              >
                <BsTrash />
              </Button>
            )}
          </div>

          {isOpen && (
            <div className="ms-4">
              {node.branches.map((child) => (
                <div
                  key={child.id}
                  className="d-flex align-items-center gap-3 position-relative"
                >
                  <div
                    style={{
                      width: '2px',
                      backgroundColor: '#ccc',
                      height: '100%',
                      position: 'absolute',
                      left: '-20px',
                      top: '0',
                    }}
                  />

                  <div
                    style={{
                      width: '20px',
                      backgroundColor: '#ccc',
                      height: '2px',
                      position: 'absolute',
                      left: '-20px',
                      top: '25px',
                    }}
                  />

                  <TreeBranch
                    branch={child}
                    parentId={id}
                    addNode={addNode}
                    removeBranch={removeBranch}
                    onEditName={onEditName}
                  />
                </div>
              ))}
            </div>
          )}
        </article>
      )}
    </>
  );
};
