import { combineReducers } from "@reduxjs/toolkit";
import NotesReducers from "./NotesReducer";
import AuthReducers from "./AuthReducer";

const rootReducer = combineReducers({
    notesReducer: NotesReducers,
    authReducer: AuthReducers,
});

export default rootReducer;