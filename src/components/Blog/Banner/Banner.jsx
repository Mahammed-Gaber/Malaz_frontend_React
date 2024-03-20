import './Banner.css'

function Banner() {
  return (
    <>
       
       {/* <!--================Banner Area =================--> */}
        <section className="banner_area blog_banner d_flex align-items-center">
            <div className="overlay bg-parallax" data-stellar-ratio="0.9" data-stellar-vertical-offset="0" data-background=""></div>
            <div className="container">
                <div className="banner_content text-center">
                    <h4>Dude You’re Getting <br />a Telescope</h4>
                    <p>There is a moment in the life of any aspiring astronomer that it is time to buy that first</p>
                    <a href="#" className="btn white_btn button_hover">View More</a>
                </div>
            </div>
        </section>
        {/* <!--================Banner Area =================--> */}
        
    </>
  )
}

export default Banner