import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux'
import loginReducer from './loginReducer'
import registerReducer from './registerReducer'
import eventReducer from './eventReducer'

export const store = configureStore({
    reducer: {
        login: loginReducer,
        registrationForm: registerReducer,
        eventRegistrationForm: eventReducer,

    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: false
      })
  })
  
  export const useAppDispatch: () => typeof store.dispatch = useDispatch
  export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector
  
  export type AppDispatch = typeof store.dispatch
  export type RootState = ReturnType<typeof store.getState>