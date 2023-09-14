import React from 'react';

import { Tree } from '../../components/Tree';

export const HomePage = () => (
  <section>
    <div className="mb-5">
      <h1 className="text-uppercase">
        Welcome to <span className="text-success">the tree</span> creator site!
      </h1>

      <p className="h4 text-secondary">
        Here you can create a tree system and manage it.{' '}
        <strong className="text-success">
          Feel free to reload the site, everything is stored.
        </strong>
      </p>
    </div>

    <Tree />
  </section>
);
