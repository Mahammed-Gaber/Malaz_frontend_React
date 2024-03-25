import './About.css'
import { Link } from "react-router-dom";

import imgb from './../../../assets/image/about/about_bg.jpg'


function AboutUs() {
    return (
        <>
            {/* <!--================ About History Area  =================--> */}
            <section className="about_history_area section_gap">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 d_flex align-items-center">
                            <div className="about_content ">
                                <h2 className="title title_color">About Us <br />Our History<br />Mission & Vision</h2>
                                <p> Since our inception, we've been driven by our passion for travel and the desire to share this experience with the world.
We strive to provide an exceptional hotel booking experience that meets your needs and exceeds your expectations.
Our team is comprised of enthusiastic travel experts with extensive skills and a deep understanding of travelers' needs.
We believe in the importance of technology and strive to integrate it with personalized service to create a seamless and enjoyable experience.
Our goal is to be your travel companion.</p>
                                <Link to='Blog' className="button_hover theme_btn_two">Explore who we are</Link>
                                
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img className="img-fluid" src={imgb} alt="img" />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--================ About History Area  =================--> */}
        </>
    )
}

export default AboutUs