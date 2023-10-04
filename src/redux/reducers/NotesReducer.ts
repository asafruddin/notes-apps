import { ADD_NOTES, UPDATE_NOTES } from "../../constant/ActionTypes";

const initialState: any[] = [];

export default function NotesReducers (state = initialState, action: any) {
    switch (action.type) {      
        case ADD_NOTES:
            return state.concat({
                text: action.text,
                title: action.title,
                id: action.id,
            })
        case UPDATE_NOTES:
         return state.map(notes => {
                if(notes.id === action.id){
                    return {
                        text: action.text,
                        title: action.title,
                        id: notes.id,
                    }
                }
                return notes;
                
            });
        default:
            return state;
    }
}