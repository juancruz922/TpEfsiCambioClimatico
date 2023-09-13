import React, { useState } from 'react';

function DataForm({ onNext }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [cardNumber, setCardNumber] = useState('');

  const handleNext = () => {
   
    if (!name || !phone || !cardNumber) {
      alert('Por favor, complete todos los campos.');
    } else {
     
      window.location.href = '/donar';
    }
  };

  const handlePhoneChange = (e) => {
    
   const phoneNumber = e.target.value.replace(/\D/g, '');
    setPhone(phoneNumber);
  };

  const handleCardNumberChange = (e) => {
    
    const cardNumberValue = e.target.value.replace(/\D/g, '');
    setCardNumber(cardNumberValue);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#d3ffd3', 
        fontFamily: 'Arial, sans-serif',
      }}
      className="data-form-container"
    >
      <h2 style={{ color: '#228b22' }}>Ingresa tus datos personales</h2>
      <form
        style={{
          backgroundColor: '#fff8dc', 
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
          textAlign: 'center',
        }}
        className="data-form"
      >
        <div style={{ marginBottom: '15px' }}>
          <label style={{ color: '#d2691e' }}>Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ backgroundColor: '#fff' }} 
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ color: '#d2691e' }}>Teléfono:</label>
          <input
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
            style={{ backgroundColor: '#fff' }} 
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ color: '#d2691e' }}>Número de Tarjeta:</label>
          <input
            type="text"
            value={cardNumber}
            onChange={handleCardNumberChange}
            style={{ backgroundColor: '#fff' }} 
          />
        </div>
        <button
          type="button"
          style={{
            backgroundColor: '#228b22', 
            color: '#fff',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
          onClick={handleNext}
        >
          Continuar
        </button>
      </form>
    </div>
  );
}

export default DataForm;
