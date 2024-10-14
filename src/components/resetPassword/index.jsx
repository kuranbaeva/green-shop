// import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import instance from '../../../axios';

// const ResetPassword = () => {
//   const [newPassword, setNewPassword] = useState('');
//   const [key, setKey] = useState('');
//   const [message, setMessage] = useState('');
//   const { token } = useParams();  
  
//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     const data = {
//       key, 
//       new_password: newPassword
//     };

//     try {
//       await instance.post('/auth/reset-password/', data);
//       setMessage('Пароль успешно изменен.');
//     } catch (error) {
//       console.error('Ошибка при сбросе пароля:', error);
//       setMessage('Произошла ошибка при сбросе пароля.');
//     }
//   };

//   return (
//     <div>
//       <h2>Сброс пароля</h2>
//       <form onSubmit={handleSubmit}>
     
//         <input 
//           type="password" 
//           name="new_password" 
//           placeholder="Введите новый пароль" 
//           value={newPassword}
//           onChange={(e) => setNewPassword(e.target.value)}
//         />
//         <button type="submit">Сбросить пароль</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default ResetPassword;



import React, { useState } from 'react';
import instance from '../../axios';
import { useParams, useNavigate } from 'react-router-dom';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const { token } = useParams(); 
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'password') {
      setPassword(value);
    } else {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Пароли не совпадают.');
      return;
    }

    try {
      await instance.post(`/auth/reset-password/${token}`, { password });
      setMessage('Пароль успешно изменен.');
      setTimeout(() => navigate('/login'), 2000); 
    } catch (error) {
      console.error('Ошибка при сбросе пароля:', error);
      setMessage('Произошла ошибка при сбросе пароля.');
    }
  };

  return (
    <div className="wrapper">
        <div className="overlay">
            <div>
      <h2>Сброс пароля</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="password" 
          name="password" 
          placeholder="Введите новый пароль" 
          value={password}
          onChange={handleInputChange}
        />
        <input 
          type="password" 
          name="confirmPassword" 
          placeholder="Повторите новый пароль" 
          value={confirmPassword}
          onChange={handleInputChange}
        />
        <button type="submit">Сбросить пароль</button>
      </form>
      {message && <p>{message}</p>}
    </div>   
        </div>
    </div>
 
  );
};

export default ResetPassword;
