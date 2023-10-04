import { LOGIN } from "../../constant/ActionTypes"

export const StoreKey = (biometricKey: String) => {    
    return ({
        type: LOGIN,
        key: biometricKey,
    })
}