
# Todo Application

A simple Todo manager application built with React. This application allows users to add tasks, delete tasks, and toggle the completion status of tasks.

## Features

- Add tasks with a title, description, priority, and due date.
- Delete tasks.
- Toggle the completion status of tasks.

## Installation
1. Install dependencies:

    ```sh
    cd Todo-manager
    npm install
    ```

3. Run the application:

    ```sh
    npm start
    ```

## Usage

1. Enter task details in the form fields and click "Save Task" to add a task.
2. Click on the checkbox to toggle the completion status of a task.
3. Click on the "Delete" button to remove a task from the list.

## Components

- **App:** Main component that manages the state of tasks.
- **TaskForm:** Form component for adding tasks.
- **TaskList:** Component to display a list of tasks.
- **Task:** Component to display individual tasks.

## File Structure

```plaintext
Todo-manager/
│
├── public/
│   ├── index.html
│   └── ...
│
├── src/
│   ├── components/
│   │   ├── Task/
│   │   │   ├── Task.js
│   │   │   └── Task.css
│   │   ├── TaskForm/
│   │   │   ├── TaskForm.js
│   │   │   └── TaskForm.css
│   │   └── TaskList/
│   │       ├── TaskList.js
│   │       └── TaskList.css
│   ├── App.js
|   |__App.css
|   |
│   ├── index.js
│   └── index.css
│
└── README.md
