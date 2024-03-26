import './Accomodation.css'
import { useNavigate } from 'react-router-dom'
// import axios from 'axios'
import { useEffect, useState } from 'react'

// Use axios from modefided file
import axios from '../../../axios/instance'

function Accomodation () {
  const navigate =useNavigate()

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
                  <div key={place._id} className='col-lg-3 col-sm-6'>
                    <div className='accomodation_item text-center'>
                      <div className='hotel_img'>
                        <img src={place.imageCover} alt='' />
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
    </>
  )
}

export default Accomodation
