import { createSlice } from '@reduxjs/toolkit';

export const registrationFormSlice = createSlice({
  name: 'registrationForm',
  initialState: {
    username: '',
    email: '',
    password: '',
    verifyPassword: '',
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setVerifyPassword: (state, action) => {
      state.verifyPassword = action.payload;
    },
    resetForm: state => {
      state.username = '';
      state.email = '';
      state.password = '';
      state.verifyPassword = '';
    },
  },
});

export const { setUsername, setEmail, setPassword, setVerifyPassword, resetForm } = registrationFormSlice.actions;

export default registrationFormSlice.reducer;