import { configureStore } from "@reduxjs/toolkit";
import todoProvider from "../features/todo/todoSlice";

export const store = configureStore({
    reducer : todoProvider
})