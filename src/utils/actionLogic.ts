import { constitution } from "../store/constitution";
import { appEvents, type appEventsType } from "./types/actions";


type VoidHandler = () => void;

const getConstitutionHandler = () => {
  const text = constitution.getFullText();
  navigator.clipboard.writeText(text);
}
const getTaskHandler = () => {}
const openModalHandler = () => {}
const closeModalHandler = () => {}
const confirmModalHandler = () => {}
const cancelModalHandler = () => {}


export const AppHandlers: Record<appEventsType, VoidHandler> = {
  [appEvents.getConstitution]: () => getConstitutionHandler(),
  [appEvents.getTask]: () => { console.log('getTask') },
  [appEvents.openModal]: () => { console.log('openModal') },
  [appEvents.closeModal]: () => { },
  [appEvents.confirmModal]: () => { },
  [appEvents.cancelModal]: () => { },
}
