import React from 'react'
import pro from '../../../assets/image/room/room2.jpg'
import './Profilehost.css'
function Profilehost() {
  return (

    <>
  <section className="hero">
    <img src={pro} alt="Cabin Photo" />
  </section>
  <section className="details">
    <h2>Cozy Cabin by the Lake</h2>
    <p>Entire cabin hosted by John</p>
    <div className="amenities">
      <span>Guests: 4</span>
      <span>Bedrooms: 2</span>
      <span>Bathrooms: 1</span>
    </div>
    <p className="description">
    Bright City Apartment with Beautiful Balcony
    Stunning Views Await at our Cozy Country Cabin
    Spacious Family Home Perfect for Large Groups
    </p>
    <div className="availability">
      <h3>Availability</h3>
      <p>
        Available: <span>Nov 15 - Nov 20</span>
      </p>
    </div>
    <div className="pricing">
      <h3>
        Price: $<span>100</span> per night
      </h3>
    </div>
  </section>


    
    </>
  )
}

export default Profilehost