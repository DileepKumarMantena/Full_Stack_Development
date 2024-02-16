import { useState } from "react";
const Modal = ({
    clickedImg,
    setClickedImg,
}) => {
    const handleClick = (e) => {
        if (e.target.classList.contains("dismiss")) {
            setClickedImg(null);
        }
    };
 
    const [data, setData] = useState([]);
    const submitInput = (e) => {
        const data = e.target.data;
        submitInput()
        setData([...data]);
        console.log(data);
    };
 
    return (
<div>
<div className="overlay dismiss" onClick={handleClick}>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh4T_FE393zjps62Q5YdcQ7ORrgDu5vvFI1_lhzR3pQJo-98Cl21dgEI6KZ7nmHExRxlY&usqp=CAU" alt=" " />
<p>Jagadamba &nbsp;&nbsp;&nbsp;<button id="Jagadamba" onClick={() => { console.log(data); }}>SELECT</button></p><br></br>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKt8fYNWrf1S5kTCLbZ_eJZSOg1Ud4HM2oSv7oEi6P-J8h9dP0oUrKRNW4NzDBCh_GmOo&usqp=CAU" alt=" " />
<p>Kinnera &nbsp;&nbsp;&nbsp;<button id="Kinnera" onClick={() => { console.log(data); }}>SELECT</button></p><br></br>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBd_iUIWLD593jxnw8FKq63o_8OrCOgqt29bqtKIKNTFeftGeaxxQ9tIKBJW9jFqmMjXY&usqp=CAU" alt=" " />
<p>Melody &nbsp;&nbsp;&nbsp;<button id="Melody" onClick={() => { console.log(data); }}>SELECT</button></p><br></br>
<button className="dismiss" onClick={handleClick}>REMOVE</button>
</div>
</div>
    );
};
 
export default Modal;
