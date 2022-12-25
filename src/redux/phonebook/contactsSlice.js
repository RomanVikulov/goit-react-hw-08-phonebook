import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operations';
/* or import { createAction, isAnyOf } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './operations'; */
import { phonebookApi } from './operations';

// === code with RTK Query ===

const handleResetContacts = state => {
  state.items = [];
  state.isLoading = false;
  state.error = null;
};

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logOut.fulfilled, handleResetContacts)
      .addMatcher(
        phonebookApi.endpoints.getContacts.matchFulfilled,
        (state, action) => {
          state.items = action.payload;
          state.isLoading = false;
          state.error = null;
        }
      );
    },
  });
  
  export const contactsReducer = contactsSlice.reducer;
 