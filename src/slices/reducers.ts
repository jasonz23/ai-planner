import { combineReducers } from '@reduxjs/toolkit';
import { tasks } from './tasks';
import {user} from "./user"

export const reducers = combineReducers({tasks:tasks, user: user});