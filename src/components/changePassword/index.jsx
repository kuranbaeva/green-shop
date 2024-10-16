import React, { useState } from 'react';
import { EyeOff, Eye } from 'lucide-react';
import instance from '../../axios';
import  './Change.scss'
export default function Change() {
    const [error, setError] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [showPassword, setShowPassword] = useState(false); 
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [change, setChange] = useState({
        old_password: '',
        new_password: '',
    });

    const handleSubmitChange = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        console.log(token);
        instance.patch('/auth/change-password/', change, {
            headers: {
                'Authorization': 'Token ' + token
            }
        })
        .then(response => {
            console.log('Успешно', response.data);
            setShowModal(true);
            setTimeout(() => {
                setShowModal(false);
            }, 2000);
            setError({});
        })
        .catch(error => {
            if (error.response) {
                console.log('Ошибка ответа сервера:', error.response.data);
                setError(error.response.data);  
            } else {
                console.log('Ошибка:', error.message);
                setError({ general: 'Ошибка при изменении пароля' });
            }
        });
    };
    
    const handleChangePassword = (e) => {
        const { name, value } = e.target;
        setChange((prev) => ({ ...prev, [name]: value }));
    };

    const handleShowPassword = () => {
        setShowPassword(true);
        setTimeout(() => {
            setShowPassword(false);
        }, 3000); 
    };

    const handleShowPassword2 = () => {
        setShowConfirmPassword(true);
        setTimeout(() => {
            setShowConfirmPassword(false);
        }, 3000); 
    };

    return (
        <> 
            <form className='change' onSubmit={handleSubmitChange}>
                <h4>Password Change</h4>
                {error.old_password && <div className="error-message">{error.old_password[0]}</div>}
                <label className="password-wrapper">
                    <p>Current Password</p>
                    <input
                        name='old_password'
                        value={change.old_password}
                        onChange={handleChangePassword}
                        type={showPassword ? 'text' : 'password'}
                    />
                    <div className="eye-icon" onClick={handleShowPassword}>
                        {showPassword ? <Eye /> : <EyeOff />}
                    </div>
                </label>
                <label className="password-wrapper">
                    <p>New Password</p>
                    <input
                        name='new_password'
                        value={change.new_password}
                        onChange={handleChangePassword}
                        type={showConfirmPassword ? 'text' : 'password'}
                        required
                    />
                    <div className="eye-icon" onClick={handleShowPassword2}>
                        {showConfirmPassword ? <Eye /> : <EyeOff />}
                    </div>
                </label>
                <button className='btn1' type='submit'>Save Change</button>
            </form>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Изменения успешно сохранены!</h2>
                    </div>
                </div>
            )}
            {error.general && <div className="error-message">{error.general}</div>}
        </>
    );
}
