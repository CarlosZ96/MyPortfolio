import { configureStore } from '@reduxjs/toolkit';
import pagesReducer from './Wpages/Wpages';

const store = configureStore({
  reducer: {
    Wpages: pagesReducer,
  },
});

export default store;
