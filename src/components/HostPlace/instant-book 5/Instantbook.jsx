import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import "./Instantbook.css";
function Instantbook() {
  const navigate = useNavigate();

  return (
    <>
      <div className="container" style={{ alignContent: "center" }}>
        <div className="disc" style={{ border: "2px solid red" }}>
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
              style={{ width: "25rem" }}
              // onClick={() => navigate("/profile")}
            >
              <Card.Body style={{ display: 'flex', justifyContent: 'flex-start',}}>
                <i className="fa-solid fa-bolt" style={{ fontSize: "2rem", width : '20%'}}></i>
                <div>
                  <Card.Title>Use instant booking</Card.Title>
                  <Card.Text>Guests can book automatically.</Card.Text>
                </div>
              </Card.Body>
            </Card>
  
            <Card
              style={{ width: "25rem"}}
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
