import React, { useState } from "react";
import data from "./images.json";
import Modal from "./Model";
import BookingConfirmation from "./BookingConfirmation"; 

import './UserTable.css';

function Home() {
    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);

    const [userRegistration, setUserRegistrartion] = useState({
        numberoftickets: "",
        phonenumber: ""
    });

    const [records, setRecords] = useState([]);
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        console.log(name, value)
        setUserRegistrartion({ ...userRegistration, [name]: value })
    };

    const handleClick = (item, index) => {
        setCurrentIndex(index);
        setClickedImg(item.link);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecord = { ...userRegistration, id: new Date().getTime().toString() }
        console.log(records);
        setRecords([...records, newRecord]);
        console.log(records);

        setUserRegistrartion({
            numberoftickets: "",
            phonenumber: ""
        });
    };

    return (
        <div>
            {/* Your existing code */}
            {userRegistration.numberoftickets && userRegistration.phonenumber && (
                <BookingConfirmation
                    numberoftickets={userRegistration.numberoftickets}
                    phonenumber={userRegistration.phonenumber}
                />
            )}

            <div className="header">
                <div className="header-image">
                    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8b466e9f-26b4-4f40-a5ff-7eaa4b314014/dfady0s-54ea7126-3a05-4619-b38f-fb23a2bcb887.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhiNDY2ZTlmLTI2YjQtNGY0MC1hNWZmLTdlYWE0YjMxNDAxNFwvZGZhZHkwcy01NGVhNzEyNi0zYTA1LTQ2MTktYjM4Zi1mYjIzYTJiY2I4ODcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.G49pFsWPgF1-5CMAl_jXaxiqZEi_EwMmQ3VnM40CkkY" alt=" "
                    />
                </div>
                <div className="header-title">
                    <h1>BOOK MY SHOW</h1>
                </div>
            </div>

            <div className="container">
                <div className="movies">
                    <h1>MOVIE LIST</h1>
                    {data.data.map((item, index) => (
                        <div key={index} className="row">
                            <img
                                src={item.link}
                                alt={item.index}
                                onClick={() => handleClick(item, index)}
                                height="200" width="250"
                            />
                        </div>
                    ))}
                </div>
                <div className="theaters">
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
                </div>
                <div className="book-now">
                    <h1>BOOK NOW</h1><br></br><br></br>
                    <div>
                        <label htmlFor="numberoftickets">Number of Tickets :</label><br></br><br></br>
                        <input type="number" autoComplete="off"
                            value={userRegistration.numberoftickets}
                            onChange={handleInput}
                            onSubmit={handleSubmit}
                            name='numberoftickets' id="numberoftickets"
                        />
                    </div><br></br>
                    <div>
                        <label htmlFor='phonenumber'>Phone Number :</label><br></br><br></br>
                        <input type="digit" autoComplete='off'
                            value={userRegistration.phonenumber}
                            onChange={handleInput}
                            onSubmit={handleSubmit}
                            name='phonenumber' id='phonenumber'
                        />
                    </div>
                    <br></br><br></br>
                    <button onClick={handleSubmit}>BOOK NOW</button>
                </div>
            </div>

            <div className="footer">
                <div className="footer-img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0QBysVtgtCkzXbM69W0X7DUEbXU_Rx1toFhSysPQ7F2pFTaH5Wk-ZfMSKj9laeQBu3Ik&usqp=CAU" alt=" "
                    />
                </div>
                <div className="footer-icons">
                    <img src="https://brandbuildingforsmallbusiness.files.wordpress.com/2020/03/social-media-icons.jpg" alt=" "
                    />
                </div>
            </div>

            <div className="footer-para">
                <p>Copyright 2023 @ Bigtree Entertainment Pvt.Ltd . All Rights Reserved</p>
                <p>The Content and Images used on this site are copyright protected and copyrights vests with the respective owners. The usage of the content and images on this website is intented to promote the works and no endoresment of the artist shall be implied . Unauthorized use is prohibited and punishable by law</p>
            </div>

        </div>

    );
}

export default Home;