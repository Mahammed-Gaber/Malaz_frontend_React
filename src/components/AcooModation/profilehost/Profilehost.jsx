import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import card1 from "./imge/host_rc_earnings_2x_default.webp";
import card2 from "./imge/host_rc_film_2x_default.webp";
import card3 from "./imge/host_rc_guest_favorites_2x_default.webp";
import card4 from "./imge/host_rc_reviews_2x_default.webp";

// import pro from '../../../assets/image/room/room2.jpg'
import "./Profilehost.css";
import { useSelector } from "react-redux";
function Profilehost() {
  const currentUser = useSelector((state) => state.authReducer.curruntUser);

  const role = localStorage.getItem("role");

  const Reservations = []

  return (
    <>
      <div>
        <p
          className=""
          style={{ color: "white", fontSize: "3rem", textAlign: "center" }}
        >
          Welcome {currentUser.guest_name}
        </p>
        <br />
        <Link
          to="Profile"
          className=""
          style={{
            color: "white",
            fontSize: "1rem",
            gap: "10px",
            textAlign: "center",
          }}
        >
          {/* Your reservations */}
        </Link>
      </div>
      <InputGroup
        className="inputs d-flex"
        style={{ gap: "10px", justifyContent: "center" }}
      >
        <InputGroup className="mb-3" style={{ color: "white", width: "200px" }}>
          {/* <InputGroup.Radio aria-label='Radio button for following text input' /> */}
          <Form.Control
            placeholder="Guests check out (0)"
            aria-label="Text input with radio button"
          />
        </InputGroup>
        <InputGroup className="mb-3" style={{ color: "white", width: "200px" }}>
          {/* <InputGroup.Radio aria-label='Radio button for following text input' /> */}
          <Form.Control
            placeholder="Currently hosting (0)"
            aria-label="Text input with radio button"
          />
        </InputGroup>
        <InputGroup className="mb-3" style={{ color: "white", width: "200px" }}>
          {/* <InputGroup.Radio aria-label='Radio button for following text input' /> */}
          <Form.Control
            placeholder="Guest arriving son(0)"
            aria-label="Text input with radio button"
          />
        </InputGroup>
        <InputGroup className="mb-3" style={{ color: "white", width: "200px" }}>
          {/* <InputGroup.Radio aria-label='Radio button for following text input' /> */}
          <Form.Control
            placeholder="Next (0)"
            aria-label="Text input with radio button"
          />
        </InputGroup>
        <InputGroup className="mb-3" style={{ color: "white", width: "200px" }}>
          {/* <InputGroup.Radio aria-label='Radio button for following text input' /> */}
          <Form.Control
            placeholder="Pending review (0)"
            aria-label="Text input with radio button"
          />
        </InputGroup>
      </InputGroup>
      {/* /////////////////// */}
      <InputGroup
        className="mb-3 d-flex "
        style={{
          color: "white",
          width: "1000px",
          height: "15rem",
          gap: "10px",
          marginLeft: "175px",
        }}
      >
        {/* <InputGroup.Radio aria-label='Radio button for following text input' /> */}
        <Form.Control
          // placeholder='You dont have guests checking out today or tomorrow'

          aria-label="Text input with radio button"
        />
      </InputGroup>
      <br />

      {/* ///////////////////////// */}
      <div>
        <p
          className=""
          style={{
            color: "white",
            fontSize: "1.5rem",
            textAlign: "center",
          }}
        >
          We are ready to provide assistance
        </p>
        <br />
        <Link
          to="Profile"
          className=""
          style={{ color: "white", fontSize: "1rem" }}
        >
          {/* Your reservations */}
        </Link>
      </div>
      {/* ///////////// */}
      <div
        className="dis d-flex"
        style={{ gap: "10px", justifyContent: "center" }}
      >
        <Card style={{ width: "30rem", height: "9rem" }}>
          <i
            className="fa-brands fa-cc-diners-club"
            style={{ fontSize: "2rem" }}
          ></i>

          <Card.Body>
            <Card.Title>Join your local hostess club</Card.Title>
            <Card.Text>
              Connect, collaborate and share with other hosts and community
              members.{" "}
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: "30rem", height: "9rem" }}>
          <i
            className="fa-solid fa-id-card-clip"
            style={{ fontSize: "2rem" }}
          ></i>

          <Card.Body>
            <Card.Title>Contact specialist support</Card.Title>
            <Card.Text>
              As a new host, you can access our specially trained support team
              with the push of a button.{" "}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      <br />
      {/* /////////////////// */}
      <div>
        <p
          className=""
          style={{
            color: "white",
            fontSize: "1.5rem",
            textAlign: "center",
          }}
        >
          Resources and tips
        </p>
        <Link
          to="Profile"
          className=""
          style={{ color: "white", fontSize: "1rem" }}
        >
          {/* Your reservations */}
        </Link>
      </div>
      {/* ////////////////// */}

      <div
        className=" d-flex"
        style={{ gap: "10px", justifyContent: "center" }}
      >
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={card1} />
          <Card.Body>
            {/* <Card.Title>Card Title</Card.Title> */}
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            {/* <Button variant='primary'>Go somewhere</Button> */}
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={card2} />
          <Card.Body>
            {/* <Card.Title>Card Title</Card.Title> */}
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            {/* <Button variant='primary'>Go somewhere</Button> */}
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={card3} />
          <Card.Body>
            {/* <Card.Title>Card Title</Card.Title> */}
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            {/* <Button variant='primary'>Go somewhere</Button> */}
          </Card.Body>
        </Card>

        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={card4} />
          <Card.Body>
            {/* <Card.Title>Card Title</Card.Title> */}
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            {/* <Button variant='primary'>Go somewhere</Button> */}
          </Card.Body>
        </Card>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>Place Name</th>
            <th>Reserve Date</th>
            <th>Total Seats</th>
            <th>Seats Available</th>
            <th>Booking Status</th>
          </tr>
        </thead>
        <tbody>
          {Reservations.map(reserve => { return (
            <tr key={reserve._id}>
              <td data-label="Event Name">{reserve.place_name}</td>
              <td data-label="Event Date">22/12/2021</td>
              <td data-label="Total Seats">20</td>
              <td data-label="Seats Available">12</td>
              <td data-label="Booking Status">
                {role == "guest" ? (
                  <button className="btn btn-success " disabled>
                    Done
                  </button>
                ) : (
                  <button className="btn btn__active">Book Now</button>
                )}
              </td>
            </tr>
          )})}
          <tr>
            <td data-label="Event Name">Music</td>
            <td data-label="Event Date">29/12/2021</td>
            <td data-label="Total Seats">15</td>
            <td data-label="Seats Available">5</td>
            <td data-label="Booking Status">
              <a href="#" className="btn btn__active">
                Book Now
              </a>
            </td>
          </tr>
          <tr>
            <td data-label="Event Name">Craft</td>
            <td data-label="Event Date">19/12/2021</td>
            <td data-label="Total Seats">30</td>
            <td data-label="Seats Available">19</td>
            <td data-label="Booking Status">
              <a href="#" className="btn btn__active">
                Book Now
              </a>
            </td>
          </tr>
          <tr>
            <td data-label="Event Name">Go Kart</td>
            <td data-label="Event Date">10/12/2021</td>
            <td data-label="Total Seats">5</td>
            <td data-label="Seats Available">0</td>
            <td data-label="Booking Status">
              <a href="#" className="btn btn__pledged">
                closed
              </a>
            </td>
          </tr>
          <tr>
            <td data-label="Event Name">Designing</td>
            <td data-label="Event Date">1/12/2021</td>
            <td data-label="Total Seats">10</td>
            <td data-label="Seats Available">0</td>
            <td data-label="Booking Status">
              <a href="#" className="btn btn__pledged">
                closed
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Profilehost;
