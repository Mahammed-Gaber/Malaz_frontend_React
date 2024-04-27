function MoreInfo({ formData, setForm }) {
  return (
    <>
      <div
        className="container my-5"
        style={{ overflow: "", alignContent: "center" }}
      >
        <div className="form-group">
          <label className="fs-4 fw-bold">Place Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            placeholder="Place Name"
            value={formData.place_name}
            onChange={(event) =>
              setForm({ ...formData, place_name: event.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label className="fs-4 fw-bold">Amenities</label>
          <textarea
            className="form-control"
            rows={2}
            placeholder="amentes for your place"
            value={formData.amenities}
            onChange={(event) =>
              setForm({ ...formData, amenities: [event.target.value] })
            }
          />
        </div>

        <div className="form-group">
          <label className="fs-4 fw-bold">Description</label>
          <textarea
            className="form-control"
            rows={2}
            placeholder="Describe your place"
            value={formData.description}
            onChange={(event) =>
              setForm({ ...formData, description: event.target.value })
            }
          />
        </div>

        <div className="form-group">
          <label className="fs-4 fw-bold">Neighborhood Overview</label>
          <textarea
            className="form-control"
            rows={2}
            placeholder="Describe the neighborhood and surrounding area here ..."
            value={formData.neighborhood_overview}
            onChange={(event) =>
              setForm({
                ...formData,
                neighborhood_overview: event.target.value,
              })
            }
          />
        </div>
      </div>

      {/* <div className='container my-5' style={{overflow: 'scroll'}}>
        <div className='row  d-flex justify-content-between align-self-start'>
          <div className='col-md-3  d-flex  flex-column align-items-center '>
            <input type="number" />
            <h3
              className='fs-1  bg-dark text-white rounded-circle  text-center  '
              style={{ lineHeight: '150px', width: '200px', height: '200px' }} >
                 <i className="fa-solid fa-circle-dollar-to-slot"style={{ fontSize:"200px" }} ></i></h3>
            <button
              type='button'
              className='btn-secondary'
              style={{
                width: '80px',
                borderRadius: '50px',
                border: 'none',
                padding: '5px',
                backgroundColor: '#52D0FE',
                color: 'whitesmoke'
               
              }} >price</button>
          </div>
          <div className='col-md-8'>
            <h3 style={{ color: 'white' }}>
              {' '}
              Give us some key information about your listing
            </h3>
            <h5 style={{ color: 'white' }}>
              {' '}
              Give us some key information about your listing
            </h5>

            <div className='container overflow-hidden'>
              <div className='row gy-4 d-flex justify-content-between'>
                <div className='col-md-5 border-bottom '>
                  <div className='my-2 text-muted '>Guests</div>
                </div>
                  <input type="number" style={{ right:"10px" }} />

                <br />
                <div className='col-md-5 border-bottom '>
                  <div className='my-2 text-muted '>bedrooms</div>
                </div>

                <input type="number" style={{ right:"10px" }} />

                <div className='col-md-5 border-bottom '>
                  <div className='my-2 text-muted '>bed</div>
                </div>
                <input type="number" style={{ right:"10px" }} />

                <div className='col-md-5 border-bottom '>
                  <div className='my-2 text-muted '>Bathrooms</div>
                </div>
                <input type="number" style={{ right:"10px" }} />

                <button
                  style={{
                    // width: '80px',
                    borderRadius: '50px',
                    border: 'none',
                    padding: '5px',
                    backgroundColor: '#D4A20E',
                    color: 'whitesmoke'
                  }}
                  to='Createprofile'
                  className='btn btn- btn-lg'
                  onClick={() => navigate('#')}
                >
                  Update Profile
                </button>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div> */}
    </>
  );
}

export default MoreInfo;
