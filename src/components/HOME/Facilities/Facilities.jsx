import './Facilities.css'
// import Facilities from './Facilities';

function Facilities() {
  return (
    <>
     
     {/* <!--================ Facilities Area  =================--> */}
        <section className="facilities_area section_gap">
            <div className="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0" data-background="">  
            </div>
            <div className="container">
                <div className="section_title text-center">
                    <h2 className="title_w">Royal Facilities</h2>
                    <p>Who are in extremely love with eco friendly system.</p>
                </div>
                <div className="row mb_30">
                    <div className="col-lg-4 col-md-6">
                        <div className="facilities_item">
                            <h4 className="sec_h4"><i className="fa-solid fa-utensils"></i>Restaurant</h4>
                            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                            {/* <i className="fa-brands fa-apple"></i> */}
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="facilities_item">
                            <h4 className="sec_h4"><i className="fa-solid fa-bicycle"></i>Sports CLub</h4>
                            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="facilities_item">
                            <h4 className="sec_h4"><i className="fa-solid fa-person-swimming"></i>Swimming Pool</h4>
                            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="facilities_item">
                            <h4 className="sec_h4"><i className="fa-solid fa-car"></i>Rent a Car</h4>
                            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="facilities_item">
                            <h4 className="sec_h4"><i className="fa-solid fa-dumbbell"></i>Gymnesium</h4>
                            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="facilities_item">
                            <h4 className="sec_h4"><i className="fa-solid fa-martini-glass-empty"></i>Bar</h4>
                            <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--================ Facilities Area  =================--> */}
        
    </>
  )
}

export default Facilities