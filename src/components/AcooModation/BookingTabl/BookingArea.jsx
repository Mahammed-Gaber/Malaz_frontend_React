import { Link, useNavigate } from "react-router-dom";
import "./BookingArea.css";
import axios from "../../../axios/instance";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { useForm } from "react-hook-form";

function BookingArea({ data }) {

  const [calcDayes, setCalcDayes] = useState([]);
  const [beds, setBeds] = useState(undefined);
  const [guests, setGuests] = useState(undefined);

  const date1 = new Date(calcDayes[0]);
  const date2 = new Date(calcDayes[1]);
  let Difference_In_Time = date2.getTime() - date1.getTime();
  // Calculating the no. of days between two dates
  let Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));

  const callStripe = async () => {
    const stripe = await loadStripe(
      "pk_test_51P9r05I9g5fDVTZgOY5Ys4kCCV8lv9mYpWwUBUEcgi11oVGYEqPkJdMK4pwUnlK9qocV9ZXSPRsfWgne991jNDqR00h6LP7zwT"
    );
    console.log(stripe);

    try {
      const response = await axios.get(`/booking/checkout-session/${data._id}`);
      console.log(response);

      const sessionId = response.data.id;

      const result = await stripe.redirectToCheckout({
        sessionId: sessionId
      });
      console.log(sessionId);
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="model">
        {/* <div className="room" style={{ background: 'url(https://images.unsplash.com/photo-1470274038469-958113db2384?auto=format&fit=crop&w=1875&q=80) no-repeat center center'}}> */}
        <div className="text-cover">
          <h1>{data.place_name}</h1>
          <p className="price">
            {" "}
            {data.price} <span>USD</span> / Night
          </p>
          <hr />

          {guests ? (
            <p>Entire Home for {guests} guest</p>
          ) : (
            <p>Add number of guests</p>
          )}

          {beds ? <p>{beds} Beds</p> : <p>Number of beds</p>}

          {calcDayes[0] ? (
            <p>
              {date1.toDateString()} to {date2.toDateString()}
            </p>
          ) : (
            <p>Date for your Reservation</p>
          )}

          {calcDayes[1] && <p>Total Days {Difference_In_Days}</p>}
          {calcDayes[1] && 
          <>
          <hr />
            <p>{data.price} x {Difference_In_Days} nights</p>
            <p>Total Price {data.price * Difference_In_Days} <span>USD</span></p>
          </>
            }

        </div>
        {/* </div> */}

        <div className="payment">
          <div className="payment-info">
            <h3>Reservation Info</h3>
            {/* <div className="row"> */}
            <div className="row d-flex align-items-center">
              <div className="col-3">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Beds"
                    required
                    // value={formData.beds}
                    onChange={(event) => setBeds([event.target.value])}
                  />
                  {/* {formData.beds && <p style={{color: 'white'}}>{formData.beds} beds</p>} */}
                </div>
              </div>
              <div className="col-5">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="number"
                    placeholder="Num of Guests"
                    required
                    // value={formData.beds}
                    onChange={(event) => setGuests([event.target.value])}
                  />
                  {/* {formData.beds && <p style={{color: 'white'}}>{formData.beds} beds</p>} */}
                </div>
              </div>

              <div className="col-5">
                <label className="fs-5">From</label>
                <input
                  className="form-control"
                  type="date"
                  name="startDateFrom"
                  placeholder="From"
                  required
                  // value={formData.startDates}
                  onChange={(event) => setCalcDayes([event.target.value])}
                />
              </div>
              <div className="col-5">
                <label className="fs-5">To</label>
                <input
                  className="form-control"
                  type="date"
                  name="startDateTo"
                  placeholder="To"
                  required
                  // value={formData.endDates}
                  onChange={(event) =>
                    setCalcDayes([...calcDayes, event.target.value])
                  }
                />
              </div>
            </div>
            <input
              style={{ backgroundColor: "#f3c300" }}
              className="btn"
              type="btn"
              value='Book Now'
              onClick={callStripe}
            />
          </div>
          {/* </div> */}
        </div>
      </div>

      <>
        {/* <section className="hotel_booking_area">
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
                          <div
                            className="input-group date"
                            id="datetimepicker11"
                          >
                            <input
                              type="date"
                              className="form-control"
                              placeholder="Arrival Date"
                            />
                            <span className="input-group-addon">
                              <i
                                className="fa fa-calendar"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                        </div>
                        <div className="form-group">
                          <div
                            className="input-group date"
                            id="datetimepicker1"
                          >
                            <input
                              type="date"
                              className="form-control"
                              placeholder="Departure Date"
                            />
                            <span className="input-group-addon">
                              <label htmlFor="arrivalDate">Arrival Date</label>

                              <i
                                className="fa fa-calendar"
                                aria-hidden="true"
                              />
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
                            <option data-display="Child">
                              Number of Rooms
                            </option>
                            <option value={1}>Room 01</option>
                            <option value={2}>Room 02</option>
                            <option value={3}>Room 03</option>
                          </select>
                        </div>
                        <button
                          className="book_now_btn button_hover"
                          onClick={callStripe}
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/*================Booking Tabel Area  =================*/}
      </>
    </>
  );
}

export default BookingArea;
