import React, { useState, useEffect } from 'react';
import axios from '../../axios';

const ProfileHeader = () => {
  const [randomItems, setRandomItems] = useState([]);

  const fetchRandomItems = async () => {
    try {
      const response = await axios.get('/product/');
      const items = response.data;
      const shuffledItems = items.sort(() => 0.5 - Math.random()).slice(0, 5);
      setRandomItems(shuffledItems);
    } catch (error) {
      console.error('Ошибка при загрузке товаров:', error);
    }
  };

  const handleLinkClick = () => {
    fetchRandomItems(); 
  };

  return (
    <div>
      <header>
        <nav>
          <a href="#" onClick={handleLinkClick}>Показать рандомные товары</a>
        </nav>
      </header>

      <div className="random-items-grid">
        {randomItems.length > 0 ? (
          randomItems.map((item) => (
            <div key={item.id} className="item-card">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
            </div>
          ))
        ) : (
          <p>Нажмите на ссылку для показа товаров.</p>
        )}
      </div>
    </div>
  );
};

export default ProfileHeader;
