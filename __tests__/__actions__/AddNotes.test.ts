import {expect, describe, it} from '@jest/globals'
import { AddNotes } from '../../src/redux/actions/NoteActions';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../../src/redux/reducers/RootReducer';

describe('testing the add notes action', () => {
    const store = configureStore({
        reducer: rootReducer
    })

    it('user add note with title and notes succeed', async () => {
        await store.dispatch(AddNotes('Hello', 'This is the notes for hello title', 10));
        expect(store.getState).toMatchSnapshot()
    })
})