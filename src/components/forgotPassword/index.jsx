import React, { useState } from 'react';
import instance from '../../axios';
import './Forgot.scss'
import Header from '../header';
const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await instance.post('/auth/send-reset-password-key/', { email });
            setMessage('Проверьте вашу почту для сброса пароля.');
        } catch (error) {
            setMessage('Error', error)
        }
    };

    return (
        <div className="wrapper">
            <div className="overlay">

                <Header />
                <h2>Восстановление пароля</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Введите ваш email"
                        value={email}
                        onChange={handleInputChange}
                    />
                    <button type="submit">Отправить</button>
                </form>
                {message && <p className='error-message'>{message}</p>}

            </div>
        </div>

    );
};

export default ForgotPassword;
