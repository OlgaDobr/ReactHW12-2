import React, { useState } from 'react';


function PersonalPage() {
  // Исходные данные
  const initialData = {
    fullName: 'Ольга Добринская',
    phone: '+7 952 835 12 30',
    email: 'andromeda2005@bk.ru',
    city: 'Краснодар',
    photo: 'https://fs.top-academy.ru/api/v1/files/kBP-OFQNwFRhmufAAY552OiPBZvp3mam',
    
  };

  // State для данных пользователя
  const [userData, setUserData] = useState(initialData);

  // Обработчик изменения данных
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Функция для возврата к исходным значениям
  const resetData = () => {
    setUserData(initialData);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '0 auto' }}>
      <h2>Персональная страница</h2>
      
      <div style={{ marginBottom: '10px' }}>
        <label>ФИО:</label><br />
        <input
          type="text"
          name="fullName"
          value={userData.fullName}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <label>Телефон:</label><br />
        <input
          type="text"
          name="phone"
          value={userData.phone}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <label>Email:</label><br />
        <input
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <label>Город:</label><br />
        <input
          type="text"
          name="city"
          value={userData.city}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label>Фото:</label><br />
        <input
          type="photo"
          name="photo"
          value={userData.photo}
          onChange={handleChange}
          style={{ width: '100%' }}
        />
      </div>
      
      <button onClick={resetData}>Вернуть исходные значения</button>
    </div>
  );
}

export default PersonalPage;