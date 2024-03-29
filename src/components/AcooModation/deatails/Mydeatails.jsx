///////////////////////////////////////
import { Link, useNavigate } from 'react-router-dom'

import De1 from './imges/hotel/1.jpg'
import De2 from './imges/hotel/2.jpg'
import De3 from './imges/hotel/3.jpg'
import De4 from './imges/hotel/12.avif'
import De5 from './imges/hotel/8.jpg'
import De6 from './imges/hotel/9.jpg'
import De7 from './imges/hotel/10.jpg'
import De8 from './imges/hotel/11.jpg'
import De9 from './imges/hotel/post1.jpg'
import De10 from './imges/hotel/post1.jpg'
import De11 from './imges/hotel/post1.jpg'
import De12 from './imges/hotel/post1.jpg'
import De13 from './imges/hotel/post1.jpg'
import De14 from './imges/hotel/post1.jpg'
import BookingArea from '../BookingTabl/BookingArea'
///////////////////////////////////

//=====================///////////////start deatails////////////////////===============================//

import { useRef, useEffect, useState } from 'react'
import React from 'react'
import './Mydeatails.css'
import { motion } from 'framer-motion'
import images from './images'
// import { Link } from 'react-router-dom'
function Mydeatails () {
  const carsuelRef = useRef()
  const [width, setwidth] = useState(0)
  useEffect(() => {
    setwidth(carsuelRef.current.scrollWidth - carsuelRef.current.offsetWidth)
    // console.log(carsuelRef.current.scrollWidth)
    // console.log(carsuelRef.current.offsetWidth)
  }, [])
  console.log(images)

  return (
    <>
      <motion.div
        ref={carsuelRef}
        className='carsuel'
        whileTap={{ cursor: 'grabbing' }}
      
      >
        <motion.div
          drag='x'
          dragConstraints={{ right: 0, left: -width }}
          className='inner-carsuel'
        >
          {images.map(img => (
            <motion.div className='item' key={img}>
              <img src={img} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      {/* ////////////////////////////////////// start dis */}
      <div>
        <p className='' style={{ color: 'white', fontSize: '1.5rem' }}>
          Entire villa in Pomos Cyprus
        </p>
       
      </div>
      <div className='my-div' />
      {/* ///////////////////////////// */}
      <div>
        <p
          className=''
          style={{ color: 'white', fontSize: '1.5rem', marginTop: '10px' }}
        >
          What this residence offers
        </p>


        <div
        className=''
        style={{ marginTop: '10px', height: '100px' }}>
        <div
          className='one d-flex '
          style={{ color: 'white', fontSize: '1.5rem', marginTop: '10px' }}
        > 
          <div className='icon'>
            <i
              class='fa-solid fa-wifi'
              style={{ color: 'white', fontSize: '1.5rem' }}
            ></i>
          </div>

          <div>
            <p
              className='disc'
              style={{ color: 'white', fontSize: '1.5rem', marginTop: '10px' }}
            >
                    Wifi         
             </p>
          </div>
        </div>
        <div
          className='tow d-flex '
          style={{ color: 'white', fontSize: '1.5rem', marginTop: '10px' }}
        >
          <div className='icon'>
            <i
              class='fa-solid fa-fan'
              style={{ color: 'white', fontSize: '1.5rem' }}
            ></i>
          </div>

          <div>
            <p
              className='disc'
              style={{ color: 'white', fontSize: '1.5rem', marginTop: '10px' }}
            >
View of the courtyard
            </p>
          </div>
        </div>
        <div
          className='one d-flex '
          style={{ color: 'white', fontSize: '1.5rem', marginTop: '10px' }}
        >
          <div className='icon'>
            <i
              class='fa-solid fa-tree'
              style={{ color: 'white', fontSize: '1.5rem' }}
            ></i>
          </div>

          <div>
            <p
              className='disc'
              style={{ color: 'white', fontSize: '1.5rem', marginTop: '10px' }}
            >
Garden view
            </p>
          </div>
        </div>
        <div
          className='one d-flex '
          style={{ color: 'white', fontSize: '1.5rem', marginTop: '10px' }}
        >
          <div className='icon'>
            <i
              class='fa-solid fa-water'
              style={{ color: 'white', fontSize: '1.5rem' }}
            ></i>
          </div>

          <div>
            <p
              className='disc'
              style={{ color: 'white', fontSize: '1.5rem', marginTop: '10px' }}
            >
Sea front
            </p>
          </div>
        </div>

        <div
          className='one d-flex '
          style={{ color: 'white', fontSize: '1.5rem', marginTop: '10px' }}
        >
          <div className='icon'>
            <i
              class='fa-solid fa-kitchen-set'
              style={{ color: 'white', fontSize: '1.5rem' }}
            ></i>
          </div>

          <div>
            <p
              className='disc'
              style={{ color: 'white', fontSize: '1.5rem', marginTop: '10px' }}
            >
kitchen
            </p>
          </div>
        </div>

        <div
          className='one d-flex '
          style={{ color: 'white', fontSize: '1.5rem', marginTop: '10px' }}
        >
          <div className='icon'>
            <i
              class='fa-solid fa-person-digging'
              style={{ color: 'white', fontSize: '1.5rem' }}
            ></i>
          </div>

          <div>
            <p
              className='disc'
              style={{ color: 'white', fontSize: '1.5rem', marginTop: '10px' }}
            >
Dedicated workspace
            </p>
          </div>
        </div>

        <div
          className='one d-flex '
          style={{ color: 'white', fontSize: '1.5rem', marginTop: '10px' }}
        >
          <div className='icon'>
            <i
              class='fa-solid fa-signs-post'
              style={{ color: 'white', fontSize: '1.5rem' }}
            ></i>
          </div>

          <div>
            <p
              className='disc'
              style={{ color: 'white', fontSize: '1.5rem', marginTop: '10px' }}
            >
Free parking in the buildings
            </p>
          </div>
        </div>

        <div
          className='one d-flex '
          style={{ color: 'white', fontSize: '1.5rem', marginTop: '10px' }}
        >
          <div className='icon'>
            <i
              class='fa-solid fa-car'
              style={{ color: 'white', fontSize: '1.5rem' }}
            ></i>
          </div>

          <div>
            <p
              className='disc'
              style={{ color: 'white', fontSize: '1.5rem', marginTop: '10px' }}
            >
 Backyard
            </p>
          </div>
        </div>

        <div
          className='one d-flex '
          style={{ color: 'white', fontSize: '1.5rem', marginTop: '10px' }}
        >
          <div className='icon'>
            <i
              class='fa-solid fa-house'
              style={{ color: 'white', fontSize: '1.5rem' }}
            ></i>
          </div>

          <div>
            <p
              className='disc'
              style={{ color: 'white', fontSize: '1.5rem', marginTop: '10px' }}
            >
Indoor stove: wood fired
            </p>
          </div>
        </div>
      </div>
      <section className="map ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.9136717352703!2d32.85754712489673!3d23.998825379194184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1436893d605764c3%3A0xac9c8ab7cf39677a!2z2YXYudmH2K8g2KrZg9mG2YjZhNmI2KzZitinINin2YTZhdi52YTZiNmF2KfYqiAtINij2LPZiNin2YY!5e0!3m2!1sar!2seg!4v1708893329916!5m2!1sar!2seg"
          width={1000}
          height={450}
          style={{ border: 0,  borderRadius:'25px'}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
      </div>




      {/* ////////////////////////////////start BookingTabl//////////// */}
      <section className="hotel_booking_area">
    <div className="container">
      <div className="row hotel_booking_table">
        <div className="col-md-3">
          <h2>
            Book
            <br /> Your Room
          </h2>
        </div>
        <div className="col-md-9">
          <div className="boking_table">
            <div className="row">
              <div className="col-md-4">
                <div className="book_tabel_item">
                  <div className="form-group">
                    <div className="input-group date" id="datetimepicker11">
                      <input
                        type="date"
                        className="form-control"
                        placeholder="Arrival Date"
                      />
                      <span className="input-group-addon">
                        {/* <i className="fa fa-calendar" aria-hidden="true" /> */}
                      </span>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="input-group date" id="datetimepicker1">
                      <input
                        type="date"
                        className="form-control"
                        placeholder="Departure Date"
                      />
                      <span className="input-group-addon">
                      {/* <label htmlFor="arrivalDate">Arrival Date</label> */}

                        {/* <i className="fa fa-calendar" aria-hidden="true" /> */}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="book_tabel_item">
                  <div className="input-group">
                    <select className="wide">
                      <option data-display="Adult">Adult</option>
                      <option value={1}>Old</option>
                      <option value={2}>Younger</option>
                      <option value={3}>Potato</option>
                    </select>
                  </div>
                  <div className="input-group">
                    <select className="wide">
                      <option data-display="Child">Child</option>
                      <option value={1}>Child</option>
                      <option value={2}>Baby</option>
                      <option value={3}>Child</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="book_tabel_item">
                  <div className="input-group">
                    <select className="wide">
                      <option data-display="Child">Number of Rooms</option>
                      <option value={1}>Room 01</option>
                      <option value={2}>Room 02</option>
                      <option value={3}>Room 03</option>
                    </select>
                  </div>
                  <a className="book_now_btn button_hover" onClick={()=>Navigate('/profile')}>
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
      {/* ////////////////////////////////end BookingTabl//////////// */}
 
    
    </>
  )
}

export default Mydeatails
