import { useContext } from 'react';
import { Modal } from '@mui/material';
import { UIContext } from '../context/ui/UIContext';
import { Login } from './Login';
import { Register } from './Register';
import styles from './FloatingModal.module.css';

const FloatingModal = () => {
  const { handleCloseLogin, isLoginOpen, isRegisterOpen, handleCloseRegister } = useContext(UIContext)
  return (
    <>
      {
        isLoginOpen && (
          <div>
            <Modal open={isLoginOpen} onClose={handleCloseLogin}>
              <div className={styles.modalContainer}>
                <Login />
              </div>
            </Modal>
          </div>
        )
      }
      {
        isRegisterOpen && (
          <div>
            <Modal open={isRegisterOpen} onClose={handleCloseRegister}>
              <div className={styles.modalContainer}>
                <Register />
              </div>
            </Modal>
          </div>
        )
      }

    </>
  );
};

export default FloatingModal;
