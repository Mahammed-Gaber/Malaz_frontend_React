function Createprofile() {
  return (
    <>
      <div className="container my-5">
        <div className="row  d-flex justify-content-between align-self-start">
          <div className="col-md-3  d-flex  flex-column align-items-center ">
            <h3
              className="fs-1  bg-dark text-white rounded-circle  text-center  "
              style={{ lineHeight: "150px", width: "200px", height: "200px" }}
            >
              M
            </h3>
            <button
              type="button"
              className="btn-secondary"
              style={{ width: "60px" }}
            >
              Add
            </button>
          </div>
          <div className="col-md-8">
            <h4>Your Profile</h4>
            <p className="text-muted">
              The information you share will be used across Airbnb to help other
              guests and Hosts get to know you <span></span>
              <a href="www.google.com">Learn more</a>
            </p>
            {/* make cards start */}
            <div className="container overflow-hidden">
              <div className="row gy-4 d-flex justify-content-between">
                <div className="col-md-5 border-bottom ">
                  <div className="my-2 text-muted ">enter here Modal</div>
                </div>
                <div className="col-md-5 border-bottom ">
                  <div className="my-2 text-muted ">enter here Modal</div>
                </div>
                <div className="col-md-5 border-bottom ">
                  <div className="my-2 text-muted ">enter here Modal</div>
                </div>
                <div className="col-md-5 border-bottom ">
                  <div className="my-2 text-muted ">enter here Modal</div>
                </div>
                <div className="col-md-5 border-bottom ">
                  <div className="my-2 text-muted ">enter here Modal</div>
                </div>
                <div className="col-md-5 border-bottom ">
                  <div className="my-2 text-muted ">enter here Modal</div>
                </div>
                <div className="col-md-5 border-bottom ">
                  <div className="my-2 text-muted ">enter here Modal</div>
                </div>
                <div className="col-md-5 border-bottom ">
                  <div className="my-2 text-muted ">enter here Modal</div>
                </div>
                <div className="col-md-5 border-bottom ">
                  <div className="my-2 text-muted ">enter here Modal</div>
                </div>
                <div className="col-md-5 border-bottom ">
                  <div className="my-2 text-muted ">enter here Modal</div>
                </div>
                <div className="col-md-5 border-bottom ">
                  <div className="my-2 text-muted ">enter here Modal</div>
                </div>
                <div className="col-md-5 border-bottom ">
                  <div className="my-2 text-muted ">enter here Modal</div>
                </div>
                <div className="col-md-12  ">
                  <h4>About you</h4>
                </div>
                <div
                  className="col-md-12 my-0 rounded-3 "
                  style={{ border: "1px black dotted" }}
                >
                  <p className="mt-3 text-muted">write some thing fun</p>
                  <div className=" mb-3 text-decoration-underline fw-bold">
                    enter a modal
                  </div>
                </div>
                <div className="col-md-12 rounded-3 mt-5  border-bottom "></div>
              </div>
            </div>

            {/* make cards end*/}
          </div>
        </div>
      </div>
    </>
  );
}

export default Createprofile;
