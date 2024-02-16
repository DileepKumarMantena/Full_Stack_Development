import React from 'react';

function BookingConfirmation({ numberoftickets, phonenumber }) {
    return (
        <div>
            <h2>Booking Confirmation</h2>
            <p>Number of Tickets: {numberoftickets}</p>
            <p>Phone Number: {phonenumber}</p>
        </div>
    );
}

export default BookingConfirmation;
