import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { BiSolidDownArrow, BiSolidRightArrow } from 'react-icons/bi';
import { BsFileEarmarkPlus, BsTrash } from 'react-icons/bs';

import { INode, IRoot } from '../../types';

interface Props {
  root?: IRoot;
  branch?: INode;
  parentId?: string;
  addNode: (parentId?: string) => void;
  removeBranch: (branchId: string, parentId?: string) => void;
}

export const TreeBranch: React.FC<Props> = ({
  root,
  branch,
  parentId,
  addNode,
  removeBranch,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const node = root ? root : branch;
  const id = branch?.id;

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleAddNode = () => {
    if (root) {
      addNode();

      return;
    }

    addNode(id);
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
            {node.branches?.length > 0 && (
              <Button
                onClick={handleToggle}
                data-toggle="tooltip"
                title={isOpen ? 'Collapse' : 'Expand'}
              >
                {isOpen ? <BiSolidDownArrow /> : <BiSolidRightArrow />}
              </Button>
            )}

            <div
              style={{
                border: '1px solid black',
              }}
              className="p-2 border rounded"
            >
              {root ? (
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
