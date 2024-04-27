import "./Accomodation.css";
import { useNavigate } from "react-router-dom";
// import axios from 'axios'
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

// Use axios from modefided file
// import Catogerybar from '../catogery/Catogerybar'
import { useDispatch, useSelector } from "react-redux";
import { getPlace } from "../../../Redux/slices/placeSlice";

function Accomodation() {
  const navigate = useNavigate();

  // let [places, setPlaces] = useState([])

  const dispatch = useDispatch();
  // useSelector it use when u want to suppscribe in any service
  const places = useSelector((state) => state.placeReducer.places);
  const flag = useSelector((state) => state.placeReducer.loading);

  useEffect(() => {
    // here you can add .then for get more information
    dispatch(getPlace());
  }, [dispatch]);

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <>
      {flag ? (
        <div className="loader"> loader</div>
      ) : (
        <section className="accomodation_area section_gap">
          <div className="container">
            <div className="row mb_30">
              {places.map((place) => {
                return (
                  <>
                    <div key={place._id} className="col-lg-3 col-sm-6">
                      <div className='accomodation_item text-center'>
                      <div className='hotel_img'>
                        <img src={`http://localhost:3000/images/${place.imageCover}`} alt=''/>
                        <button className='btn theme_btn button_hover'onClick={()=>navigate(`/Accomodation/Mydeatails/${place._id}`, {state : place})}>
                          Deatails
                        </button>
                      </div>
                      <a href='#'>
                        <h4 className='sec_h4'>{place.place_name}</h4>
                      </a>

                      {[...Array(5)].map((star, index)=> {
                        return (
                          <label htmlFor="" key={index}>
                            <FaStar className='star' color='#ffc107'/>
                          </label>
                        )
                      })}

                      <h5>
                        $ {place.price}
                      </h5>
                    </div>
                      {/* <div className="card" >
                        <img src={place.imageCover} alt="" />
                        <div className="card-body" style={{border: '2px solid red'}}>
                          <h5 className="">
                            {place.place_name}
                          </h5>
                          <p className="card-text">1 Day - Marseille</p>
                          <p className="card-text">Cultural & Foods</p>
                          <p className="card-text">
                            <span className="rating">
                              ⭐⭐⭐⭐⭐ (3,135 reviews)
                            </span>
                          </p>
                          <p className="card-text">
                            <span className="price discounted">$65.80</span>
                            <span className="original-price">$79.80</span>
                          </p>
                          <a href="#" className="btn btn-primary">
                            Book Now
                          </a>
                          <button className="btn btn-outline-secondary">
                            <i className="far fa-heart"></i>
                          </button>
                        </div>
                      </div> */}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

export default Accomodation;
