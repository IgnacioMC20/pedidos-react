import { UserIState } from "./UserProvider";


type UIActionType =
    | { type: '[user] loggin' }

export const userReducer = (state: UserIState, action: UIActionType): UserIState => {
    switch (action.type) {
        case '[user] loggin':
            return {
                ...state,
                isLoggedIn: false,
                id: 'asd'
            };
        default:
            return state;
    }
}