import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Task, taskState } from '../interfaces/tasks';

const initialState: taskState = {
    tasks: [],
}

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            console.log(state.tasks)
            state.tasks.unshift(action.payload);
        },
        editTask: (state, action: PayloadAction<Task>) => {
            const { id, name, status, description, price } = action.payload;
            const existingTask = state.tasks.find(task => task.id === id);

            if (existingTask) {
                existingTask.name = name;
                existingTask.status = status;
                existingTask.description = description;
                existingTask.price = price;
            }
        },
        deleteTask: (state, action: PayloadAction<string>) => {
            const updatedTasks = state.tasks.filter(task => task.id !== action.payload);
            return { ...state, tasks: updatedTasks, };
        },
    },

})

// Action creators are generated for each case reducer function
export const { addTask, editTask, deleteTask } = taskSlice.actions

export default taskSlice.reducer