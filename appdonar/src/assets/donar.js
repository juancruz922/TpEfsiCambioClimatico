import React, { useState } from 'react';

function DonationPage() {
  const [amount, setAmount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleDonate = () => {
    if (amount === 0) {
      alert('Por favor, ingresa una cantidad mayor que 0 para donar.');
    } else {
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    window.location.href = '/';
  };

  return (
    <div className="donation-container" style={{ backgroundColor: '#C4E4CD', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div className="donation-content" style={{ backgroundColor: 'white', padding: '20px', borderRadius: '10px' }}>
        <h1 style={{ fontFamily: 'cursive', color: '#228B22' }}>Haz tu donación</h1>
        <p>Selecciona la cantidad que deseas donar:</p>
        <input
          type="number"
          value={amount}
          onChange={handleAmountChange}
        />
        <button className="btn btn-success" onClick={handleDonate}>
          Donar
        </button>

        {showModal && (
          <div className="modal" tabIndex="-1" role="dialog" style={{ display: 'block' }}>
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" style={{ fontFamily: 'cursive' }}>¡Gracias por tu donación!</h5>
                  <button type="button" className="close" onClick={closeModal} aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <p style={{ color: 'green' }}>Hemos recibido tu donación de ${amount}.</p>
                  <p style={{ color: 'blue' }}>Tu contribución ayudará a preservar la naturaleza.</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={closeModal} href="/">Cerrar</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DonationPage;
