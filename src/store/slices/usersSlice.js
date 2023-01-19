import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from '../thunks/fetchUsers';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
  },
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending);
    builder.addCase(fetchUsers.fulfilled);
    builder.addCase(fetchUsers.fulfilled);
  },
});

export const usersReducer = usersSlice.reducer;
