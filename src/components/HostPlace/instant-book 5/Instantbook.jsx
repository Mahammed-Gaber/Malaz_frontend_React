import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./Instantbook.css";
import { useState } from "react";


function Instantbook({formData, setForm}) {

  const [selectedCard, setSelectedCard] = useState(null);


  const handleCardSelect = (confirmReservations) => {
    setSelectedCard(confirmReservations);
    if (confirmReservations === 'Use instant booking') {
      setForm({...formData, instant_bookable: true})
    }else{
      setForm({...formData, instant_bookable: false})
    }
  };
  console.log(formData);

  return (
    <>
      <div className="container" style={{ alignContent: "center" }}>
        <div className="disc">
          <p
            className=""
            style={{ color: "white", fontSize: "2.5rem", lineHeight: '45px', textAlign: "center" }}
          >
            Select how you will confirm reservations
          </p>
          <hr />

          <div
            className="card-container d-flex flex-column"
            style={{
              justifyContent: "center",
              // marginTop: "100px",
              alignItems: "center" /* Vertical centering */,
              width: "100%" /* Full width for consistent centering */,
            }}
          >
            {/* Stacked cards for personal information and payments */}
            <Card
              style={{width: "25rem", backgroundColor: selectedCard  === 'Use instant booking' ? '#FFEC9E' : 'white' }} // Set width to 100% for responsive sizing
              onClick={() => handleCardSelect('Use instant booking')}            >
              <Card.Body style={{ display: 'flex', justifyContent: 'flex-start',}}>
                <i className="fa-solid fa-bolt" style={{ fontSize: "2rem", width : '20%'}}></i>
                <div>
                  <Card.Title>Use instant booking</Card.Title>
                  <Card.Text>Guests can book automatically.</Card.Text>
                </div>
              </Card.Body>
            </Card>
  
            <Card
              style={{width: "25rem", backgroundColor: selectedCard  === 'Approve or reject requests' ? '#FFEC9E' : 'white' }} // Set width to 100% for responsive sizing
              onClick={() => handleCardSelect('Approve or reject requests')} 
              // onClick={() => navigate("/Profilehost")}
            >
              <Card.Body style={{ display: 'flex', justifyContent: 'space-between'}}>
                <i
                  className="fa-solid fa-square-envelope"
                  style={{ fontSize: "2rem" }}
                ></i>
                <div>
                  <Card.Title>Approve or reject requests</Card.Title>
                  <Card.Text>
                    Guests must submit a reservation request. .
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default Instantbook;
