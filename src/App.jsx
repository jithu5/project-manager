import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SideBar from "./components/SideBar";
import Selectedproject from "./components/Selectedproject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

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
        selectedProjectId:undefined,
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

  function handleSelectproject(id) {
    setProjectsState((prevState) => {
      return { ...prevState, selectedProjectId: id };
    });
  }

  const selecetedproject = projectsState.projects.find(project=>project.id === projectsState.selectedProjectId)
  
  let content=<Selectedproject project={selecetedproject}/> ;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject addProject={handleAddProject} onCancel={handleCancelAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartProject} />;
  }
  return (
    <>
      <main className="min-h-screen w-full my-8 flex gap-8 ">
        <SideBar onStartAddProject={handleStartProject} projects={projectsState.projects} onSelect={handleSelectproject} onSelectId={projectsState.selectedProjectId} />
        {content}
      
      </main>
    </>
  );
}

export default App;
