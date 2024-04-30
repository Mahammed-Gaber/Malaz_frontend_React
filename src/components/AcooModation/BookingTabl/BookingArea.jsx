import { Link, useNavigate } from 'react-router-dom'
import './BookingArea.css'
import axios from '../../../axios/instance'

function BookingArea({data}) {
  const Navigate = useNavigate()

const callStripe = async ()=> {
  // const getRole = localStorage.getItem('role');
      try {
          let response = await axios.get(`/booking/checkout-session/${data}`)
          window.open(response.data.session.url);
          return response.data
      } catch (error) {
          return error.response
      }
}


  return (
    <>
     <>
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
                  <button className="book_now_btn button_hover" onClick={callStripe}>
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*================Booking Tabel Area  =================*/}
</>

    </>
  )
}

export default BookingArea