// eventRegistrationFormSlice.ts
import { createSlice } from '@reduxjs/toolkit';

export const eventRegistrationFormSlice = createSlice({
  name: 'eventRegistrationForm',
  initialState: {
    name: '',
    date: '',
    city: '',
    participants: '',
    details: '',
  },
  reducers: {
    setName: (state, action) => {
      state.name = action.payload;
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setParticipants: (state, action) => {
      state.participants = action.payload;
    },
    setDetails: (state, action) => {
      state.details = action.payload;
    },
    resetForm: state => {
      state.name = '';
      state.date = '';
      state.city = '';
      state.participants = '';
      state.details = '';
    },
  },
});

export const { setName, setDate, setCity, setParticipants, setDetails, resetForm } = eventRegistrationFormSlice.actions;

export default eventRegistrationFormSlice.reducer;