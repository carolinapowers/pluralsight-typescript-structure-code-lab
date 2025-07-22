export interface ClickEvent {
  type: 'click'
  target: string
  timestamp: number
}

export interface KeyboardEvent {
  type: 'keydown' | 'keyup'
  key: string
  ctrlKey: boolean
  shiftKey: boolean
}

export type AppEvent = ClickEvent | KeyboardEvent