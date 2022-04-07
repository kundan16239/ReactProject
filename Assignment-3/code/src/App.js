import React from 'react';
import './App.css';

var arrow="<"
function App(props) {
  const {obj} =props;
  return (
    <div className="site-container">
    {/* Start Your code here */}
      <div className="header">
        <p className="arrow">{arrow}</p>
        <div>
          <h3 className="header-h3-1">{obj.name}</h3>
          <h3 className="header-h3-2">{obj.id}</h3>
        </div>
        <button>Print</button>
      </div>
      <div className="customer-info">
        <h3>Appointment:{obj.appointment}</h3>
        <h3>Email:{obj.email}</h3>
        <h3>Phone:{obj.phone}</h3>
      </div>
      <div className="order-info">
        <div>
          <h3>Status</h3>
          <li>{obj.status}</li>
        </div>
        <div>
          <h3>Door</h3>
          <p>{obj.door}</p>
        </div>
        <div>
          <h3>Time</h3>
          <p>{obj.time}</p>
        </div>
      </div>
      <div className="product-list">
        <input type={"checkbox"}></input>
        <img src={obj.profileImg} alt="Avatar" />
        <div>
          <h3>{obj.appointerName}</h3>
          <p>{obj.appointerDetails}</p>
        </div>
      </div>
    </div>

  );
}

export default App;
