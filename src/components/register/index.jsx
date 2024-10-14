
import React, { useState } from 'react';
import { EyeOff, Eye } from 'lucide-react';
import './Register.scss';
import instance from '../../axios';

export default function Register({closeModal, onLoginSuccess}) {
    const [showPassword, setShowPassword] = useState(false);
    const [formRegister, setFormRegister] = useState({
        email: '',
        phone: '',
        first_name: '',
        last_name: '',
        password: ''
    });
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormRegister((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmitRegister = (e) => {
        e.preventDefault();
        instance.post('/auth/register/', formRegister)
            .then(response => {
                console.log('Успешно', response.data);
                setShowModal(true);
                setTimeout(() => {
                    setShowModal(false);
                }, 2000);
                setError({});
                closeModal()
                onLoginSuccess();
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('userId', response.data.id);
            })
            .catch(error => {
                if (error.response && error.response.data) {
                    setError(error.response.data);
                } else {
                    setError({general:'Ошибка при регистрации' });
                }
            });
    };



    const handleShowPassword = () => {
        setShowPassword(true);
        setTimeout(() => {
            setShowPassword(false);
        }, 3000); 
    };



    return (
        <>
            <form onSubmit={handleSubmitRegister}>
                <div className="register">
                    <h4>Enter your email and password to register.</h4>

                    {error.email && <div className="error-message">{error.email[0]}</div>}
                    <label>
                        <input
                            name='email'
                            value={formRegister.email}
                            onChange={handleChange}
                            type="email" 
                            placeholder="Enter your email address..." 
                        />
                    </label>
                   
                    {error.phone && <div className="error-message">{error.phone[0]}</div>}

                    <label>
                        <input
                            name='phone'
                            value={formRegister.phone} 
                            onChange={handleChange}
                            type="phone" 
                            placeholder="+996..." 
                        />
                    </label>

                    <label>
                        <input
                            name='first_name'
                            value={formRegister.first_name} 
                            onChange={handleChange}
                            type="text" 
                            placeholder="Enter your first name..." 
                        />
                    </label>
                    <label>
                        <input
                            name='last_name'
                            value={formRegister.last_name} 
                            onChange={handleChange}
                            type="text" 
                            placeholder="Enter your last name..." 
                        />
                    </label>
                    {error.password && <div className="error-message">{error.password[0]}</div>}

                    <label className="password-wrapper">
                        <input
                            name='password'
                            value={formRegister.password} 
                            onChange={handleChange}
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password..." 
                        />
                        <div className="eye-icon" onClick={handleShowPassword}>
                            {showPassword ? <Eye /> : <EyeOff />}
                        </div>
                    </label>

                    <button className='btn' type="submit">Register</button>
                </div>
            </form>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Регистрация прошла успешно!</h2>
                    </div>
                </div>
            )}

            {error.general && <div className="error-message">{error.general}</div>}
        </>
    );
}
