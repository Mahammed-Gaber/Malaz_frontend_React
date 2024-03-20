import './About.css'
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
                                <p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct standards especially in the workplace. That’s why it’s crucial that, as women, our behavior on the job is beyond reproach. inappropriate behavior is often laughed.</p>
                                <a className="button_hover theme_btn_two">Request Custom Price</a>
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