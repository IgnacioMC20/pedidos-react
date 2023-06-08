import { FC, useReducer } from 'react';
import { UIContext } from './UIContext';
import { uiReducer } from './uiReducer';

export interface UIState {
  isLoginOpen: boolean;
  isRegisterOpen: boolean;
}

const UI_INITIAL_STATE: UIState = {
  isLoginOpen: false,
  isRegisterOpen: false,
};

export const UIProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE);

  const handleOpenLogin = () => dispatch({ type: '[UI] - Open Login Modal' });
  const handleCloseLogin = () => dispatch({ type: '[UI] - Close Login Modal' });
  const handleOpenRegister = () => dispatch({ type: '[UI] - Open Register Modal' });
  const handleCloseRegister = () =>
    dispatch({ type: '[UI] - Close Register Modal' });

  return (
    <UIContext.Provider
      value={{
        ...state,

        //Methods
        handleOpenLogin,
        handleCloseLogin,
        handleCloseRegister,
        handleOpenRegister,
      }}
    >
      {children}
    </UIContext.Provider>
  );
};
