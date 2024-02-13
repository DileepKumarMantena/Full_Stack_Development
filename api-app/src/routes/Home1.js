import { useLocation } from 'react-router-dom';
import React from 'react';

const Home1 = ({ location }) => {
  const urllocation = useLocation();
  const queryParams = new URLSearchParams(urllocation.search);
  const firstName = queryParams.get('fname');
  const lastName = queryParams.get('lname');
  const email = queryParams.get('email');
  const phoneNumber = queryParams.get('phoneNumber');

  return (
    <div style={{ textAlign: 'center', marginTop: '50px', backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)',backgroundColor:"blue"}}>
      <h2 style={{ marginBottom: '20px',color:"red" }}>Student Details</h2>
      <p style={{ marginBottom: '10px' }}>First Name: {firstName}</p>
      <p style={{ marginBottom: '10px' }}>Last Name: {lastName}</p>
      <p style={{ marginBottom: '10px' }}>Email: {email}</p>
      <p style={{ marginBottom: '10px' }}>Phone Number: {phoneNumber}</p>
    </div>
  );
};

export default Home1;
