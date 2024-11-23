import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SideBar from "./components/SideBar";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  function handleStartProject() {
    setProjectsState((prevState) => {
      return { ...prevState, selectedProjectId: null };
    });
  }
  function handleAddProject(projectData) {
    setProjectsState((prevState) => {
      const newprojects = { ...projectData, id: Math.random() * 1000 };
      return {
        selectedProjectId:undefined,
        projects: [...prevState.projects, newprojects],
      };
    });
  }

  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject addProject={handleAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartProject} />;
  }
  return (
    <>
      <main className="min-h-screen w-full my-8 flex gap-8 ">
        <SideBar onStartAddProject={handleStartProject} projects={projectsState.projects} />
        {content}
      </main>
    </>
  );
}

export default App;
