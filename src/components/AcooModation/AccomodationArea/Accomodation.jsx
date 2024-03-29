import './Accomodation.css'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

// Use axios from modefided file
import axios from '../../../axios/instance'

function Accomodation ({data}) {
  const navigate =useNavigate()
console.log(data);
  let [places, setPlaces] = useState([])


  useEffect(() => {
    axios.get('/place/getAllPlaces')
    .then((result)=> {
      setPlaces([...result.data.places])
    })
  }, [])


  return (
    <>
      <section className='accomodation_area section_gap'>
        <div className='container'>
          <div className='row mb_30'>
            {places.map(place => {
              return (
                <>
                  <div key={place._id} className='col-lg-3 col-sm-6' style={{width: '100%'}}>
                    <div className='accomodation_item text-center'>
                      <div className='hotel_img'>
                        <img src={place.imageCover} alt='' style={{width: '100%', height: '100%'}}/>
                        <button className='btn theme_btn button_hover'onClick={()=>navigate("/deatails")}>
                          Deatails
                        </button>
                      </div>
                      <a href='#'>
                        <h4 className='sec_h4'>{place.place_name}</h4>
                      </a>
                      <h5>
                        ${place.price}
                        {/* <small>/{place.host_id}</small> */}
                      </h5>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </section>

      {/* <div className="container">
      <div className="card mx-auto mt-5" style={{ maxWidth: '20rem' }}>
        <img
          src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          className="card-img-top"
          alt="Property"
        />
        <div className="card-body">
          <h5 className="card-title">Detached House • 5y old</h5>
          <p className="card-text">$750,000</p>
          <p className="card-text">742 Evergreen Terrace</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">3 Bedrooms</li>
          <li className="list-group-item">2 Bathrooms</li>
        </ul>
        <div className="card-body">
          <p className="card-text font-weight-bold">Realtor</p>
          <div className="d-flex align-items-center">
            <img
              src="https://images.unsplash.com/photo-1500522144261-ea64433bbe27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"
              alt="Realtor"
              className="rounded-circle mr-3"
              style={{ width: '40px', height: '40px' }}
            />
            <div>
              <p className="card-text font-weight-bold">Tiffany Heffner</p>
              <p className="card-text">(555) 555-4321</p>
            </div>
          </div>
        </div>
      </div>
    </div> */}

{/* <div className="container">
      <div className="card mx-auto mt-5" style={{ maxWidth: '20rem' }}>
        <img
          src="https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          className="card-img-top"
          alt="Property"
        />
        <div className="card-body">
          <h5 className="card-title">Detached House • 5y old</h5>
          <p className="card-text">$750,000</p>
          <p className="card-text">742 Evergreen Terrace</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">3 Bedrooms</li>
          <li className="list-group-item">2 Bathrooms</li>
        </ul>
        <div className="card-body">
          <p className="card-text font-weight-bold">Realtor</p>
          <div className="d-flex align-items-center">
            <img
              src="https://images.unsplash.com/photo-1500522144261-ea64433bbe27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80"
              alt="Realtor"
              className="rounded-circle mr-3"
              style={{ width: '40px', height: '40px' }}
            />
            <div>
              <p className="card-text font-weight-bold">Tiffany Heffner</p>
              <p className="card-text">(555) 555-4321</p>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    </>
  )
}

export default Accomodation
