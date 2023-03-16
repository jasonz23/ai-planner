import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface TasksState {
    user: any
}

const initialState: TasksState = {
    user: {}
}

const slice = createSlice({
    name: "user",
    initialState,
    reducers:{
        setUser: (state, {payload}: PayloadAction<any>) => {
            state.user = payload;
        },
    }
})

export const {setUser} = slice.actions;

export const user = slice.reducer;