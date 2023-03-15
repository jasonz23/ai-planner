import { combineReducers } from '@reduxjs/toolkit';
import { tasks } from './tasks';

export const reducers = combineReducers({tasks:tasks});