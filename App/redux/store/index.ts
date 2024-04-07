import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import reducer from "../reducer";


const Store = configureStore({
  reducer
})

export type RootState = ReturnType<typeof Store.getState>
export type AppDispatch = typeof Store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch 

export default Store;