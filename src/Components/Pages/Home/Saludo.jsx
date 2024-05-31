import React, { useState } from 'react';

const Saludo = () => {
  const [fullName, setfullName] = useState('');

  const handleChange = (event) => {
    setfullName(event.target.value);
  };

  return (
    <div style={{ margin: '20px', textAlign: 'center' }}>
      <input
        type="text"
        placeholder="Enter your full name"
        value={fullName}
        onChange={handleChange}
        style={{ padding: '10px', fontSize: '16px', width: '300px' }}
      />
      <p className='m-2 text-3xl font-bold text-center text-white'>Welcome {fullName}</p>
    </div>
  );
};

export default Saludo;
