import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import choreService from "./choreService";

const initialState = {
  chores: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

//Create new goal
export const createChore = createAsyncThunk(
  "chores/create",
  async (choreData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await choreService.createChore(choreData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Get user chores
export const getChores = createAsyncThunk(
  "chores/getAll",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await choreService.getChores(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
//Delete user chore
export const deleteChore = createAsyncThunk(
  "chores/delete",
  async (id, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await choreService.deleteChore(id, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const choreSlice = createSlice({
  name: "chore",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createChore.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createChore.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.chores.push(action.payload);
      })
      .addCase(createChore.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getChores.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getChores.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.chores = action.payload;
      })
      .addCase(getChores.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteChore.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteChore.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.chores = state.chores.filter(
          (chore) => chore._id !== action.payload.id
        );
      })
      .addCase(deleteChore.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = choreSlice.actions;
export default choreSlice.reducer;
