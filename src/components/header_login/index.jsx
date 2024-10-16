import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import Login from '../login';
import Register from '../register';
export default function Header({ closeModal, onLoginSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="wrapper">
    <div className='form'>
        <div className='form__close' onClick={closeModal}>
            <img src="./onClose.svg" alt="" />
        </div>
        <div className="form__link">
            <h1 className={isLogin ? 'active' : ''}
                onClick={() => setIsLogin(true)} >

                Login
            </h1>
            <span>|</span>
            <h1
                className={!isLogin ? 'active' : ''}
                onClick={() => setIsLogin(false)}
            >
                Register
            </h1>
        </div>


        {isLogin ? (
            <>
           <Login closeModal={closeModal} onLoginSuccess={onLoginSuccess} />
            </>
        ) : (
            <>  
       <Register closeModal={closeModal} onLoginSuccess={onLoginSuccess}/>
            </>
        )}

    </div>
</div>
  );
}
