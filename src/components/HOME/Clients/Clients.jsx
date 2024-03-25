import './Clients.css'
import photo1 from './../../../assets/image/blog/clint/c1.jpg'
import photo2 from './../../../assets/image/blog/clint/c2.jpg'
import photo3 from './../../../assets/image/blog/clint/c3.jpg'
import photo4 from './../../../assets/image/blog/clint/c4.jpg'


function Clients() {
  return (
    <>
     {/* <!--================ Testimonial Area  =================--> */}
        <section className="testimonial_area section_gap">
            <div className="container">
                <div className="section_title text-center">
                    <h2 className="title_color">Testimonial from our Clients</h2>
                    <p> jone from amirca 'Booking [malaze] through [malaze] was an easy and smooth experience. I found the best prices and excellent customer service </p>
                </div>
                <div className="testimonial_slider owl-carousel">
                    <div className="media testimonial_item">
                        <img className="rounded-circle" src={photo1} alt=""/>
                        <div className="media-body">
                            <p> jone from amirca 'Booking [malaze] through [malaze] was an easy and smooth experience. I found the best prices and excellent customer service </p>
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
                        <p> jone from amirca 'Booking [malaze] through [malaze] was an easy and smooth experience. I found the best prices and excellent customer service </p>
                            <a href="#"><h4 className="sec_h4">Sally Spencer</h4></a>
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
                        <p> jone from amirca 'Booking [malaze] through [malaze] was an easy and smooth experience. I found the best prices and excellent customer service </p>
                            <a href="#"><h4 className="sec_h4">Tom Spencer</h4></a>
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
                        <p> jone from amirca 'Booking [malaze] through [malaze] was an easy and smooth experience. I found the best prices and excellent customer service </p>
                            <a href="#"><h4 className="sec_h4">joee Spencer</h4></a>
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

export default Clients