import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Profile.scss';
import instance from '../../axios';
import ChangePassword from '../../components/changePassword';
import SideBar from '../../components/sidebar';
import { useAuth } from '../../AuthContext';
import LoadingBar from '../../components/UI/Loading/Loading';
import Header from '../../components/Header/Header';
import { LogOut } from 'lucide-react';


export default function Profile() {
    const [showModal, setShowModal] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [error, setError] = useState({});
    const { setIsAuthenticated,handleLogout } = useAuth();
    const [loading, setLoading] = useState(true);

    const [profile, setProfile] = useState({
        email: localStorage.getItem('profileEmail') || '',
        first_name: localStorage.getItem('profileFirstName') || '',
        last_name: localStorage.getItem('profileLastName') || '',
        avatar: null,
    });
    
    const [countryCode, setCountryCode] = useState(localStorage.getItem('countryCode') || '+996');
    const [phoneNumber, setPhoneNumber] = useState(localStorage.getItem('phoneNumber') || '');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const userId = localStorage.getItem('userId');
        const formData = new FormData();
        let fullPhone = null;
        if (phoneNumber) {
            fullPhone = `${countryCode}${phoneNumber}`;
        }
        const updatedProfile = {
            ...profile,
            phone: fullPhone,
        };

        Object.entries(updatedProfile).forEach(([key, value]) => {
            if (!value) return;
            formData.append(key, value);
        });

        instance.patch(`/auth/profile/${userId}/`, formData, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'multipart/form-data',
            }
        })
            .then(response => {
                setShowModal(true);
                setTimeout(() => setShowModal(false), 2000);
                setError({});
                localStorage.setItem('userAvatar', response.data.avatar);
                console.log(response);
                setPhoneNumber('');
            })
            .catch(error => {
                setError(error.response ? error.response.data : { general: 'Ошибка при обновлении профиля' });
                console.log(error);
            });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setProfile(prev => ({ ...prev, avatar: file }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile(prev => ({ ...prev, [name]: value }));

        const storageKey = `profile${name.charAt(0).toUpperCase() + name.slice(1)}`;
        localStorage.setItem(storageKey, value);
        console.log(`Сохраняем ${name}:`, value);
    };

    const handlePhoneNumberChange = (e) => {
        const value = e.target.value;
        setPhoneNumber(value);
        localStorage.setItem('phoneNumber', value);
    };

    const handleCountryCodeChange = (e) => {
        const value = e.target.value;
        setCountryCode(value);
        localStorage.setItem('countryCode', value);
    };

    const handleDelete = () => {
        const userId = localStorage.getItem('userId');
        instance.delete(`/auth/profile/${userId}`)
            .then(() => {
                console.log('Account deleted');
                localStorage.clear();
                setIsAuthenticated(false);
                navigate('/');
            })
            .catch(err => {
                console.error('Ошибка при удалении аккаунта:', err);
            });
    };

    const confirmAccountDeletion = () => {
        setShowConfirmModal(true);
    };

    const cancelAccountDeletion = () => {
        setShowConfirmModal(false);
    };

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);

    }, []);


    return (
        <>
            {loading && <LoadingBar />}
            <Header />
            <div className="container">
                <div className="profile">
                    <div className='sidebar'>
                        <SideBar/>
                        </div>
                    <form className='form' onSubmit={handleSubmit}>
                        <h4>Personal Information</h4>
                        <div className="profile__information">
                            <label>
                                <p>First Name</p>
                                <input
                                    onChange={handleChange}
                                    name='first_name'
                                    value={profile.first_name}
                                    type="text"
                                />
                            </label>
                            <label>
                                <p>Last Name</p>
                                <input
                                    onChange={handleChange}
                                    name='last_name'
                                    value={profile.last_name}
                                    type="text"
                                />
                            </label>
                            {error.email && <div className="error-message">{error.email[0]}</div>}
                            <label>
                                <p>Email address</p>
                                <input
                                    onChange={handleChange}
                                    name='email'
                                    value={profile.email}
                                    type="email"
                                />
                            </label>
                        </div>
                        {error.phone && <div className="error-message">{error.phone[0]}</div>}
                        <label>
                            <p>Phone Number</p>
                            <div className="profile__information__num">
                                <select value={countryCode} onChange={handleCountryCodeChange}>
                                    <option value="+996">+996</option>
                                    <option value="+997">+997</option>
                                    <option value="+998">+998</option>
                                    <option value="+999">+999</option>
                                </select>
                                <input
                                    onChange={handlePhoneNumberChange}
                                    value={phoneNumber}
                                    name="phone"
                                    type="tel"
                                    placeholder="Номер телефона"
                                />
                            </div>
                        </label>
                        {error.avatar && <div className="error-message">{error.avatar[0]}</div>}

                        <div className="btns">
                            <label htmlFor="file-input" className="file-label">
                                <img width={'fill'} src={profile.avatar ? URL.createObjectURL(profile.avatar) : "./photo.svg"} alt="" />
                            </label>
                            <input type="file" id="file-input" className="file-input" onChange={handleFileChange} />
                            <div className="profile__information_btn">
                                <button type="submit">Change</button>
                                <button type="button" onClick={confirmAccountDeletion} className='remove'>Remove</button>
                            </div>
                        </div>
                    </form>
                    <div className="change">

                        <ChangePassword />
                    </div>
                    <div className="logoutt">
                        <button onClick={handleLogout} className='logout'>
                            <LogOut />Logout
                        </button>
                    </div>

                    {showModal && (
                        <div className="modal">
                            <div className="modal-content">
                                <h2>Изменения успешно сохранены!</h2>
                            </div>
                        </div>
                    )}

                    {showConfirmModal && (
                        <div className="modal">
                            <div className="modal-content">
                                <h2>Вы уверены, что хотите удалить аккаунт?</h2>
                                <div className="modal-actions">
                                    <button onClick={handleDelete}>Да, удалить</button>
                                    <button onClick={cancelAccountDeletion}>Отмена</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
