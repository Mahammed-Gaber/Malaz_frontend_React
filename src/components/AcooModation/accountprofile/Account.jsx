import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


function Account () {
    const navigate =useNavigate()
  return (
    <>
      <div className='disc ' style={{ marginTop: '150px' }}>
        <p
          className=''
          style={{ color: 'white', fontSize: '3rem', justifyContent: 'center' }}
        >
          Account
        </p>

        {/* <button className='btn theme_btn button_hover'onClick={()=>navigate("/deatails")}>
              Deatails
            </button> */}
        <Link to='Profile' className='' onClick={()=>navigate("/Profile")}  style={{ color: 'white', fontSize: '1rem' }}>
          Go to profile
        </Link>
<hr />
        <Link to='Profilehost' className='' onClick={()=>navigate("/Profilehost")}  style={{ color: 'white', fontSize: '1rem' }}>
          Go to profile host
        </Link>
      </div>

      <div
        className='card-container d-flex flex-wrap '
        // margin-top: 195px;
        style={{ justifyContent: 'center', gap: '10px', marginTop: '70px' }}
      >
        <Card style={{ width: '23rem', height: '9rem' }}>
          {/* <Card.Img variant='top' src='<i class="fa-solid fa-user"></i>' /> */}
          <i className='fa-solid fa-user' style={{ fontSize: '2rem' }}></i>
          <Card.Body>
            <Card.Title>personal information</Card.Title>
            <Card.Text>
              Provide personal details and how to reach you .
            </Card.Text>
            {/* <Button variant='primary'>Go somewhere</Button> */}
          </Card.Body>
        </Card>
        <Card style={{ width: '23rem', height: '9rem' }}>
          {/* <Card.Img variant='top' src='<i class="fa-solid fa-user"></i>' /> */}
          <i
            className='fa-solid fa-shield-halved'
            style={{ fontSize: '2rem' }}
          ></i>

          <Card.Body>
            <Card.Title>Login and security</Card.Title>
            <Card.Text>
              Update your password and secure your account .
            </Card.Text>
            {/* <Button variant='primary'>Go somewhere</Button> */}
          </Card.Body>
        </Card>
        <Card style={{ width: '23rem', height: '9rem' }}>
          {/* <Card.Img variant='top' src='<i class="fa-solid fa-user"></i>' /> */}
          <i
            className='fa-solid fa-money-bill'
            style={{ fontSize: '2rem' }}
          ></i>
          <Card.Body>
            <Card.Title>Payments </Card.Title>
            <Card.Text>
              Review payments, returns, coupons, and gift cards.
            </Card.Text>
            {/* <Button variant='primary'>Go somewhere</Button> */}
          </Card.Body>
        </Card>
        <Card style={{ width: '23rem', height: '9rem' }}>
          {/* <Card.Img variant='top' src='<i class="fa-solid fa-user"></i>' /> */}
          <i
            className='fa-solid fa-money-check-dollar'
            style={{ fontSize: '2rem' }}
          ></i>
          <Card.Body>
            <Card.Title>Taxes</Card.Title>
            <Card.Text>
              Manage taxpayer information and tax documents .
            </Card.Text>
            {/* <Button variant='primary'>Go somewhere</Button> */}
          </Card.Body>
        </Card>
        <Card style={{ width: '23rem', height: '9rem' }}>
          {/* <Card.Img variant='top' src='<i class="fa-solid fa-user"></i>' /> */}
          <i
            className='fa-brands fa-canadian-maple-leaf'
            style={{ fontSize: '2rem' }}
          ></i>
          <Card.Body>
            <Card.Title>Notifications</Card.Title>
            <Card.Text>
              Choose your notification preferences and how you want to be
              contacted .
            </Card.Text>
            {/* <Button variant='primary'>Go somewhere</Button> */}
          </Card.Body>
        </Card>
        <Card style={{ width: '23rem', height: '9rem' }}>
          {/* <Card.Img variant='top' src='<i class="fa-solid fa-user"></i>' /> */}
          <i className='fa-solid fa-bell' style={{ fontSize: '2rem' }}></i>
          <Card.Body>
            <Card.Title>Privacy and sharing</Card.Title>
            <Card.Text>
              Manage your personal data, connected services, and data sharing
              settings .
            </Card.Text>
            {/* <Button variant='primary'>Go somewhere</Button> */}
          </Card.Body>
        </Card>
        <Card style={{ width: '23rem', height: '9rem' }}>
          {/* <Card.Img variant='top' src='<i class="fa-solid fa-user"></i>' /> */}
          <i
            className='fa-solid fa-house-lock'
            style={{ fontSize: '2rem' }}
          ></i>
          <Card.Body>
            <Card.Title>General preferences</Card.Title>
            <Card.Text>
              Set the default language, currency, and time zone .
            </Card.Text>
            {/* <Button variant='primary'>Go somewhere</Button> */}
          </Card.Body>
        </Card>
        <Card style={{ width: '23rem', height: '9rem' }}>
          {/* <Card.Img variant='top' src='<i class="fa-solid fa-user"></i>' /> */}
          <i
            className='fa-solid fa-stethoscope'
            style={{ fontSize: '2rem' }}
          ></i>
          <Card.Body>
            <Card.Title>Traveling for work</Card.Title>
            <Card.Text>
              Add your work email to get business trip benefits.
            </Card.Text>
            {/* <Button variant='primary'>Go somewhere</Button> */}
          </Card.Body>
        </Card>
        <Card style={{ width: '23rem', height: '9rem' }}>
          {/* <Card.Img variant='top' src='<i class="fa-solid fa-user"></i>' /> */}
          <i
            className='fa-solid fa-screwdriver-wrench'
            style={{ fontSize: '2rem' }}
          ></i>
          <Card.Body>
            <Card.Title>Professional hosting tools</Card.Title>
            <Card.Text>
              Get professional tools if you manage multiple properties on Airbnb
              .
            </Card.Text>
            {/* <Button variant='primary'>Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </div>
      <div>
        <p className='' style={{ color: 'white', fontSize: '1.5rem' }}>
          Do you want to stop your account?
        </p>
        <Link
          to='Accomodation'
          className=''
          style={{ color: 'white', fontSize: '1rem' }}
        >
          Take care of this now
        </Link>
      </div>
    </>
  )
}

export default Account
