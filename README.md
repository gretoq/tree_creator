# Tree Visualization Web App

This is a web application built with React that allows users to create and visualize the structure of text nodes in a tree-like hierarchy. Users can add new nodes (roots) and delete existing ones.

## Table of Contents

- [Key Features](#key-features)
- [Technologies and Libraries Used](#technologies-and-libraries-used)
- [How to Run](#how-to-run)

## Key Features

### - Creation of a tree root using the "Create Root" button.

<video width="640" height="480" controls>
  <source src="public/videos/create_root.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### - Addition of new nodes (branches) to existing nodes.

<video width="640" height="480" controls>
  <source src="public/videos/add_branches.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### - Deletion of nodes and their sub-trees.

<video width="640" height="480" controls>
  <source src="public/videos/delete_branches.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### - Storage of the tree structure in local storage (localStorage).

<video width="640" height="480" controls>
  <source src="public/videos/store.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

### - Editing of node names.

<video width="640" height="480" controls>
  <source src="public/videos/edit.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

## Technologies and Libraries Used

- React
- React Bootstrap for styling and UI components
- React Router for navigation
- TypeScript for type safety
- Local Storage (localStorage) for data persistence
- Redux for state management

## How to Run

1. Clone the repository::

   ```bash
    git clone <repository URL>
   ```

2. Navigate to the project folder:

   ```bash
    cd tree_creator/
   ```

3. Install dependencies:
   ```bash
   npm install or yarn
   ```
4. Start the project:
   ```bash
   npm start or yarn start
   ```
5. Open your web browser and go to `http://localhost:3000` to access the web application. The page will reload if you make edits.
