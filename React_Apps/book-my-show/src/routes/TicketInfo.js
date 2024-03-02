import React from "react";

function TicketInfo({ numberoftickets, phonenumber }) {
  return (
    <div>
      <h2>Booking Details</h2>
      <p>Number of Tickets: {numberoftickets}</p>
      <p>Phone Number: {phonenumber}</p>
    </div>
  );
}

export default TicketInfo;
