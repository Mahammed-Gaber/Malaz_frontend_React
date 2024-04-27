import Card from 'react-bootstrap/Card'; // Import Card component
import './Structure.css'
import { useEffect, useState } from 'react';


function Structure({formData , setForm}) {

  const [selectedCard, setSelectedCard] = useState(null);


  const handleCardSelect = (residenceType) => {
    setSelectedCard(residenceType);
    setForm({...formData, place_type: residenceType})
  };

  return (
    <>
    <div className='container' style={{alignContent: 'center'}}>
      <div className="disc" >
        <p
          className=""
          style={{ color: "white", fontSize: "2rem", textAlign: "center" }}
        >
          Which of the following best describes your residence
        </p>
        <hr />
      </div>

      <div
        className="card-container"
        style={{
          display: 'flex',
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <Card
          style={{ width: "12rem", height: "5rem", backgroundColor: selectedCard  === 'house' ? '#FFEC9E' : 'white'}}
          onClick={() => handleCardSelect('house')}
        >
          <Card.Body style={{display : 'flex', justifyContent: 'space-between'}} >
            <i className="fa-solid fa-house" style={{ fontSize: "1.7rem" }}></i>
            <Card.Title>house</Card.Title>
          </Card.Body>
        </Card>

        <Card
          style={{ width: "12rem", height: "5rem", backgroundColor: selectedCard === 'apartment' ? '#FFEC9E' : 'white'}}
          onClick={() => handleCardSelect('apartment')}
        >
          <Card.Body style={{display : 'flex', justifyContent: 'space-between'}} >
            <i className="fa-solid fa-building-user" style={{ fontSize: "1.7rem" }}></i>
            <Card.Title>apartment</Card.Title>
          </Card.Body>
        </Card>

        <Card
          style={{ width: "12rem", height: "5rem", backgroundColor: selectedCard === 'hut' ? '#FFEC9E' : 'white'}}
          onClick={() => handleCardSelect('hut')}
        >
          <Card.Body style={{display : 'flex', justifyContent: 'space-between'}} >
            <i className="fa-solid fa-parachute-box" style={{ fontSize: "1.7rem" }}></i>
            <Card.Title>hut</Card.Title>
          </Card.Body>
        </Card>
      </div>
    </div>
    </>
  );
}

export default Structure;
