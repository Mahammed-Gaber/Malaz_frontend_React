import './Accomodation.css'
import { useNavigate } from 'react-router-dom'
import { Link,Outlet  } from 'react-router-dom'
import Acco1 from './../../../assets/image/room/room1.jpg'
import Acco2 from './../../../assets/image/room/room2.jpg'
import Acco3 from './../../../assets/image/room/room3.jpg'
import Acco4 from './../../../assets/image/room/room4.jpg'
const arr = [
  {
    title: 'Double Deluxe Room',
    price: '250',
    desc: 'sdsd',
    cat: 'b1'
  },
  {
    title: 'Double Deluxe Room',
    price: '250',
    desc: 'sdsd',
    cat: 'b2'
  },
  {
    title: 'Double Deluxe Room',
    price: '250',
    desc: 'sdsd',
    cat: 'b3'
  },
  {
    title: 'Double Deluxe Room',
    price: '250',
    desc: 'sdsd',
    cat: 'b4'
  },
  {
    title: 'Double Deluxe Room',
    price: '250',
    desc: 'sdsd',
    cat: 'b1'
  },
  {
    title: 'Double Deluxe Room',
    price: '250',
    desc: 'sdsd',
    cat: 'b2'
  },
  {
    title: 'Double Deluxe Room',
    price: '250',
    desc: 'sdsd',
    cat: 'b3'
  },
  {
    title: 'Double Deluxe Room',
    price: '250',
    desc: 'sdsd',
    cat: 'b4'
  }
]
function Accomodation () {
  const navigate =useNavigate()
  console.log(arr)
  return (
    <>
      <section className='accomodation_area section_gap'>
        <div className='container'>
          {/* <div className="section_title text-center">
                    
                    <h2 className="title_color">Special Accomodation</h2>
                    <p>We all live in an age that belongs to the young at heart. Life that is becoming extremely fast,</p>
                </div> */}
          <div className='row mb_30'>
            {arr.map(i => {
              return (
                <>
                  <div key={Math.random()} className='col-lg-3 col-sm-6'>
                    <div className='accomodation_item text-center'>
                      <div className='hotel_img'>
                        <img src={Acco1} alt='' />
                        <button className='btn theme_btn button_hover'onClick={()=>navigate("/deatails")}>
                          Deatails
                        </button>
                        
                        {/* <Outlet/>
                         <link  className="btn theme_btn button_hover" to='/deatails'>Deatails</link>
                        */}
                        {/* /////////// */}
                        {/* <Link className='underline text-blue ' to={'/register'}>
                            Signup Now
                       </Link> */}
                        {/* /////////// */}
                      </div>
                      <a href='#'>
                        <h4 className='sec_h4'>{i.title}</h4>
                      </a>
                      <h5>
                        ${i.price}
                        <small>/{i.desc}</small>
                      </h5>
                    </div>
                  </div>
                </>
              )
            })}
            {/* <div className='col-lg-3 col-sm-6'>
              <div className='accomodation_item text-center'>
                <div className='hotel_img'>
                  <img src={Acco1} alt='' />
                  <a href='#' className='btn theme_btn button_hover'>
                    Book Now
                  </a>
                </div>
                <a href='#'>
                  <h4 className='sec_h4'>Double Deluxe Room</h4>
                </a>
                <h5>
                  $250<small>/night</small>
                </h5>
              </div>
            </div>
            <div className='col-lg-3 col-sm-6'>
              <div className='accomodation_item text-center'>
                <div className='hotel_img'>
                  <img src={Acco2} alt='' />
                  <a href='#' className='btn theme_btn button_hover'>
                    Book Now
                  </a>
                </div>
                <a href='#'>
                  <h4 className='sec_h4'>Single Deluxe Room</h4>
                </a>
                <h5>
                  $200<small>/night</small>
                </h5>
              </div>
            </div>
            <div className='col-lg-3 col-sm-6'>
              <div className='accomodation_item text-center'>
                <div className='hotel_img'>
                  <img src={Acco3} alt='' />
                  <a href='#' className='btn theme_btn button_hover'>
                    Book Now
                  </a>
                </div>
                <a href='#'>
                  <h4 className='sec_h4'>Honeymoon Suit</h4>
                </a>
                <h5>
                  $750<small>/night</small>
                </h5>
              </div>
            </div>
            <div className='col-lg-3 col-sm-6'>
              <div className='accomodation_item text-center'>
                <div className='hotel_img'>
                  <img src={Acco4} alt='' />
                  <a href='#' className='btn theme_btn button_hover'>
                    Book Now
                  </a>
                </div>
                <a href='#'>
                  <h4 className='sec_h4'>Economy Double</h4>
                </a>
                <h5>
                  $200<small>/night</small>
                </h5>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      {/* <!--================ Accomodation Area  =================--> */}
    </>
  )
}

export default Accomodation
