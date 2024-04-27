import './TestimonialArea.css'
import photo1 from './../../../assets/image/testemonail/testtimonial-1.jpg'
import photo2 from './../../../assets/image/testemonail/testtimonial-1.jpg'
import photo3 from './../../../assets/image/testemonail/testtimonial-1.jpg'
import photo4 from './../../../assets/image/testemonail/testtimonial-1.jpg'


function TestimonialArea() {
  return (
    <>
     {/* <!--================ Testimonial Area  =================--> */}
        <section className="testimonial_area section_gap">
            <div className="container">
                <div className="section_title text-center">
                    <h2 className="title_color">Testimonial from our Clients</h2>
                    <p>The French Revolution constituted for the conscience of the dominant aristocratic className a fall from </p>
                </div>
                <div className="testimonial_slider owl-carousel">
                    <div className="media testimonial_item">
                        <img className="rounded-circle" src={photo1} alt=""/>
                        <div className="media-body">
                            <p>As conscious traveling Paupers we must always be concerned about our dear Mother Earth. If you think about it, you travel across her face, and She is the </p>
                            <a href="#"><h4 className="sec_h4">Fanny Spencer</h4></a>
                            <div className="star">
                                <a href="#"><i className="fa fa-star"></i></a>
                                <a href="#"><i className="fa fa-star"></i></a>
                                <a href="#"><i className="fa fa-star"></i></a>
                                <a href="#"><i className="fa fa-star"></i></a>
                                <a href="#"><i className="fa fa-star-half-o"></i></a>
                            </div>
                        </div>
                    </div>    
                    <div className="media testimonial_item">
                        <img className="rounded-circle" src={photo2} alt=""/>
                        <div className="media-body">
                            <p>As conscious traveling Paupers we must always be concerned about our dear Mother Earth. If you think about it, you travel across her face, and She is the </p>
                            <a href="#"><h4 className="sec_h4">Fanny Spencer</h4></a>
                            <div className="star">
                                <a href="#"><i className="fa fa-star"></i></a>
                                <a href="#"><i className="fa fa-star"></i></a>
                                <a href="#"><i className="fa fa-star"></i></a>
                                <a href="#"><i className="fa fa-star"></i></a>
                                <a href="#"><i className="fa fa-star-half-o"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="media testimonial_item">
                        <img className="rounded-circle" src={photo3} alt=""/>
                        <div className="media-body">
                            <p>As conscious traveling Paupers we must always be concerned about our dear Mother Earth. If you think about it, you travel across her face, and She is the </p>
                            <a href="#"><h4 className="sec_h4">Fanny Spencer</h4></a>
                            <div className="star">
                                <a href="#"><i className="fa fa-star"></i></a>
                                <a href="#"><i className="fa fa-star"></i></a>
                                <a href="#"><i className="fa fa-star"></i></a>
                                <a href="#"><i className="fa fa-star"></i></a>
                                <a href="#"><i className="fa fa-star-half-o"></i></a>
                            </div>
                        </div>
                    </div>    
                    <div className="media testimonial_item">
                        <img className="rounded-circle" src={photo4} alt=""/>
                        <div className="media-body">
                            <p>As conscious traveling Paupers we must always be concerned about our dear Mother Earth. If you think about it, you travel across her face, and She is the </p>
                            <a href="#"><h4 className="sec_h4">Fanny Spencer</h4></a>
                            <div className="star">
                                <a href="#"><i className="fa fa-star"></i></a>
                                <a href="#"><i className="fa fa-star"></i></a>
                                <a href="#"><i className="fa fa-star"></i></a>
                                <a href="#"><i className="fa fa-star"></i></a>
                                <a href="#"><i className="fa fa-star-half-o"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--================ Testimonial Area  =================--> */}
        
    
    </>
  )
}

export default TestimonialArea