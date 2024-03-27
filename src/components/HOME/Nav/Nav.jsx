// import { useSelector } from "react-redux";
import './Nav.css'
import { NavLink } from 'react-router-dom'

function Nav () {
  // const booking = useSelector(state => state.BookingReducer.booking)

  return (
    <>
      {/* <!--================Header Area =================--> */}
      <header className='header_area'>
        <div className='container'>
          <nav className='navbar navbar-expand-lg navbar-light '>
            <NavLink className='navbar-brand logo_h' to='home'>
              <img
                src='data:image/png;base64,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'
                alt=''
                style={{ width: '170px', fontSize: '100px' }}
              />
            </NavLink>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <div
              className='collapse navbar-collapse offset'
              id='navbarSupportedContent'
            >
              <ul className='nav navbar-nav menu_nav ml-auto'>
                <li className='nav-item active'>
                  <NavLink className='nav-link' to='home'>
                    Home
                  </NavLink>
                </li>

                <li className='nav-item'>
                  <NavLink className='nav-link' to='/aboutUs'>
                    About us
                  </NavLink>
                </li>

                <li className='nav-item'>
                  <NavLink className='nav-link' to='accomodation'>
                    Accomodation
                  </NavLink>
                </li>

                <li className='nav-item'>
                  <NavLink className='nav-link' to='Blog'>
                    BloG
                  </NavLink>
                </li>

                <li className='nav-item'>
                  <NavLink className='nav-link' to='Contact'>
                    Contact
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink className="nav-link" to="Register">
                  SIGN IN
                  </NavLink>
                </li> */}

                <li className='nav-item submenu dropdown'>
                  <NavLink
                    to=''
                    className='nav-link dropdown-toggle'
                    data-toggle='dropdown'
                    role='button'
                    aria-haspopup='true'
                    aria-expanded='false'
                  >
                    {/* profile */}
                    <i
                      class='fa-solid fa-user-tie'
                      style={{ width: '50px', fontSize: '20px' }}
                    ></i>
                  </NavLink>

                  <ul className='dropdown-menu'>
                    <li className='nav-item'>
                      <NavLink className='nav-link' to='Register'>
                        SIGN IN
                      </NavLink>
                    </li>
                    <li className='nav-item'>
                      <NavLink className='nav-link' to='Account'>
                        account
                      </NavLink>
                    </li>
                    <li className='nav-item'>
                      <NavLink className='nav-link' to='blog'>
                        log ouT
                      </NavLink>
                    </li>

                    <li className='nav-item'>
                      <NavLink className='nav-link' to='blogDetails'>
                        log IN
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Nav
