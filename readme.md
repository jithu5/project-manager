# Project Manager

A React-based Project Manager that allows users to create, read, and delete projects. Each project can have multiple sub-tasks that can also be added and deleted. This project is built without using Context or Redux, relying entirely on props drilling to enhance understanding of prop passing and component communication.

-----

## Features
 - Create Projects: Add new projects with a title, description, and due date.
 - Delete Projects: Remove existing projects.
 - View Project Details: Select a project to view its details and associated tasks.
#### Manage Tasks:
 - Add new tasks to a selected project.
 - Delete tasks from a project.
 - Prop Drilling: Demonstrates component communication solely through prop passing.

-----

## Components
1. App
 - Root component managing global state for projects and tasks.
   Handles CRUD operations for projects and tasks.
2. SideBar
 - Displays a list of all projects.
   Allows users to select a project or start adding a new project.
3. Selectedproject
 - Displays details of the currently selected project.
   Shows the list of tasks for the project.
   Provides options to delete the project or manage its tasks.
4. Tasks
 - Displays a list of tasks for the selected project.
   Includes options to add and delete tasks.
5. NewProject
 - Form for creating a new project with a title, description, and due date.
6. NoProjectSelected
 - Placeholder component displayed when no project is selected.
7. NewTasks
 - Form for adding a new task to the selected project.
8. Button
 - A custom button created for its reusability.
9. Input
 - A custom input component for reusability.
10. Modal
 - This modal component is shown when the data for adding project is not valid (Invalid input for creating a new project).

-----

 ## Installation

 ```bash
    git clone https://github.com/jithu5/project-manager.git

 ```
 ```bash
    cd project-manager

 ```
 ```bash
    npm install

 ```
 ```bash
    npm run dev

 ```
---