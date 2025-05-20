import { configureStore, createSlice } from '@reduxjs/toolkit';

// Простий slice-заглушка
const dummySlice = createSlice({
  name: 'dummy',
  initialState: {},
  reducers: {}
});

export const store = configureStore({
  reducer: {
    dummy: dummySlice.reducer
  },
});