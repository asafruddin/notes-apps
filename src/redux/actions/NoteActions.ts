import { ADD_NOTES, UPDATE_NOTES } from "../../constant/ActionTypes";

export const AddNotes = (title: String, text: String, id: number) => {
    
    return ({
        type: ADD_NOTES,
        title: title,
        text: text,
        id: id
    });
}

export const UpdateNote = (title: String, text: String, id: number) => {
    return ({
        type: UPDATE_NOTES,
        title: title, 
        text: text,
        id: id
    })
}