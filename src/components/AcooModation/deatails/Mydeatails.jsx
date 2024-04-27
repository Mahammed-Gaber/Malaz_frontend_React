import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './Mydeatails.css'
import { useLocation } from 'react-router-dom'


function Mydeatails () {

  const carsuelRef = useRef()
  const [width, setWidth] = useState(0)
  const loc = useLocation()
  const data = loc.state
  console.log(data);


  useEffect(() => {
    setWidth(carsuelRef.current.scrollWidth - carsuelRef.current.offsetWidth)
  }, [])

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
          style={{border: '2px solid red', width: '90vw'}}
        >
          {data.pictures_url.map((img, index) => (
            <motion.div className='' key={index} style={{width: '85vh', height: '25vw'}}>
              {/* const img = 'image.jpg'; */}
              <img src={`http://localhost:3000/images/${img}`} alt='img :(' style={{width: '250px', height: '200px'}}/>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <img src={`http://localhost:3000/images/${data.imageCover}`} alt='Hotel' className='item'/>


      <div>
        <p className='title'>{data.place_name}</p>
      </div>

      <div className='my-div' />

      <div>
        <p className='subtitle'>{data.description}</p>

        <div
          className='card-container d-flex '
          style={{ gap: '10px', marginTop: '100px', height: '220px' }}
        >
          <div className='offer-list '>
            <div className='offer-item d-flex'>
              <div className='icon'>
                <i
                  className='fa-solid fa-wifi '
                  style={{ fontSize: '30px' }}
                ></i>
              </div>
              <p className='desc'>Wifi</p>
            </div>

            <div className='offer-item d-flex' style={{ fontSize: '30px' }}>
              <div className='icon'>
                <i className='fa-solid fa-fan'></i>
              </div>
              <p className='desc' style={{ fontSize: '30px' }}>
                View of the courtyard
              </p>
            </div>

            <div className='offer-item d-flex' style={{ fontSize: '30px' }}>
              <div className='icon'>
                <i
                  className='fa-solid fa-tree d-flex'
                  style={{ fontSize: '30px' }}
                ></i>
              </div>
              <p className='desc'>Garden view</p>
            </div>

            <div className='offer-item d-flex' style={{ fontSize: '30px' }}>
              <div className='icon '>
                <i
                  className='fa-solid fa-water'
                  style={{ fontSize: '30px' }}
                ></i>
              </div>
              <p className='desc'>Sea front</p>
            </div>

            <div className='offer-item d-flex' style={{ fontSize: '30px' }}>
              <div className='icon'>
                <i
                  className='fa-solid fa-kitchen-set'
                  style={{ fontSize: '30px' }}
                ></i>
              </div>
              <p className='desc'>Kitchen</p>
            </div>

            <div className='offer-item d-flex'>
              <div className='icon'>
                <i
                  className='fa-solid fa-person-digging'
                  style={{ fontSize: '30px' }}
                ></i>
              </div>
              <p className='desc'>Dedicated workspace</p>
            </div>

            <div className='offer-item'>
              <div className='icon'>
                <i className='fa-solid fa-signs-post'></i>
              </div>
              <p className='desc'>Free parking in the buildings</p>
            </div>

            <div className='offer-item'>
              <div className='icon'>
                <i className='fa-solid fa-car'></i>
              </div>
              <p className='desc'>Backyard</p>
            </div>

            <div className='offer-item'>
              <div className='icon'>
                <i className='fa-solid fa-house'></i>
              </div>
              <p className='desc'>Indoor stove: wood fired</p>
            </div>
          </div>
        </div>
      </div>

      <section className='map'>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.9136717352703!2d32.85754712489673!3d23.998825379194184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1436893d605764c3%3A0xac9c8ab7cf39677a!2z2YXYudmH2K8g2KrZg9mG2YjZhNmI2KzZitinINin2YTZhdi52YTZiNmF2KfYqiAtINij2LPZiNin2YY!5e0!3m2!1sar!2seg!4v1708893329916!5m2!1sar!2seg'
          width='500'
          height='250'
          style={{ border: 0, borderRadius: '25px' }}
          allowFullScreen=''
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        />
      </section>

      <section className='hotel_booking_area'>
        <div className='container'>
          <div className='row hotel_booking_table'>
            <div className='col-md-3'>
              <h2>Book Your Room</h2>
            </div>
            <div className='col-md-9'>
              <div className='boking_table'>{/* Booking form content */}</div>
            </div>
          </div>
        </div>
      </section>


      <div className="container">
  <div className="row">
    <div className="col-md-6">
      <h2>Paris and famous places of the world capital</h2>
      <p className="rating">
        <span>⭐⭐⭐⭐⭐</span> (4,635 reviews)
      </p>
      <p>5 Days - 4 nights</p>
      <p>Paris, France</p>
      <button type="button" className="btn btn-primary">
        Add to wishlist
      </button>
    </div>
    <div className="col-md-6">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {data.pictures_url.map((img, index) => (
          <div className="carousel-item active" key={index}>
            <img
              
              src={img}
              className="d-block w-100"
              alt="Eiffel Tower"
            />
          </div>
          ))}
          {/* Add more images as needed */}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Mydeatails
// accommodates
// :
// 6
// amenities
// :
// ['Air conditioning,TV,Cable TV,Long term stays allowed,Heating,Elevator,Wifi,Washer,Kitchen,Pool,Dryer']
// bedrooms
// :
// 3
// beds
// :
// 4
// createdAt
// :
// "2024-03-19T22:50:00.413Z"
// description
// :
// "Se alquila un fantástico apartamento en una de las mejores zonas de Madrid. El piso consta de tres dormitorios dobles distribuidos en dos camas de matrimonio y en dos camas individuales.Hay dos baños.La cocina esta totalmente equipada con todo el menaje necesario para hacer la estancia lo mas cómoda y practica posible.El equipamiento consiste en lavadora,secadora,microondas.. El apartamento dispone de un gran salon totalmente independiente con tv ,sofá,butacas y una mesa de comedor con sillas. El piso se encuentra en un edificio moderno, en una tercera planta con ascensor, exterior y con porteria 24 horas. La casa cuenta con piscina de verano, internet, aire acondicionado,... aparcamiento opcional en el mismo edificio. gastos de preparacion del apartamento sabanas toallas,...20 € Gastos de limpieza del apartamento salida 30 € Opcionalmente dispone de aparcamiento en el edificio Opcionalmente se puede realizar transfer aero"
// has_availability
// :
// "t"
// host_id
// :
// null
// imageCover
// :
// "https://a0.muscache.com/im/pictures/d8d9966b-0e8d-4e08-be9e-02851ca1ca5d.jpg?im_w=1200"
// instant_bookable
// :
// "f"
// latitude
// :
// 40.25456
// license
// :
// ""
// location
// :
// ""
// longitude
// :
// -3.69505
// neighborhood_overview
// :
// "dispone de aparcamiento en el edificio Opcionalmente se puede realizar transfer aero"
// pictures_url
// :
// (3) ['1710888600412img4.jpeg', '1710888600412img3.jpeg', '1710888600412img2.webp']
// place_name
// :
// "Apartamento Arganzuela Planetari"
// price
// :
// 85
// property_type
// :
// ['Entire apartment']
// ratingsAverage
// :
// 4.5
// ratingsQuantity
// :
// 0
// room_type
// :
// "Entire home/apt"
// startDates
// :
// []
// _id
// :
// "66093633e87b01b89aeaf38a"
