import './blog.css'
import mo from './../../../assets/image/gallery/03.jpg'
import mont from './../../../assets/image/gallery/01.jpg'
import montun from './../../../assets/image/gallery/05.jpg'

function Blog () {
  return (
    <>
      {/* <!--================ Latest Blog Area  =================--> */}
      <section className='latest_blog_area section_gap'>
        <div className='container'>
          <div className='section_title text-center'>
            <h2 className='title_color'>Latest posts from our blog</h2>
            <p>
              Travel Tips and Recommendations: Plan Your Perfect Trip with Our
              Blog ,Latest Travel News: Stay Updated on the Newest Trends{' '}
            </p>
          </div>
          <div className='row mb_30'>
            <div className='col-lg-4 col-md-6'>
              <div className='single-recent-blog-post'>
                <div className='thumb'>
                  <img className='img-fluid' src={mo} alt='post' />
                </div>
                <div className='details'>
                  <div className='tags'>
                    <a href='#' className='button_hover tag_btn'>
                      Travel
                    </a>
                    <a href='#' className='button_hover tag_btn'>
                      Life Style
                    </a>
                  </div>
                  <a href='#'>
                    <h4 className='sec_h4'>
                      A brief summary of the blog posts content
                    </h4>
                  </a>
                  <p>
                    Top 5 Travel Destinations for 2024. Tips for Saving Money on
                    Your Next Trip. 5 Important Things to Consider When Booking
                    a Hotel. Travel Guide to [Canda]. Review of the Best
                    Hotels in [malaze].
                  </p>
                  <h6 className='date title_color'>31st January,2018</h6>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-recent-blog-post'>
                <div className='thumb'>
                  <img className='img-fluid' src={mont} alt='post' />
                </div>
                <div className='details'>
                  <div className='tags'>
                    <a href='#' className='button_hover tag_btn'>
                      Travel
                    </a>
                    <a href='#' className='button_hover tag_btn'>
                      Life Style
                    </a>
                  </div>
                  <a href='#'>
                    <h4 className='sec_h4'>
                      Mention the key points covered in the article
                    </h4>
                  </a>
                  <p>
                    Top 5 Travel Destinations for 2024. Tips for Saving Money on
                    Your Next Trip. 5 Important Things to Consider When Booking
                    a Hotel. Travel Guide to [china]. Review of the Best
                    Hotels in [malaze].
                  </p>
                  <h6 className='date title_color'>31st January,2018</h6>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='single-recent-blog-post'>
                <div className='thumb'>
                  <img className='img-fluid' src={montun} alt='post' />
                </div>
                <div className='details'>
                  <div className='tags'>
                    <a href='#' className='button_hover tag_btn'>
                      Travel
                    </a>
                    <a href='#' className='button_hover tag_btn'>
                      Life Style
                    </a>
                  </div>
                  <a href='#'>
                    <h4 className='sec_h4'>
                      A call to action to encourage readers to read more
                    </h4>
                  </a>
                  <p>
                    Top 5 Travel Destinations for 2024. Tips for Saving Money on
                    Your Next Trip. 5 Important Things to Consider When Booking
                    a Hotel. Travel Guide to london. Review of the Best
                    Hotels in [malaze].{' '}
                  </p>
                  <h6 className='date title_color'>31st January,2018</h6>
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
