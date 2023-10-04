import { LOGIN } from "../../constant/ActionTypes";

const initialState: {} = {biometric_key: undefined, is_login: false};

export default function AuthReducers (state = initialState, action: any) {
    switch (action.type) {
        case LOGIN:            
            return {
                ...state,
                biometric_key: action.key,
                is_login: true,
            };
    
        default:
            return state;
    }
}