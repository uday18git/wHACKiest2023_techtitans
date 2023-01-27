import { atom } from 'recoil'

// am confused of this, you may take time and do this
export const chatState = atom({
  key: 'chatState',
  default: 'form',
})

export const iconState = atom({
  key: 'iconState',
  default: 'chat',
})

export const msgLoading = atom({
  key: 'msgLoad',
  default: false,
})

export const updateState = atom({
  key: 'updateState',
  default: false,
})
