import './Mainsection.css'
import { Link } from "react-router-dom";

function Mainsection () {
  return (
    <>
      {/* <!--================Banner Area =================--> */}
      <section className='banner_area'>
        <div className='booking_table d_flex align-items-center'>
          <div
            className='overlay bg-parallax'
            data-stellar-ratio='0.9'
            data-stellar-vertical-offset='0'
            data-background=''
          ></div>
          <div className='container'>
            <div className='banner_content text-center'>
              
              <h6>Explore Your Next Adventure: Book Your Dream Hotel Today</h6>
              <h2>Your Dream Vacation Starts Here</h2>
              <p>
                
                Pamper Yourself: Indulge in an Unforgettable Luxury Hotel
                Experience
              </p>
              <Link to='Accomodation' className='btn theme_btn button_hover'>
                Get Started
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="hotel_booking_area position">
                <div className="container">
                    <div className="hotel_booking_table">
                        <div className="col-md-3">
                            <h2>Book<br/> Your Room</h2>
                        </div>
                        <div className="col-md-9">
                            <div className="boking_table">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="book_tabel_item">
                                            <div className="form-group">
                                                <div className='input-group date' id='datetimepicker11'>
                                                    <input type='text' className="form-control" placeholder="Arrival Date"/>
                                                    <span className="input-group-addon">
                                                        <i className="fa fa-calendar" aria-hidden="true"></i>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className='input-group date' id='datetimepicker1'>
                                                    <input type='text' className="form-control" placeholder="Departure Date"/>
                                                    <span className="input-group-addon">
                                                        <i className="fa fa-calendar" aria-hidden="true"></i>
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
                                                    <option value="1">Old</option>
                                                    <option value="2">Younger</option>
                                                    <option value="3">Potato</option>
                                                </select>
                                            </div>
                                            <div className="input-group">
                                                <select className="wide">
                                                    <option data-display="Child">Child</option>
                                                    <option value="1">Child</option>
                                                    <option value="2">Baby</option>
                                                    <option value="3">Child</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="book_tabel_item">
                                            <div className="input-group">
                                                <select className="wide">
                                                    <option data-display="Child">Number of Rooms</option>
                                                    <option value="1">Room 01</option>
                                                    <option value="2">Room 02</option>
                                                    <option value="3">Room 03</option>
                                                </select>
                                            </div>
                                            <a className="book_now_btn button_hover" href="#">Book Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
      </section>
      {/* <!--================Banner Area =================--> */}
    </>
  )
}

export default Mainsection
