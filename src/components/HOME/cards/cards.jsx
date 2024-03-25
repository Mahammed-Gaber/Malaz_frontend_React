import './cards.css'
import { Link } from "react-router-dom";

import rom1 from'./../../../assets/image/room/room1.jpg'
import rom2 from'./../../../assets/image/room/room2.jpg'
import rom3 from'./../../../assets/image/room/room3.jpg'
import rom4 from'./../../../assets/image/room/room4.jpg'


function Card() {
  return (
    <>
    
    {/* const nav = useNavigate();
    const dispatch = useDispatch();
    function go() {
        dispatch(addToFav(data));
        // nav(`/moviedet/${data.id}`, { state: data });
    } */}
{/* <!--================ Accomodation Area  =================--> */}
        <section className="accomodation_area section_gap">
            <div className="container">
                <div className="section_title text-center" >
                    <h2 className="title_color">Hotel Accomodation</h2>
                    <p>Your Dream Getaway Starts Here: Plan Your Perfect Trip with an Unforgettable Hotel Stay </p>
                </div>
                <div className="row mb_30">
                    <div className="col-lg-3 col-sm-6">
                        <div className="accomodation_item text-center">
                            <div className="hotel_img">
                                <img src={rom1} alt=""/>
                                <Link to="Accomodation" className="btn theme_btn button_hover">explore</Link>
                            </div>
                            <a href="#"><h4 className="sec_h4">Double Deluxe Room</h4></a>
                            <h5>$250<small>/night</small></h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="accomodation_item text-center">
                            <div className="hotel_img">
                                <img src={rom2} alt=""/>
                                <Link to="Accomodation" className="btn theme_btn button_hover">explore</Link>
                            </div>
                            <a href="#"><h4 className="sec_h4">Single Deluxe Room</h4></a>
                            <h5>$200<small>/night</small></h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="accomodation_item text-center">
                            <div className="hotel_img">
                                <img src={rom3} alt=""/>
                                <Link to="Accomodation" className="btn theme_btn button_hover">explore</Link>
                            </div>
                            <a href="#"><h4 className="sec_h4">Honeymoon Suit</h4></a>
                            <h5>$750<small>/night</small></h5>
                        </div>
                    </div>
                    <div className="col-lg-3 col-sm-6">
                        <div className="accomodation_item text-center">
                            <div className="hotel_img">
                                <img src={rom4} />
                                <Link to="Accomodation" className="btn theme_btn button_hover">explore</Link>
                            </div>
                            <a href="#"><h4 className="sec_h4">Economy Double</h4></a>
                            <h5>$200<small>/night</small></h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--================ Accomodation Area  =================--> */}
        

    </>
  )
}

export default Card
/////////////////////////////////////////
// function Card({ data }) {


//     return (
//         <div className="card" style={{ width: "18rem" }}>
           
//             <div className="card-body">
//                 <h5 className="card-title">{data.name}</h5>
//                 <p className="card-text">
//                     Some quick example text to build on the card title and make up the bulk of
//                     the card's content.
//                 </p>
//                 <a href="#" className="btn btn-primary" style={{ backgroundColor: data.color }}>
//                     {data.age}
//                 </a>
//             </div>
//         </div>
//     )
// }

// // export default Card