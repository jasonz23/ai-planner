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
        setTasks: (state, {payload}: PayloadAction<any[]>) => {
            state.tasks = payload;
        },
        addTask: (state, {payload}: PayloadAction<any>) => {
            let seen = false;
            state.tasks.forEach((task, index) => {
                if (task.event_id === payload.event_id) {
                    state.tasks[index] = payload;
                    seen = true;
                }
            })
            if (!seen) {
                state.tasks.push(payload);
            }
        },
    }
})

export const {setTasks, addTask} = slice.actions;

export const tasks = slice.reducer;