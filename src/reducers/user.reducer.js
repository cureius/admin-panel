import { userContants } from "../actions/constants"

const initState = {
    error: null,
    message: '',
    loading: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action) => {
    // eslint-disable-next-line default-case
    switch(action.type){
        case userContants.USER_REGISTER_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case userContants.USER_REGISTER_SUCCESS:
            state = {
                ...state,
                loading: false,
                message: action.payload.message
            }
            break;
        case userContants.USER_REGISTER_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload.error
            }
            break;
    }

    return state;
}