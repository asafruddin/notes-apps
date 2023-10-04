import { describe, it } from "@jest/globals";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../../src/redux/reducers/RootReducer";
import { StoreKey } from "../../src/redux/actions/AuthActions";
import { UpdateNote } from "../../src/redux/actions/NoteActions";

describe('testing add biometric and login actions', () => {
    const store = configureStore({
        reducer: rootReducer
    })

    it('user login should be success', async () => {
        await store.dispatch(UpdateNote('title', 'text', 9))
        expect(store.getState).toMatchSnapshot()
    })
})