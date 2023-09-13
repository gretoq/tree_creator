import React from 'react';

import { MainButton } from '../../components/MainButton';

export const HomePage = () => {
  const handleCreateRoot = () => {};

  return (
    <div>
      <div>
        <h1>Welcome to the tree creator site!</h1>

        <p>
          Here you can create a tree system and manage it.{' '}
          <strong>Feel free to reload the site, everything is stored.</strong>
        </p>
      </div>

      <div>
        <MainButton text="Create root" handlerOnClick={handleCreateRoot} />
      </div>
    </div>
  );
};
