import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Account.css";

function Account() {
  const navigate = useNavigate();
  return (
    <>
      <div className="disc " style={{ marginTop: "150px" }}>
        <p
          className=""
          style={{ color: "white", fontSize: "3rem", textAlign: "center" }}
        >
          Account
        </p>

        {/* <button className='btn theme_btn button_hover'onClick={()=>navigate("/deatails")}>
              Deatails
            </button> */}
<<<<<<< HEAD
        {/* <button
          to='Profile'
          className=''
          onClick={() => navigate('/Profile')}
          style={{ color: 'white', fontSize: '1rem' }}
        >
          Go to profile
        </button> */}
        <hr />
        {/* <button
          to='Profilehost'
          className=''
          onClick={() => navigate('/Profilehost')}
          style={{ color: 'white', fontSize: '1rem' }}
        >
          Go to profile host
        </button> */}
=======
        <button to='Profile' className='' onClick={()=>navigate("/Profile")}  style={{ color: 'white', fontSize: '1rem' }}>
          Go to profile
        </button>
<hr />
        <button to='Profilehost' className='' onClick={()=>navigate("/Profilehost")}  style={{ color: 'white', fontSize: '1rem' }}>
          Go to profile host
        </button>
>>>>>>> 35e10dfc5b17e8abb276491437dde2694419b63a
      </div>

      <div
        className="card-container d-flex flex-wrap "
        // margin-top: 195px;
        style={{
          justifyContent: "center",
          gap: "10px",
          marginTop: "100px",
          height: "220px",
        }}
      >
        <Card
          to="Profile"
          className=""
          onClick={() => navigate("/profile ")}
          style={{ width: "23rem", height: "9rem" }}
        >
          {/* <Card.Img variant='top' src='<i class="fa-solid fa-user"></i>' /> */}
          <i className="fa-solid fa-user" style={{ fontSize: "2rem" }}></i>
          <Card.Body>
            <Card.Title>personal information</Card.Title>
            <Card.Text>
              Provide personal details and how to reach you .
            </Card.Text>
            {/* <Button variant='primary'>Go somewhere</Button> */}
          </Card.Body>
        </Card>
        <Card
          to="Profilehost"
          onClick={() => navigate("/Profilehost")}
          style={{ width: "23rem", height: "9rem" }}
        >
          {/* <Card.Img variant='top' src='<i class="fa-solid fa-user"></i>' /> */}
          <i
            className="fa-solid fa-shield-halved"
            style={{ fontSize: "2rem" }}
          ></i>

          <Card.Body>
            <Card.Title>Payments </Card.Title>
            <Card.Text>
              Review payments, returns, coupons, and gift cards.
            </Card.Text>
            {/* <Button variant='primary'>Go somewhere</Button> */}
          </Card.Body>
        </Card>
        <Card
          to="Profilehost"
          className=""
          onClick={() => navigate("#")}
          style={{ width: "23rem", height: "9rem" }}
        >
          {/* <Card.Img variant='top' src='<i class="fa-solid fa-user"></i>' /> */}
          <i
            className="fa-solid fa-house-lock"
            style={{ fontSize: "2rem" }}
          ></i>
          <Card.Body>
            <Card.Title>be A Host</Card.Title>
            <Card.Text>
              Set the default language, currency, and time zone .
            </Card.Text>
            {/* <Button variant='primary'>Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </div>
      <hr />
      {/* <div>
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
      </div> */}
    </>
  );
}

export default Account;
