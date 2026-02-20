import { appEvents, type appEventsType } from "./types/actions";


type VoidHandler = () => void;

export const AppHandlers: Record<appEventsType, VoidHandler> = {
 [appEvents.getConstitution]: () => { console.log('getConstitution')},
 [appEvents.getTask]: () => { console.log('getTask') },
 [appEvents.openModal]: () => { console.log('openModal') },
 [appEvents.closeModal]: () => {},
 [appEvents.confirmModal]: () => {},
 [appEvents.cancelModal]: () => {},
}
