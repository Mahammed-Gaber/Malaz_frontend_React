import './Contacts.css'
import { Link } from 'react-router-dom'

function Contacts () {
  return (
    <>
      {/* <!--================Breadcrumb Area =================--> */}
      <section className='breadcrumb_area'>
        <div
          className='overlay bg-parallax'
          data-stellar-ratio='0.8'
          data-stellar-vertical-offset='0'
          data-background=''
        ></div>
        <div className='container'>
          <div className='page-cover text-center'>
            <h2 className='page-cover-tittle'>Contact Us</h2>
            <ol className='breadcrumb'>
              <li>
                <Link to='home'>Home</Link>
              </li>
              {/* <i className='fa-solid fa-arrow-right'></i> */}
              <li className='active'>Contact Us</li>
            </ol>
          </div>
        </div>
      </section>
      {/* <!--================Breadcrumb Area =================--> */}

      {/* <!--================Contact Area =================--> */}
      <section className='contact_area section_gap'>
        <div className='container'>
        <section className="map ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.9136717352703!2d32.85754712489673!3d23.998825379194184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1436893d605764c3%3A0xac9c8ab7cf39677a!2z2YXYudmH2K8g2KrZg9mG2YjZhNmI2KzZitinINin2YTZhdi52YTZiNmF2KfYqiAtINij2LPZiNin2YY!5e0!3m2!1sar!2seg!4v1708893329916!5m2!1sar!2seg"
          width={1000}
          height={450}
          style={{ border: 0,  borderRadius:'25px'}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
          <div className='row'>
            <div className='col-md-3'>
              <div className='contact_info'>
                <div className='info_item'>
                  <i className='lnr lnr-home' />
                  <h6>California, United States</h6>
                  <p>Santa monica bullevard</p>
                </div>
                <div className='info_item'>
                  <i className='lnr lnr-phone-handset' />
                  <h6>
                    <a href='#'>00 (440) 9865 562</a>
                  </h6>
                  <p>Mon to Fri 9am to 6 pm</p>
                </div>
                <div className='info_item'>
                  <i className='lnr lnr-envelope' />
                  <h6>
                    <a href='#'>support@colorlib.com</a>
                  </h6>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
            <div className='col-md-9'>
              <form
                className='row contact_form'
                action='contact_process.php'
                method='post'
                id='contactForm'
                noValidate='novalidate'
              >
                <div className='col-md-6'>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control'
                      id='name'
                      name='name'
                      placeholder='Enter your name'
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='email'
                      className='form-control'
                      id='email'
                      name='email'
                      placeholder='Enter email address'
                    />
                  </div>
                  <div className='form-group'>
                    <input
                      type='text'
                      className='form-control'
                      id='subject'
                      name='subject'
                      placeholder='Enter Subject'
                    />
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <textarea
                      className='form-control'
                      name='message'
                      id='message'
                      rows={1}
                      placeholder='Enter Message'
                      defaultValue={''}
                    />
                  </div>
                </div>
                <div className='col-md-12 text-right'>
                  <button
                    type='submit'
                    value='submit'
                    className='btn theme_btn button_hover'
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* <!--================Contact Area =================--> */}
    </>
  )
}

export default Contacts
