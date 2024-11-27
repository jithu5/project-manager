import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SideBar from "./components/SideBar";
import Selectedproject from "./components/Selectedproject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks:[]
  });

  // function to handle task addition
  function handleAddTask(text) {
    setProjectsState(prevState=>{
      const taskId = Math.random()*1000;
      const newTask = {
        text:text,id:taskId,projectId:prevState.selectedProjectId
      }
      return{
        ...prevState,
        tasks: [...prevState.tasks,newTask]
      }
    })
  }
  
  // function to handle task deletion
  function handleDeleteTask(taskId) {
     setProjectsState((prevState) => {
       return {
         ...prevState,
         tasks: prevState.tasks.filter(
           (task) => task.id !== taskId
         ),
       };
     });
  }

  // function to open a project form so to create a new project (NewProject Component)
  function handleStartProject() {
    setProjectsState((prevState) => {
      return { ...prevState, selectedProjectId: null };
    });
  }

  // function for adding new projects
  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const newprojects = { ...projectData, id: Math.random() * 1000 };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newprojects],
      };
    });
  }

  // function to cancel adding a new project
  function handleCancelAddProject() {
    setProjectsState((prevState) => {
      return { ...prevState, selectedProjectId: undefined };
    });
  }

  // function to select a project in the sidebar (SideBar Component)  and display it in the selected project component  (SelectedProject Component) this only changes the id to the slelected project rest is done by the find method below it
  function handleSelectproject(id) {
    setProjectsState((prevState) => {
      return { ...prevState, selectedProjectId: id };
    });
  }

  // to find the project that is currently selected
  const selecetedproject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId
  );

  // delete a project from the selected project component
  function handleDelete() {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  let content = (
    <Selectedproject
      onDelete={handleDelete}
      project={selecetedproject}
      onAddTask={handleAddTask}
      onDeletetask={handleDeleteTask}
      tasks={projectsState.tasks}
    />
  );

  if (projectsState.selectedProjectId === null) {
    content = (
      <NewProject
        addProject={handleAddProject}
        onCancel={handleCancelAddProject}
      />
    );
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartProject} />;
  }
  return (
    <>
      <main className="min-h-screen w-full my-8 flex gap-8 ">
        <SideBar
          onStartAddProject={handleStartProject}
          projects={projectsState.projects}
          onSelect={handleSelectproject}
          onSelectId={projectsState.selectedProjectId}
        />
        {content}
      </main>
    </>
  );
}

export default App;