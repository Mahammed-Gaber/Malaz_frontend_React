import { Link } from 'react-router-dom'
import './Breadcrumb.css'

function Breadcrumb () {
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
            <h2 className='page-cover-tittle'>About Us</h2>
            <ol className='breadcrumb'>
              <li>
                <Link to={'/'}>Home </Link>
              </li>
              <i className="fa-solid fa-arrow-right" style={{margin : '0 10px 0 10px'}}></i>
              <li className=''>About</li>
            </ol>
          </div>
        </div>
      </section>
      {/* <!--================Breadcrumb Area =================--> */}
    </>
  )
}

export default Breadcrumb
