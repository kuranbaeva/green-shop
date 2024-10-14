



import React, { useState } from 'react';
import { EyeOff, Eye } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom'; 
import './Login.scss';
import instance from '../../axios';

export default function Login({ closeModal, onLoginSuccess }) {
    const [showPassword, setShowPassword] = useState(false);
    const [formLogin, setFormLogin] = useState({
        email: '',
        password: ''
    });
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState(null);
    const navigate = useNavigate(); 

    const handleChangeLogin = (e) => {
        const { name, value } = e.target;
        setFormLogin((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

  
    const handleSubmitLogin = (e) => {
        e.preventDefault();
        instance.post('/auth/login/', formLogin)
            .then(response => {
                console.log('Response from server:', response.data);
                
                if (response.data.token_key) {
                    localStorage.setItem('token', response.data.token_key);
                    localStorage.setItem('userId', response.data.id);
                    localStorage.setItem('userAvatar', response.data.avatar);
                    setError(null);
                    setShowModal(true);
    
                    setTimeout(() => {
                        setShowModal(false);
                    }, 2000);
                    closeModal(); 
                    onLoginSuccess();
                } else {
                    console.error('Token is undefined. Response:', response.data);
                    setError('Токен не получен. Проверьте сервер.');
                }
            })
            .catch(error => {
                console.log('Login error', error);
                setError('Ошибка при авторизации, проверьте email и пароль.');
            });
    };
    
    const handleShowPassword = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <>
            <div className="wrapper">
                <div className="overlay">
                    <form onSubmit={handleSubmitLogin}>
                        <div className="login">
                            <h4>Enter your email and password to login.</h4>

                            <label htmlFor="email">
                                <input
                                    name='email'
                                    value={formLogin.email}
                                    onChange={handleChangeLogin}
                                    type="text"
                                    placeholder="Email..."
                                />
                            </label>

                            <label className="password-wrapper">
                                <input
                                    name='password'
                                    value={formLogin.password}
                                    onChange={handleChangeLogin}
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Password..."
                                />
                                <Link to="/forgot-password" className="forgot-password-link">
                                    Forgot password?
                                </Link>
                                <div className="eye-icon" onClick={handleShowPassword}>
                                    {showPassword ? <Eye /> : <EyeOff />}
                                </div>
                            </label>

                            <button className='btn' type="submit">Login</button>
                        </div>
                    </form>

                    {showModal && (
                        <div className="modal">
                            <div className="modal-content">
                                <h2>Авторизация прошла успешно!</h2>
                            </div>
                        </div>
                    )}
                    {error && <div className="error-message">{error}</div>}
                </div>
            </div>
        </>
    );
}

