import { createSlice } from "@reduxjs/toolkit";

const initialState: any[] = [];

const noteSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        AddNotes(state: any, action: any) {
            const {text, title, id} = action.payload;

            state.note.push({
                text, title, id
            })
        },
        UpdateNotes(state: any, action: any) {
            const {text, title, id} = action.payload;

            state.note.push({
                text, title, id
            })
        }
    }
});

export const {AddNotes, UpdateNotes} = noteSlice.actions;
export default noteSlice.reducer;