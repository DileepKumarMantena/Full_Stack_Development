import React, { useState } from 'react';
import Modal from './Modal';
import './Theaters.css';

function Theaters() {
    const [clickedImg, setClickedImg] = useState(null);
    const [selectedTheater, setSelectedTheater] = useState(null);

    const handleImageClick = (theaterName) => {
        setClickedImg(theaterName);
        setSelectedTheater(theaterName); // Set the selected theater name
    };

    return (
        <div className="theaters-container">
            <h1>THEATERS</h1>
            <div>
                <p>CLICK ON THE MOVIE IMAGE TO DISPLAY THEATERS</p>
            </div>
            {clickedImg && (
                <Modal
                    clickedImg={clickedImg}
                    setClickedImg={setClickedImg}
                />
            )}
            <button className="book-now-button">Book Now</button>
            {selectedTheater && <p>Selected Theater: {selectedTheater}</p>} {/* Render selected theater */}
        </div>
    );
}

export default Theaters;
