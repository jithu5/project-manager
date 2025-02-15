import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

function NewProject({ addProject, onCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const modal = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    // validation
    addProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <Modal ref={modal}>
        <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
        <p className="text-slate-400 mb-4">
          Oops... looks like you forgot to enter a value.
        </p>
        <p className="text-slate-400 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button onClick={onCancel}  className="text-stone-800 hover:text-slate-950">
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950 hover:text-white"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" label={"Title"} ref={title} />
          <Input label={"Description"} isTextarea ref={description} />
          <Input type="date" label={"Due Date"} ref={dueDate} />
        </div>
      </div>
    </>
  );
}

export default NewProject;
