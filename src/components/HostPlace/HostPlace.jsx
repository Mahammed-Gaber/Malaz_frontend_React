import { useState } from "react";
import { useLocation } from "react-router-dom";
import Yourplace from "./Your-place1/Yourplace";
import Structure from "./structure 2/Structure";
import PrivacyType from "./Privacy-type 3/Privacytype";
import Floorplan from "./Floor-plan 4/Floorplan";
import Instantbook from "./instant-book 5/Instantbook";
import Price from "./placeImages/PlaceImages";
import Congratulations from "./Congratulations 7/Congratulations";
import { useDispatch, useSelector } from "react-redux";
import MoreInfo from "./MoreInfo/MoreInfo";
import { createPlace } from "../../Redux/slices/placeSlice";
import PlaceImages from "./placeImages/PlaceImages";

function HostPlace() {

  const [form, setForm] = useState({
    place_name: '' ,
    description: '',
    neighborhood_overview: '',
    location: '' ,
    property_type: '' ,
    place_type: '' ,
    room_type: '' ,
    accommodates: '' ,
    bedrooms: '' ,
    beds: '' ,
    amenities: [] ,
    price: '' ,
    has_availability: '' ,
    license: '' ,
    instant_bookable: Boolean ,
    startDates: '',
    endDates : '' ,
    pictures_url : [],
    imageCover : []
  });

const dispatch = useDispatch();

  const [page, setPage] = useState(0);

  // const role = useSelector(state => state.authReducer.roleUser);

  const pageDisplay = () => {
    if (page === 0) {
      return <Yourplace />;
    } else if (page === 1) {
      // have properity type
      return <Structure formData={form} setForm={setForm}/>;
    } else if (page === 2) {
      // have room_type
      return <PrivacyType formData={form} setForm={setForm} />;
    } else if (page === 3) {
      return <MoreInfo formData={form} setForm={setForm} />;
    } else if (page === 4) {
      return <Floorplan formData={form} setForm={setForm} />;
    } else if (page === 5) {
      return <PlaceImages form={form} setForm={setForm} />;
    } else if (page === 6) {
      return <Instantbook formData={form} setForm={setForm} />;
    // } 
    //else if (page === 6) {
      // return <Price formData={form} setForm={setForm} />;
      //return <Price formData={form} setForm={setForm} />;
    // } else if (page === 6) {
    //   return <Congratulations formData={form} setForm={setForm} />;
    }
  };

const createYourPlace= () => {
  // const formData = new FormData()
  dispatch(createPlace(form))
  console.log(form);
}


  return (
    <div className="container" style={{ height: "85vh" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "75vh",
          padding: '1vw',
          gap : '20px',
          alignContent: 'center',
        }}
      >
        <video
          className="hero__video"
          autoPlay
          loop
          muted
          crossOrigin="anonymous"
          playsInline
          preload="auto"
          style={{ objectFit: "cover", width: "30vw", borderRadius: '10px' }}
        >
          <source src="https://stream.media.muscache.com/KeNKUpa01dRaT5g00SSBV95FqXYkqf01DJdzn01F1aT00vCI.mp4?v_q=high" />
        </video>

        {pageDisplay()}
      </div>

      <div className="button" style={{ marginTop: '20px'}}>
        <button
          disabled={page === 0}
          className="btn theme_btn button_hover"
          onClick={() => {
            setPage((currentPage) => currentPage - 1);
          }}
        >
          prev
        </button>
        <button
          // disabled={page === 5}
          
          className="btn theme_btn button_hover "
          onClick={() => {
            if (page ===6) {
              createYourPlace(form);
            }else
            setPage((currentPage) => currentPage + 1);
          }}
        >
          {page == 6 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default HostPlace;
