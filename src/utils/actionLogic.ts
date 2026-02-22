import { constitution } from "../store/constitution";
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
const getTaskHandler = () => { }
const openModalHandler = () => { }
const closeModalHandler = () => { }
const confirmModalHandler = () => { }
const cancelModalHandler = () => { }


export const AppHandlers: Record<appEventsType, VoidHandler> = {
  [appEvents.getConstitution]: () => getConstitutionHandler(),
  [appEvents.getTask]: () => { console.log('getTask') },
  [appEvents.openModal]: () => { console.log('openModal') },
  [appEvents.closeModal]: () => { },
  [appEvents.confirmModal]: () => { },
  [appEvents.cancelModal]: () => { },
}
