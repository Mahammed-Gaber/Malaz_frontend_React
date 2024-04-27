import "./Floorplan.css";

function Floorplan({ formData, setForm }) {

  console.log(formData);

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          const location = `(${latitude}, ${longitude})`; // Format the location however you want
          setForm({ ...formData, location: location });
        },
        (error) => {
          console.error("Error getting location:", error);
          // Handle error
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      // Handle browser not supporting geolocation
    }
  };

  
  const handleMapLinkClick = () => {
    const { latitude, longitude } = getCoordinatesFromLocationString(formData.location);
    window.open(`https://www.google.com/maps?q=${latitude},${longitude}`, '_blank');
  };

  const getCoordinatesFromLocationString = (locationString) => {
    // Parse the location string and extract latitude and longitude
    const regex = /\(([^,]+),\s*([^)]+)\)/;
    const matches = locationString.match(regex);
    if (matches && matches.length === 3) {
      return { latitude: matches[1], longitude: matches[2] };
    } else {
      return { latitude: 0, longitude: 0 }; // Default coordinates
    }
  };

  return (
    <>
      {/* <div
        className="container my-5"
        style={{ overflow: "", alignContent: "center" }}
      >
        <div className="form-group">
          <label className="fs-4 fw-bold">Place Name</label>
          <input
            className="form-control"
            type="text"
            name="name"
            required
            placeholder="Place Name"
            value={formData.place_name}
            onChange={(event)=> setForm({...formData, place_name : event.target.value})}
          />
        </div>

        <div className="form-group">
          <label className="fs-4 fw-bold">Describe Your Place</label>
          <textarea
            className="form-control"
            rows={3}
            placeholder="Describe your place"
            required
            value={formData.description}
            onChange={(event)=> setForm({...formData, description : event.target.value})}
          />
        </div>

        <div className="form-group">
          <label className="fs-4 fw-bold">Neighborhood Overview</label>
          <textarea
            className="form-control"
            rows={3}
            placeholder="Describe the neighborhood and surrounding area here ..."
            value={formData.neighborhood_overview}
            onChange={(event)=> setForm({...formData, neighborhood_overview : event.target.value})}
            required
          />
        </div>
      </div> */}

      <div
        className="container my-5"
        style={{
          overflow: "",
          alignContent: "center",
        }}
      >
        <div className="row">
          <div className="col-4">
            <div className="form-group">
              <label className="fs-4 fw-bold">Bedrooms</label>
              <input
                className="form-control"
                type="number"
                name="bedrooms"
                placeholder="Bedrooms"
                required
                value={formData.bedrooms}
                onChange={(event)=> setForm({...formData, bedrooms : event.target.value})}
                />
                {formData.bedrooms && <p style={{color: 'white'}}>{formData.bedrooms} bed rooms</p>}
            </div>
          </div>
          <div className="col-4">
            <div className="form-group">
              <label className="fs-4 fw-bold">Beds</label>
              <input
                className="form-control"
                type="number"
                name="beds"
                placeholder="Beds"
                required
                value={formData.beds}
                onChange={(event)=> setForm({...formData, beds : event.target.value})}
              />
              {formData.beds && <p style={{color: 'white'}}>{formData.beds} beds</p>}
            </div>
          </div>
          <div className="col-4">
            <div className="form-group">
              <label className="fs-4 fw-bold">Price / night</label>
              <input
                className="form-control"
                type="number"
                name="price"
                placeholder="Price"
                required
                value={formData.price}
                onChange={(event)=> setForm({...formData, price : event.target.value})}
              />
              {formData.price && <p style={{color: 'white'}}>{formData.price} $ per neight</p>}
            </div>
          </div>
          <div className="col-4">
            <div className="form-group">
              <label className="fs-4 fw-bold">Accommodates</label>
              <input
                className="form-control"
                type="number"
                name="price"
                placeholder="accommodates"
                required
                value={formData.accommodates}
                onChange={(event)=> setForm({...formData, accommodates : event.target.value})}
              />
              {formData.accommodates && <p style={{color: 'white'}}>{formData.accommodates} Person</p>}
            </div>
          </div>
        <div className="col-8 form-group">
            <label className="fs-4 fw-bold">Location</label>
            <div className="input-group">
              <input
                className="form-control"
                type="text"
                name="location"
                placeholder="Click to select your location"
                readOnly // Make the input field read-only
                value={formData.location}
                onChange={(event) => setForm({ ...formData, location: event.target.value })}
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={handleLocationClick}
              >
                Get Current Location
              </button>
            </div>
          </div>
        </div>

          
        <div className="row">
            <label className="fs-4 fw-bold">Start Dates</label>
          <div className="col-4">
            <label className="fs-5">From</label>
            <input
              className="form-control"
              type="date"
              name="startDateFrom"
              placeholder="From"
              required
              value={formData.startDates}
              onChange={(event)=> setForm({...formData, startDates : event.target.value})}
            />
          </div>
          <div className="col-4">
            <label className="fs-5">To</label>
            <input
              className="form-control"
              type="date"
              name="startDateTo"
              placeholder="To"
              required
              value={formData.endDates}
              onChange={(event)=> setForm({...formData, endDates : event.target.value})}
            />
          </div>
        </div>
        {formData.startDates && formData.endDates &&
        <p style={{color: 'white'}}>Your Servation start from {formData.startDates}  to  {formData.endDates}</p>}
      </div>

      {/* <div className="form-group">
            <label className="fs-4 fw-bold">Location</label>
            <div className="input-group">
              <input
                className="form-control"
                type="text"
                name="location"
                placeholder="Click to select your location"
                readOnly // Make the input field read-only
                value={formData.location}
                onChange={(event) => setForm({ ...formData, location: event.target.value })}
              />
              <button
                className="btn btn-outline-secondary"
                type="button"
                onClick={handleLocationClick}
              >
                Get Current Location
              </button>
            </div>
          </div> */}
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

export default Floorplan;
