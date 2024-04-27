import { useNavigate } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'
import { useAccordionButton } from 'react-bootstrap/AccordionButton'
import './Price.css'

function CustomToggle ({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!')
  )

  return (
    <button
      type='button'
      style={{ backgroundColor: 'pink' }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  )
}

function Price () {
  const navigate = useNavigate()

  return (
    <>
      <div>
        <p
          className=''
          style={{ color: 'white', fontSize: '2rem', textAlign: 'center' }}
        >
          Now, set the price
          <h3
            className=''
            style={{
              color: 'white',
              fontSize: '1rem',
              textAlign: 'center',
              marginTop: '10px'
            }}
          >
            You can change it at any time.
          </h3>
        </p>
        <br />
        {/* Uncomment and adjust path if needed */}
        {/* <Link to='Profile' className='' style={{ color: 'white', fontSize: '1rem', gap: '10px', textAlign: 'center' }}>
          Your reservations
        </Link> */}
      </div>

      <InputGroup
        className='inputs d-flex'
        style={{ gap: '10px', justifyContent: 'center' }}
      >
        <InputGroup className='mb-3' style={{ color: 'white', width: '200px' }}>
          {/* <InputGroup.Radio aria-label='Radio button for following text input' /> */}
          <Form.Control
            placeholder='160 USD'
            style={{ color: 'black', fontSize: '20px', textAlign: 'center' }}
            aria-label='Text input with radio button'
          />
        </InputGroup>
      </InputGroup>
      {/* /////////////////////////////////////////// */}
      <div
        className='card-container d-flex flex-column'
        style={{
          justifyContent: 'center',
          marginTop: '10px',
          alignItems: 'center' /* Vertical centering */,
          width: '100%' /* Full width for consistent centering */
        }}
      >
        {/* Stacked cards for personal information and payments */}
        <Card
          style={{ width: '30rem', height: '5rem' }}
          onClick={() => navigate('/profile')}
        >
          <i className='fa-solid fa-money-check-dollar' style={{ fontSize: '1rem' }}></i>
          <Card.Body>
            <Card.Title>The price the guest will pay before taxes</Card.Title>
            {/* <Card.Text>Guests can book automatically.</Card.Text> */}
          </Card.Body>
          {/* </Card>
        <Card
          style={{ width: '30rem', height: '10rem' }}
          onClick={() => navigate('/Profilehost')}
        > */}
          {/* <i
            className='fa-solid fa-square-envelope'
            style={{ fontSize: '2rem' }}
          ></i> */}
          <Card.Body>
            {/* <Card.Title>Approve or reject requests</Card.Title> */}
            {/* <Card.Text>Guests must submit a reservation request. .</Card.Text> */}
          </Card.Body  >
        </Card>
        <Accordion defaultActiveKey='0'  className=''style={{ width: '30rem', height: '5rem' }}>
        <Card>
          <Card.Header>
            <CustomToggle eventKey='0'>Click me!</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey='0'>
            <Card.Body>Hello! I'm the body</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <CustomToggle eventKey='1'>Click me!</CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey='1'>
            <Card.Body>Hello! I'm another body</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      </div>

      {/* /////////////////////////////////////////// */}
    </>
  )
}

export default Price
