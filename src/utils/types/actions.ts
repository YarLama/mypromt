export const appEvents = {
  getConstitution: 'getConstitution',
  getTask: 'getTask',
  openModal: 'openModal',
  closeModal: 'closeModal',
  confirmModal: 'confirmModal',
  cancelModal: 'cancelModal'
} as const;

declare global {
  interface DocumentEventMap {
    'app-action': CustomEvent<{ action: appEventsType }>;
  }
}

export type appEventsType = typeof appEvents[keyof typeof appEvents]


