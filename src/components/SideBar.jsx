import React from "react";
import Button from "./Button";

function SideBar({ onStartAddProject, projects, onSelect, onSelectId }) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul>
        {projects.map((project) => {
          let cssClasses = "text-stone-400";
          if (project.id == onSelectId) {
            cssClasses = "text-stone-200 bg-stone-800";
          }
          return (
            <li className="mt-8" key={project.id}>
              <button
                onClick={() => onSelect(project.id)}
                className={`w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800 ${cssClasses}`}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default SideBar;
