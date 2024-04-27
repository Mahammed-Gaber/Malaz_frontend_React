import { useNavigate } from 'react-router-dom'
import { Card, Col, Row } from 'react-bootstrap'; // Import necessary Bootstrap components
import './PrivacyType.css'
import { useState } from 'react';


function PrivacyType({formData, setForm}) {

  const [selectedCard, setSelectedCard] = useState(null);


  const handleCardSelect = (residenceType) => {
    setSelectedCard(residenceType);
    setForm({...formData, property_type: residenceType})
  };

  return (
    <>
    <div className='container' style={{alignContent: 'center', overflow: 'auto'}}>
      <p className="" style={{ color: "white", fontSize: "2rem", textAlign: "center", lineHeight: '45px', marginTop: '70px' }}>
      What type of housing will be available to guests?
      </p>
      <hr />

      <Row style={{justifyContent: 'center'}}> {/* Center cards horizontally */}
        {/* <Col xs={12} md={6} lg={12}>  */}
          <Card
            style={{ width: "80%", backgroundColor: selectedCard  === 'Complete residence' ? '#FFEC9E' : 'white' }} // Set width to 100% for responsive sizing
            onClick={() => handleCardSelect('Complete residence')}
          >
            <Card.Body className='d-flex' style={{ padding: '0'}}>
                <i className="fa-solid fa-house" style={{ fontSize: "2rem", alignContent: 'center', marginRight: '10px' }}></i>
              <div >
                <Card.Title>Complete residence</Card.Title>
                <Card.Text>Guests get the entire place to themselves.area that may be shared with you or others.</Card.Text>
              </div>
            </Card.Body>
          </Card>
        {/* </Col> */}

        {/* <Col xs={12} md={6} lg={4}> Adjust grid sizes for responsiveness */}
          <Card
            style={{ width: "80%", backgroundColor: selectedCard  === 'room' ? '#FFEC9E' : 'white' }} // Set width to 100% for responsive sizing
            onClick={() => handleCardSelect('room')}
          >
            <Card.Body className='d-flex' style={{ padding: '0'}}>
              <i className="fa-solid fa-person-booth" style={{ fontSize: "2rem", alignContent: 'center', marginRight: '10px' }}></i>
              <div>
                <Card.Title>room</Card.Title>
                <Card.Text>Guests get their own room in the house, as well as access to common areas.</Card.Text>
              </div>
            </Card.Body>
          </Card>
        {/* </Col> */}

        {/* <Col xs={12} md={6} lg={4}> Adjust grid sizes for responsiveness */}
          <Card
            style={{ width: "80%", backgroundColor: selectedCard  === 'Shared room' ? '#FFEC9E' : 'white' }} // Set width to 100% for responsive sizing
            onClick={() => handleCardSelect('Shared room')}
          >
            <Card.Body className='d-flex' style={{ padding: '0', justifyContent : 'center'}}>
              <i className="fa-solid fa-people-roof" style={{ fontSize: "2rem", alignContent: 'center', marginRight: '10px' }}></i>
              <div >
                <Card.Title>Shared room</Card.Title>
                <Card.Text>Guests sleep in a room or common area that may be shared with you or others.</Card.Text>
              </div>
            </Card.Body>
          </Card>
        {/* </Col> */}
      </Row>
    </div>
  

</>
  
  )
}

export default PrivacyType;
