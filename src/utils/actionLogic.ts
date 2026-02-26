import { constitution } from "../store/constitution";
import { task } from "../store/task";
import { appEvents, type appEventsType } from "./types/actions";

type VoidHandler = () => void;

const getConstitutionHandler = () => {
  const roleEl = document.querySelector<IInputText>("input-text#ct-1");
  const role = roleEl?.value.trim();
  const techStackEl = document.querySelector<IInputText>("input-text#ct-2");
  const techStack = techStackEl?.value.trim()
  role && constitution.updateRole(role);
  techStack && constitution.updateStack(techStack);
  const text = constitution.getFullText();
  navigator.clipboard.writeText(text);
}
const getTaskHandler = () => { 
  //@ts-ignore
  const id = window.Temporal.Now.instant().epochMilliseconds.toString(36).slice(-6);
  const taskGroupEl = document.querySelector('input-task-group');
  let tasks = taskGroupEl?.value;
  let data = taskGroupEl?.data || "";
  if (tasks) {
    if (tasks?.length === 1 && tasks[0]?.text === "") tasks = [];
    if (tasks?.length > 1 && tasks?.slice(-1)[0].text === "") tasks.pop();
    task.updateTasks(tasks);
  }
  task.updateData(data);
  navigator.clipboard.writeText(task.getFullText()) 
}
const openModalHandler = () => { }
const closeModalHandler = () => { }
const confirmModalHandler = () => { }
const cancelModalHandler = () => { }


export const AppHandlers: Record<appEventsType, VoidHandler> = {
  [appEvents.getConstitution]: () => getConstitutionHandler(),
  [appEvents.getTask]: () => getTaskHandler(),
  [appEvents.openModal]: () => openModalHandler(),
  [appEvents.closeModal]: () => closeModalHandler(),
  [appEvents.confirmModal]: () => confirmModalHandler(),
  [appEvents.cancelModal]: () => cancelModalHandler(),
}
