import './blog.css'
import mo from'./../../../assets/image/gallery/03.jpg'
import mont from'./../../../assets/image/gallery/01.jpg'
import montun from'./../../../assets/image/gallery/05.jpg'


function Blog() {
  return (
    <>
    {/* <!--================ Latest Blog Area  =================--> */}
        <section className="latest_blog_area section_gap">
            <div className="container">
                <div className="section_title text-center">
                    <h2 className="title_color">latest posts from blog</h2>
                    <p>The French Revolution constituted for the conscience of the dominant aristocratic className a fall from </p>
                </div>
                <div className="row mb_30">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-recent-blog-post">
                            <div className="thumb">
                                <img className="img-fluid" src={mo} alt="post"/>
                            </div>
                            <div className="details">
                                <div className="tags">
                                    <a href="#" className="button_hover tag_btn">Travel</a>
                                    <a href="#" className="button_hover tag_btn">Life Style</a>
                                </div>
                                <a href="#"><h4 className="sec_h4">Low Cost Advertising</h4></a>
                                <p>Acres of Diamonds… you have read the famous story, or at least had it related to you. A farmer.</p>
                                <h6 className="date title_color">31st January,2018</h6>
                            </div>	
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-recent-blog-post">
                            <div className="thumb">
                                <img className="img-fluid" src={mont} alt="post"/>
                            </div>
                            <div className="details">
                                <div className="tags">
                                    <a href="#" className="button_hover tag_btn">Travel</a>
                                    <a href="#" className="button_hover tag_btn">Life Style</a>
                                </div>
                                <a href="#"><h4 className="sec_h4">Creative Outdoor Ads</h4></a>
                                <p>Self-doubt and fear interfere with our ability to achieve or set goals. Self-doubt and fear are</p>
                                <h6 className="date title_color">31st January,2018</h6>
                            </div>	
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="single-recent-blog-post">
                            <div className="thumb">
                                <img className="img-fluid" src={montun} alt="post"/>
                            </div>
                            <div className="details">
                                <div className="tags">
                                    <a href="#" className="button_hover tag_btn">Travel</a>
                                    <a href="#" className="button_hover tag_btn">Life Style</a>
                                </div>
                                <a href="#"><h4 className="sec_h4">It S Classified How To Utilize Free</h4></a>
                                <p>Why do you want to motivate yourself? Actually, just answering that question fully can </p>
                                <h6 className="date title_color">31st January,2018</h6>
                            </div>	
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--================ Recent Area  =================--> */}
    </>
  )
}

export default Blog