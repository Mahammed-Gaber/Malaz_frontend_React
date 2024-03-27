import { useNavigate } from 'react-router-dom'


function Profile() {
  const navigate =useNavigate()

  return (
    <>

    <div>
      <div className="container px-4"style={{marginTop:"190" }}>
        <div className="row gx-5 ">
          <div
            className="col-md card my-4"
            style={{ width: "18rem", borderRadius: "30px" }}
          >
            <div className="card-body text-center">
              <h3
                className="card-title  bg-dark text-white rounded-circle m-auto text-center align-middle "
                style={{ width: "50px", height: "50px", lineHeight: "50px" }}
              >
                M
              </h3>
              <h5 className="card-subtitle my-1 text-muted ">Mahdy</h5>
              <p className="card-text">Guest</p>
            </div>
          </div>
        </div>
        <div className="row gx-5 mt-5  justify-content-sm-between">
          <div className="col-md-4    card " style={{ borderRadius: "30px" }}>
            <div className="card-body ">
              <h5>Mahdy confirmed information</h5>
              <p className="card-text">Email address</p>
              <p className="card-text border-bottom pb-3">phone number</p>

              <h5>Verify your identity</h5>
              <p className="card-text">
                Before you book or host on Airbnb, you will need to complete this
                step.
              </p>
              <a href="#" className="btn btn-primary btn-lg">
                Get verified
              </a>
            </div>

          </div>
          <div className="col-md-5 ">
            <div className="border-top p-3">
              <div className="card-body">
                <h4 className="card-title">It is time to create your profile</h4>
                <p className="card-text text-muted">
                  Your Airbnb profile is an important part of every reservation.
                  Create yours to help other Hosts and guests get to know you.
                </p>
                <button to="Createprofile" className="btn btn-danger btn-lg"onClick={()=>navigate("/Createprofile")}>
                  Create profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Profile
