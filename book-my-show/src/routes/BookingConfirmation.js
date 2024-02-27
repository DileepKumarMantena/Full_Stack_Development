import React from 'react';
import { useLocation } from 'react-router-dom';
import './BookingConfirmation.css';

function BookingConfirmation({ numberoftickets, phonenumber }) {
    const location = useLocation();
    const {prop1,prop2} = location.state;
    return (
        <div className="booking-confirmation-container">
            <h2 className="booking-confirmation-title">Booking Confirmation</h2>
            <p className="booking-confirmation-info">Number of Tickets: {prop1}</p>
            <p className="booking-confirmation-info">Phone Number: {prop2}</p>
        </div>
    );
}

export default BookingConfirmation;
