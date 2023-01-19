import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const deleteUser = createAsyncThunk('users/deleteUser', async (user) => {
  const { data } = await axios.delete(`http:localhost:3005/users/${user.id}`);
  return data;
});

export { deleteUser };
