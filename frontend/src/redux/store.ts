import { configureStore } from '@reduxjs/toolkit';
import { employeesApi } from '../services/employees';

const store = configureStore({
  reducer: {
    [employeesApi.reducerPath]: employeesApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(employeesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
