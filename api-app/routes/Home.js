import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstName.trim()) {
      alert('Please enter your first name');
      return;
    }

    if (!lastName.trim()) {
      alert('Please enter your last name');
      return;
    }

    if (!email.trim() || !validateEmail(email)) {
      alert('Please enter a valid email');
      return;
    }

    if (!phoneNumber.trim() || !validatePhoneNumber(phoneNumber)) {
      alert('Please enter a valid phone number');
      return;
    }

    console.log('Form submitted:', { firstName, lastName, email, phoneNumber });
    navigate('/Home1', { state: { firstName, lastName, email, phoneNumber } });
  };

  const navigateToHome1 = () => {
    console.log("Navigating to Home1");
    window.location.href = `/Home1?fname=${firstName}&lname=${lastName}&email=${email}&phoneNumber=${phoneNumber}`;
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const validatePhoneNumber = (phoneNumber) => {
    const re = /^\d{10}$/;
    return re.test(String(phoneNumber));
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: "white" }}>
      <div style={{ width: '400px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)', backgroundColor: "blue" }}>
        <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Student Registration Form</h2>
        <form onSubmit={handleSubmit}>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            First Name:
            <input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              style={{ marginLeft: '10px' }}
            />
          </label>
          <br />
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Last Name:
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              style={{ marginLeft: '10px' }}
            />
          </label>
          <br />
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ marginLeft: '10px' }}
            />
          </label>
          <br />
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Phone Number:
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              style={{ marginLeft: '10px' }}
            />
          </label>
          <br />
          <button style={{ marginLeft: '10px' }} onClick={navigateToHome1} type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Home;
