import { UIState } from './UIProvider';

type UIActionType =
    | { type: '[UI] - Close Login Modal' }
    | { type: '[UI] - Close Register Modal' }
    | { type: '[UI] - Open Login Modal' }
    | { type: '[UI] - Open Register Modal' }

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
    switch (action.type) {
        case '[UI] - Open Login Modal':
            return {
                ...state,
                isLoginOpen: true,
                isRegisterOpen: false
            };
        case '[UI] - Open Register Modal':
            return {
                ...state,
                isRegisterOpen: true,
                isLoginOpen: false
            };
        case '[UI] - Close Login Modal':
            return {
                ...state,
                isLoginOpen: false,
                isRegisterOpen: false
            };
        case '[UI] - Close Register Modal':
            return {
                ...state,
                isRegisterOpen: false,
                isLoginOpen: false
            };

        default:
            return state;
    }
}