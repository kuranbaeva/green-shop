// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { User, MapPinHouse, ShoppingCart, Heart, EyeOff, Eye } from 'lucide-react';
// import './Profile.scss'
// import instance from '../../axios'
// export default function Profile() {
//     const [showPassword, setShowPassword] = useState(false);
//     const [error, setError] = useState({});
//     const [showModal, setShowModal] = useState(false);

//     const [profile, setProfile] = useState({
//         email: '',
//         phone: '',
//         first_name: '',
//         last_name: '',
//         password: '',
//         avatar: null,
//     });

//     const [change, setChange] = useState({
//         current_password: '',
//         new_password: '',
//         confirm_password: '',
//     });

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         instance.patch('/auth/profile/{id}/', profile)
//             .then(response => {
//                 console.log('Успешно', response.data);
//                 setShowModal(true);
//                 setTimeout(() => {
//                     setShowModal(false);
//                 }, 2000);
//                 setError({});
//             })
//             .catch(error => {
//                 if (error.response && error.response.data) {
//                     setError(error.response.data);
//                 } else {
//                     setError({ general: 'Ошибка при регистрации' });
//                 }
//             });
//     };

//     const handleSubmitChange = (e) => {
//         e.preventDefault();
//         instance.patch('/auth/change-password/', change)
//             .then(response => {
//                 console.log('Успешно', response.data);
//                 setShowModal(true);
//                 setTimeout(() => {
//                     setShowModal(false);
//                 }, 2000);
//                 setError({});
//             })
//             .catch(error => {
//                 if (error.response && error.response.data) {
//                     setError(error.response.data);
//                 } else {
//                     setError({ general: 'Ошибка при регистрации' });
//                 }
//             });
//     };
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setProfile((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//     };

//     const handleChangePassword = (e) => {
//         const { name, value } = e.target;
//         setChange((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//     };
//     const handleShowPassword = () => {
//         setShowPassword(true);
//         setTimeout(() => {
//             setShowPassword(false);
//         }, 3000);
//     };


//     return (
//         <>
//             <div className="container">
//                 <div className="profile">
//                     <div className="sidebar">
//                         <h4>My Account</h4>
//                         <div className="sidebar__nav">
//                             <Link to='/account'><User />Account Details</Link>
//                             <Link to='/address'><MapPinHouse />Address</Link>
//                             <Link to='/orders'><ShoppingCart />Orders</Link>
//                             <Link to='/wishlist'><Heart />Wishlist</Link>
//                         </div>

//                     </div>

//                     <form className='form' onSubmit={handleSubmit}>
//                         <h4 >Personal Information</h4>
//                             <div className="profile__information">

//                                 <label>
//                                     <p>First Name</p>
//                                     <input onChange={handleChange} name='first_name' value={profile.first_name} type="text" required />
//                                 </label>
//                                 <label>
//                                     <p>Last Name</p>

//                                     <input onChange={handleChange} name='last_name' value={profile.last_name} type="text" required />
//                                 </label>
//                                 <label>
//                                     <p>Email address</p>
//                                     <input onChange={handleChange} name='email' value={profile.email} type="email" required />
//                                 </label>

//                             </div>

//                             <label>
//                                 <p>  Phone Number</p>
//                                 <div className="profile__information__num">
//                                     <select name="phone" id="">
//                                         <option value="+996">+996</option>
//                                         <option value="+996">+996</option>
//                                         <option value="+996">+996</option>
//                                         <option value="+996">+996</option>
//                                     </select>
//                                     <input onChange={handleChange} name='phone' value={profile.phone} type="phone" required />
//                                 </div>
//                             </label>
//                             <div className="profile__information_btn">
//                                 <button>Change</button>
//                                 <button className='remove'>Remove</button>
//                             </div>
//                             <input type="file" />


//                     </form>
//                     <form className='change' onSubmit={handleSubmitChange}>

//                         <h4>Password change</h4>

//                         <label className="password-wrapper">
//                             <p>Current password</p>
//                             <input
//                                 name='current_password'
//                                 value={change.current_password}
//                                 onChange={handleChangePassword}
//                                 type={showPassword ? 'text' : 'password'}
//                                 placeholder="Password..."
//                             />
//                             <div className="eye-icon" onClick={handleShowPassword}>
//                                 {showPassword ? <Eye /> : <EyeOff />}
//                             </div>
//                         </label>
//                         <label className="password-wrapper">
//                             <p>New password</p>
//                             <input
//                                 name='new_password'
//                                 value={change.new_password}
//                                 onChange={handleChangePassword}
//                                 type={showPassword ? 'text' : 'password'}
//                                 placeholder="Password..."
//                             />
//                             <div className="eye-icon" onClick={handleShowPassword}>
//                                 {showPassword ? <Eye /> : <EyeOff />}
//                             </div>
//                         </label>
//                         <label className="password-wrapper">
//                             <p>Confirm new password</p>
//                             <input
//                                 name='confirm_password'
//                                 value={change.confirm_password}
//                                 onChange={handleChangePassword}
//                                 type={showPassword ? 'text' : 'password'}
//                                 placeholder="Password..."
//                             />
//                             <div className="eye-icon" onClick={handleShowPassword}>
//                                 {showPassword ? <Eye /> : <EyeOff />}
//                             </div>
//                         </label>
//                     </form>

//                     {showModal && (
//                 <div className="modal">
//                     <div className="modal-content">
//                         <h2>Регистрация прошла успешно!</h2>
//                     </div>
//                 </div>
//             )}
//                 </div>
//             </div>
//         </>
//     )
// }



// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { User, MapPinHouse, ShoppingCart, Heart, EyeOff, Eye } from 'lucide-react';
// import './Profile.scss';
// import instance from '../../axios';

// export default function Profile() {
//     const [showPassword, setShowPassword] = useState(false);
//     const [error, setError] = useState({});
//     const [showModal, setShowModal] = useState(false);
//     const [profile, setProfile] = useState({
//         email: '',
//         phone: '',
//         first_name: '',
//         last_name: '',
//         password: '',
//         avatar: null,
//     });
//     const [change, setChange] = useState({
//         current_password: '',
//         new_password: '',
//         confirm_password: '',
//     });

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const userId = localStorage.getItem('userId');
//         const formData = new FormData();
//         for (const key in profile) {
//             formData.append(key, profile[key]);
//         }


//         instance.patch(`/auth/profile/${userId}/`, formData)
//         .then(response => {
//             console.log('Успешно обновлено', response.data);
//             setShowModal(true);
//         })
//         .catch(error => {
//             if (error.response && error.response.data) {
//                 setError(error.response.data);
//             } else {
//                 setError({ general: 'Ошибка при обновлении профиля' });
//             }
//         });

//     };

//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         setProfile((prev) => ({ ...prev, avatar: file }));
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setProfile((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleChangePassword = (e) => {
//         const { name, value } = e.target;
//         setChange((prev) => ({ ...prev, [name]: value }));
//     };

//     const handleShowPassword = () => {
//         setShowPassword((prev) => !prev);
//     };

//     const handleSubmitChange = (e) => {
//                 e.preventDefault();
//                 instance.patch('/auth/change-password/', change)
//                     .then(response => {
//                         console.log('Успешно', response.data);
//                         setShowModal(true);
//                         setTimeout(() => {
//                             setShowModal(false);
//                         }, 2000);
//                         setError({});
//                     })
//                     .catch(error => {
//                         if (error.response && error.response.data) {
//                             setError(error.response.data);
//                         } else {
//                             setError({ general: 'Ошибка при регистрации' });
//                         }
//                     });
//             };

//     return (
//         <div className="container">
//             <div className="profile">
//                 <div className="sidebar">
//                     <h4>My Account</h4>
//                     <div className="sidebar__nav">
//                         <Link to='/account'><User />Account Details</Link>
//                         <Link to='/address'><MapPinHouse />Address</Link>
//                         <Link to='/orders'><ShoppingCart />Orders</Link>
//                         <Link to='/wishlist'><Heart />Wishlist</Link>
//                     </div>
//                 </div>
//                 <form className='form' onSubmit={handleSubmit}>
//                     <h4>Personal Information</h4>
//                     <div className="profile__information">
//                         <label>
//                             <p>First Name</p>
//                             <input onChange={handleChange} name='first_name' value={profile.first_name} type="text" required />
//                         </label>
//                         <label>
//                             <p>Last Name</p>
//                             <input onChange={handleChange} name='last_name' value={profile.last_name} type="text" required />
//                         </label>
//                         <label>
//                             <p>Email address</p>
//                             <input onChange={handleChange} name='email' value={profile.email} type="email" required />
//                         </label>
//                     </div>
//                     <label>
//                         <p>Phone Number</p>
//                         <div className="profile__information__num">
//                             <select name="phone">
//                                 <option value="+996">+996</option>
//                                 <option value="+997">+997</option>
//                                 <option value="+998">+998</option>
//                                 <option value="+999">+999</option>
//                             </select>
//                             <input onChange={handleChange} name='phone' value={profile.phone} type="tel" required />
//                         </div>
//                     </label>
//                     <div className="profile__information_btn">
//                         <button type="submit">Change</button>
//                         <button type="button" className='remove'>Remove</button>
//                     </div>
//                     <input type="file" onChange={handleFileChange} />
//                 </form>
//                 <form className='change' onSubmit={handleSubmitChange}>
//                     <h4>Password Change</h4>
//                     <label className="password-wrapper">
//                         <p>Current Password</p>
//                         <input
//                             name='current_password'
//                             value={change.current_password}
//                             onChange={handleChangePassword}
//                             type={showPassword ? 'text' : 'password'}
//                             placeholder="Password..."
//                         />
//                         <div className="eye-icon" onClick={handleShowPassword}>
//                             {showPassword ? <Eye /> : <EyeOff />}
//                         </div>
//                     </label>
//                     <label className="password-wrapper">
//                         <p>New Password</p>
//                         <input
//                             name='new_password'
//                             value={change.new_password}
//                             onChange={handleChangePassword}
//                             type={showPassword ? 'text' : 'password'}
//                             placeholder="Password..."
//                         />
//                         <div className="eye-icon" onClick={handleShowPassword}>
//                             {showPassword ? <Eye /> : <EyeOff />}
//                         </div>
//                     </label>
//                     <label className="password-wrapper">
//                         <p>Confirm New Password</p>
//                         <input
//                             name='confirm_password'
//                             value={change.confirm_password}
//                             onChange={handleChangePassword}
//                             type={showPassword ? 'text' : 'password'}
//                             placeholder="Password..."
//                         />
//                         <div className="eye-icon" onClick={handleShowPassword}>
//                             {showPassword ? <Eye /> : <EyeOff />}
//                         </div>
//                     </label>
//                 </form>
//                 {showModal && (
//                     <div className="modal">
//                         <div className="modal-content">
//                             <h2>Изменения успешно сохранены!</h2>
//                         </div>
//                     </div>
//                 )}
//                 {error.general && <div className="error-message">{error.general}</div>}
//             </div>
//         </div>
//     );
// }


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { User, MapPinHouse, ShoppingCart, Heart,LogOut } from 'lucide-react';
// import './Profile.scss';
// import instance from '../../axios';
// import ChangePassword from '../../components/changePassword';

// export default function Profile() {
//     const [showModal, setShowModal] = useState(false);
//     const [error, setError] = useState({});
//     const [showConfirmModal, setShowConfirmModal] = useState(false);
//     const [profile, setProfile] = useState({
//         email: '',
//         first_name: '',
//         last_name: '',
//         avatar: null,
//     });
//     const [countryCode, setCountryCode] = useState('+996');
//     const [phoneNumber, setPhoneNumber] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const userId = localStorage.getItem('userId');
//         const formData = new FormData();
//         const fullPhone = `${countryCode}${phoneNumber}`;

//         const updatedProfile = {
//             ...profile,
//             phone: fullPhone,
//         };

//         Object.entries(updatedProfile).forEach(([key, value]) => {
//             formData.append(key, value);
//         });

//         instance.patch(`/auth/profile/${userId}/`, formData, {
//             headers: {
//                 'Authorization': `Bearer ${localStorage.getItem('token')}`,
//                 'Content-Type': 'multipart/form-data',
//             }
//         })
//             .then(response => {
//                 setShowModal(true);
//                 setTimeout(() => setShowModal(false), 2000);
//                 setError({});
//             })
//             .catch(error => {
//                 setError(error.response ? error.response.data : { general: 'Ошибка при обновлении профиля' });
//             });
//     };

//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         setProfile(prev => ({ ...prev, avatar: file }));
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setProfile(prev => ({ ...prev, [name]: value }));
//     };

//     const onRemoveItem = (id) => {
//         const userId = localStorage.getItem('userId');
//         instance.delete(`/auth/profile/${userId}`)
//         // localStorage.delete('userId')
//         // setProfile((prev) => prev.filter(item => item.id !== id))
//         console.log(id);
//     }



//     return (
//         <div className="container">
//             <div className="profile">
//                 <div className="sidebar">
//                     <h4>My Account</h4>
//                     <div className="sidebar__nav">
//                         <Link to='/account'><User />Account Details</Link>
//                         <Link to='/address'><MapPinHouse />Address</Link>
//                         <Link to='/orders'><ShoppingCart />Orders</Link>
//                         <Link to='/wishlist'><Heart />Wishlist</Link>
//                         <Link className='logout' to='/logout'><LogOut />Logout</Link>

//                     </div>
//                 </div>
//                 <form className='form' onSubmit={handleSubmit}>
//                     <h4>Personal Information</h4>
//                     <div className="profile__information">
//                         <label>
//                             <p>First Name</p>
//                             <input
//                                 onChange={handleChange}
//                                 name='first_name'
//                                 value={profile.first_name}
//                                 type="text" required />
//                         </label>
//                         <label>
//                             <p>Last Name</p>
//                             <input
//                                 onChange={handleChange}
//                                 name='last_name'
//                                 value={profile.last_name}
//                                 type="text" required />
//                         </label>
//                         <label>
//                             <p>Email address</p>
//                             <input onChange={handleChange}
//                                 name='email'
//                                 value={profile.email}
//                                 type="email" required />
//                         </label>
//                     </div>

//                     <label>
//                         <p>Phone Number</p>
//                         <div className="profile__information__num">
//                             <select value={countryCode} onChange={(e) => setCountryCode(e.target.value)}>
//                                 <option value="+996">+996</option>
//                                 <option value="+997">+997</option>
//                                 <option value="+998">+998</option>
//                                 <option value="+999">+999</option>
//                             </select>
//                             <input
//                                 onChange={(e) => setPhoneNumber(e.target.value)}
//                                 value={phoneNumber}
//                                 name="phone"
//                                 type="tel"
//                                 placeholder="Номер телефона"
//                                 required />
//                         </div>
//                     </label>
//                     <div className="btns">
//                         <label for="file-input" class="file-label"><img src="./photo.svg" alt="" /></label>
//                         <input type="file" id="file-input" class="file-input" />
//                         <div className="profile__information_btn">
//                             <button type="submit">Change</button>
//                             <button onClick={onRemoveItem} type="submit" className='remove'>Remove</button>
//                         </div>
//                     </div>
//                 </form>

//                 <ChangePassword />

//                 {showModal && (
//                     <div className="modal">
//                         <div className="modal-content">
//                             <h2>Изменения успешно сохранены!</h2>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }


// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import './Profile.scss';
// import instance from '../../axios';
// import ChangePassword from '../../components/changePassword';
// import SideBar from '../../components/sidebar';
// import Header from '../../components/Header/Header';
// import { useAuth } from '../../AuthContext';
// export default function Profile() {
//     const { setIsAuthenticated } = useAuth(); 
//     const [showModal, setShowModal] = useState(false);
//     const [showConfirmModal, setShowConfirmModal] = useState(false); 
//     const [error, setError] = useState({});
//     const [profile, setProfile] = useState({
//         email: '',
//         first_name: '',
//         last_name: '',
//         avatar: null,
//     });
//     const [countryCode, setCountryCode] = useState('+996');
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const navigate = useNavigate(); 


//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const userId = localStorage.getItem('userId');
//         const formData = new FormData();
//         const fullPhone = `${countryCode}${phoneNumber}`;

//         const updatedProfile = {
//             ...profile,
//             phone: fullPhone,
//         };

//         Object.entries(updatedProfile).forEach(([key, value]) => {
//                         formData.append(key, value);
//                     });

//         instance.patch(`/auth/profile/${userId}/`, formData, {
//             headers: {
//                 'Authorization': `Bearer ${localStorage.getItem('token')}`,
//                 'Content-Type': 'multipart/form-data',
//             }
//         })
//             .then(response => {
//                 setShowModal(true);
//                 setTimeout(() => setShowModal(false), 2000);
//                 setError({});
//             })
//             .catch(error => {
//                 setError(error.response ? error.response.data : { general: 'Ошибка при обновлении профиля' });
//             });
//     };

//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         setProfile(prev => ({ ...prev, avatar: file }));
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setProfile(prev => ({ ...prev, [name]: value }));
//     };

//     const handleDelete = () => {
//         const userId = localStorage.getItem('userId');
//         instance.delete(`/auth/profile/${userId}`)
//             .then(() => {
//                 console.log('Account deleted');
//                 localStorage.removeItem('userId');
//                 localStorage.removeItem('token');
//                 localStorage.removeItem('isAuthenticated');
//                 setIsAuthenticated(false)
//                 navigate('/'); 
//             })
//             .catch(err => {
//                 console.error('Ошибка при удалении аккаунта:', err);
//             });
//     };

//     const confirmAccountDeletion = () => {
//         setShowConfirmModal(true); 
//     };

//     const cancelAccountDeletion = () => {
//         setShowConfirmModal(false); 
//     };

//     return (  
//    <>   <Header/>
//    <div className="container">
//             <div className="profile">
//              <SideBar  setIsAuthenticated={setIsAuthenticated} />
//                 <form className='form' onSubmit={handleSubmit}>
//                     <h4>Personal Information</h4>
//                     <div className="profile__information">
//                         <label>
//                             <p>First Name</p>
//                             <input
//                                 onChange={handleChange}
//                                 name='first_name'
//                                 value={profile.first_name}
//                                 type="text" required />
//                         </label>
//                         <label>
//                             <p>Last Name</p>
//                             <input
//                                 onChange={handleChange}
//                                 name='last_name'
//                                 value={profile.last_name}
//                                 type="text" required />
//                         </label>
//                         <label>
//                             <p>Email address</p>
//                             <input onChange={handleChange}
//                                 name='email'
//                                 value={profile.email}
//                                 type="email" required />
//                         </label>
//                     </div>

//                     <label>
//                         <p>Phone Number</p>
//                         <div className="profile__information__num">
//                             <select value={countryCode} onChange={(e) => setCountryCode(e.target.value)}>
//                                 <option value="+996">+996</option>
//                                 <option value="+997">+997</option>
//                                 <option value="+998">+998</option>
//                                 <option value="+999">+999</option>
//                             </select>
//                             <input
//                                 onChange={(e) => setPhoneNumber(e.target.value)}
//                                 value={phoneNumber}
//                                 name="phone"
//                                 type="tel"
//                                 placeholder="Номер телефона"
//                                 required />
//                         </div>
//                     </label>
//                     <div className="btns">
//                         <label htmlFor="file-input" className="file-label"><img src="./photo.svg" alt="" /></label>
//                         <input type="file" id="file-input" className="file-input" onChange={handleFileChange} />
//                         <div className="profile__information_btn">
//                             <button type="submit">Change</button>
//                             <button type="button" onClick={confirmAccountDeletion} className='remove'>Remove</button>
//                         </div>
//                     </div>
//                 </form>

//                 <ChangePassword />

//                 {showModal && (
//                     <div className="modal">
//                         <div className="modal-content">
//                             <h2>Изменения успешно сохранены!</h2>
//                         </div>
//                     </div>
//                 )}

//                 {showConfirmModal && (
//                     <div className="modal">
//                         <div className="modal-content">
//                             <h2>Вы уверены, что хотите удалить аккаунт?</h2>
//                             <div className="modal-actions">
//                                 <button className='btn' onClick={handleDelete}>Да, удалить</button>
//                                 <button className='btn' onClick={cancelAccountDeletion}>Отмена</button>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//    </>

//     );
// }



import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Profile.scss';
import instance from '../../axios';
import ChangePassword from '../../components/changePassword';
import SideBar from '../../components/sidebar';
import  {useAuth } from '../../AuthContext';
import Header from '../../components/Header/Header';
export default function Profile() {
    const [showModal, setShowModal] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [error, setError] = useState({});
    const { setIsAuthenticated } =useAuth();

    const [profile, setProfile] = useState({
        email: '',
        first_name: '',
        last_name: '',
        avatar: null,
    });
    const [countryCode, setCountryCode] = useState('+996');
    const [phoneNumber, setPhoneNumber] = useState('');
    const navigate = useNavigate();


    const handleSubmit = (e) => {
        e.preventDefault();
        const userId = localStorage.getItem('userId');
        const formData = new FormData();
        const fullPhone = `${countryCode}${phoneNumber}`;

        const updatedProfile = {
            ...profile,
            phone: fullPhone,
        };

        Object.entries(updatedProfile).forEach(([key, value]) => {
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
                localStorage.setItem('userAvatar',response.data.avatar);
                console.log(response);

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
    };

    const handleDelete = () => {
        const userId = localStorage.getItem('userId');
        instance.delete(`/auth/profile/${userId}`)
            .then(() => {
                console.log('Account deleted');
                localStorage.removeItem('userId');
                localStorage.removeItem('token');
                localStorage.removeItem('isAuthenticated');
                localStorage.removeItem('userAvatar')
                setIsAuthenticated(false)
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

    return (

        <>
            <Header />
            <div className="container">
                <div className="profile">
                    <SideBar />
                    <form className='form' onSubmit={handleSubmit}>
                        <h4>Personal Information</h4>
                        <div className="profile__information">
                            <label>
                                <p>First Name</p>
                                <input
                                    onChange={handleChange}
                                    name='first_name'
                                    value={profile.first_name}
                                    type="text"  />
                            </label>
                            <label>
                                <p>Last Name</p>
                                <input
                                    onChange={handleChange}
                                    name='last_name'
                                    value={profile.last_name}
                                    type="text"  />
                            </label>
                    {error.email && <div className="error-message">{error.email[0]}</div>}
                            <label>
                                <p>Email address</p>
                                <input onChange={handleChange}
                                    name='email'
                                    value={profile.email}
                                    type="email"  />
                            </label>
                        </div>
                        {error.phone && <div className="error-message">{error.phone[0]}</div>}
                        <label>
                            <p>Phone Number</p>
                            <div className="profile__information__num">
                                <select value={countryCode} onChange={(e) => setCountryCode(e.target.value)}>
                                    <option value="+996">+996</option>
                                    <option value="+997">+997</option>
                                    <option value="+998">+998</option>
                                    <option value="+999">+999</option>
                                </select>
                                <input
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    value={phoneNumber}
                                    name="phone"
                                    type="tel"
                                    placeholder="Номер телефона"
                                    />
                            </div>
                        </label> 
                    {error.avatar && <div className="error-message">{error.avatar[0]}</div>}

                        <div className="btns">

                            <label htmlFor="file-input" className="file-label"><img src="./photo.svg" alt="" /></label>
                            <input type="file" id="file-input" className="file-input" onChange={handleFileChange} />
                            <div className="profile__information_btn">
                                <button type="submit">Change</button>
                                <button type="button" onClick={confirmAccountDeletion} className='remove'>Remove</button>
                            </div>
                        </div>
                    </form>

                    <ChangePassword />

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
