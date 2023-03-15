import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface TasksState {
    tasks: any[]
}

const initialState: TasksState = {
    tasks: []
}

const slice = createSlice({
    name: "tasks",
    initialState,
    reducers:{
    }
})

export const {} = slice.actions;

export const tasks = slice.reducer;