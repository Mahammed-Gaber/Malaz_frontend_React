import React from 'react'
import './Deatails.css'
import { useNavigate } from 'react-router-dom'

import De1 from './imges/hotel/1.jpg'
import De2 from './imges/hotel/2.jpg'
import De3 from './imges/hotel/3.jpg'
import De4 from './imges/hotel/12.avif'
import De5 from './imges/hotel/8.jpg'
import De6 from './imges/hotel/9.jpg'
import De7 from './imges/hotel/10.jpg'

import De8 from './imges/hotel/11.jpg'
import De9 from './imges/hotel/post1.jpg'
import De10 from './imges/hotel/post1.jpg'
import De11 from './imges/hotel/post1.jpg'
import De12 from './imges/hotel/post1.jpg'
import De13 from './imges/hotel/post1.jpg'
import De14 from './imges/hotel/post1.jpg'
import BookingArea from '../BookingTabl/BookingArea'

function Deatails () {
  const Navigate = useNavigate()
  return (
    <>
      <>
        {/*================Banner Area =================*/}
        <section className='banner_area blog_banner d_flex align-items-center'>
          <div
            className='overlay bg-parallax'
            data-stellar-ratio='0.9'
            data-stellar-vertical-offset={0}
            data-background=''
          />
          <div className='container'>
            <div className='banner_content text-center'>
              <h4>
                Dude You’re Getting <br />a Nables Nest
              </h4>
              <p>
                The hotel offers a wide range of services and facilities to
                guests, including spacious and comfortable guest rooms, fine
                dining restaurants, a swimming pool and a spa.
              </p>
              <a href='#' className='btn white_btn button_hover'>
                View More
              </a>
            </div>
          </div>
        </section>
        {/*================Banner Area =================*/}
        {/*================Blog Categorie Area =================*/}
        <section className='blog_categorie_area'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-4'>
                <div className='categories_post'>
                  <img src={De1} alt='post' />
                  <div className='categories_details'>
                    <div className='categories_text'>
                      <a href='blog-details.html'>
                        <h5>Social Life</h5>
                      </a>
                      <div className='border_line' />
                      <p>Enjoy your social life together</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='categories_post'>
                  <img src={De2} alt='post' />
                  <div className='categories_details'>
                    <div className='categories_text'>
                      <a href='blog-details.html'>
                        <h5>cheerful</h5>
                      </a>
                      <div className='border_line' />
                      <p>enjoy with us</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='categories_post'>
                  <img src={De3} alt='post' />
                  <div className='categories_details'>
                    <div className='categories_text'>
                      <a href='blog-details.html'>
                        <h5>Food</h5>
                      </a>
                      <div className='border_line' />
                      <p>Let the food be finished</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*================Blog Categorie Area =================*/}
        {/*================Blog Area =================*/}
        <section className='blog_area'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8'>
                <div className='blog_left_sidebar'>
                  <article className='row blog_item'>
                    <div className='col-md-3'>
                      <div className='blog_info text-right'>
                        <div className='post_tag'>
                          {/* <a href='#'>Food,</a> */}
                          <a href='#'>The best pictures</a>
                          {/* <a href='#'>Politics,</a> */}
                          {/* <a href='#'>Lifestyle</a> */}
                        </div>
                        <ul className='blog_meta list_style'>
                          <li>
                            <a href='#'>
                              Mark wiens
                              <i className='lnr lnr-user' />
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              12 Dec, 2017
                              <i className='lnr lnr-calendar-full' />
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              1.2M Views
                              <i className='lnr lnr-eye' />
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              06 Comments
                              <i className='lnr lnr-bubble' />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='col-md-9'>
                      <div className='blog_post'>
                        <img src={De4} alt='' />
                        <div className='blog_details'>
                          <a href='#'>
                            <h2> Nables Nest </h2>
                          </a>
                          <p>
                            Al Amal Hotel is a luxury hotel located in the heart
                            of Al Salam City. The hotel offers a wide range of
                            services and facilities to guests, including
                            spacious and comfortable guest rooms, fine dining
                            restaurants, a swimming pool and a spa.
                          </p>
                          <a href='#' className='view_btn button_hover'>
                            View More
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article className='row blog_item'>
                    <div className='col-md-3'>
                      <div className='blog_info text-right'>
                        <div className='post_tag'>
                          {/* <a href='#'>Food,</a> */}
                          <a href='#'>The best pictures</a>
                          {/* <a href='#'>Politics,</a> */}
                          {/* <a href='#'>Lifestyle</a> */}
                        </div>
                        <ul className='blog_meta list_style'>
                          <li>
                            <a href='#'>
                              Mark wiens
                              <i className='lnr lnr-user' />
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              12 Dec, 2017
                              <i className='lnr lnr-calendar-full' />
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              1.2M Views
                              <i className='lnr lnr-eye' />
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              06 Comments
                              <i className='lnr lnr-bubble' />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='col-md-9'>
                      <div className='blog_post'>
                        <img src={De5} alt='' />
                        <div className='blog_details'>
                          <a href='#'>
                            <h2>The Basics Of Buying Alamel</h2>
                          </a>
                          <p>
                            Al Amal Hotel is a luxury hotel located in the heart
                            of Al Salam City. The hotel offers a wide range of
                            services and facilities to guests, including
                            spacious and comfortable guest rooms, fine dining
                            restaurants, a swimming pool and a spa.
                          </p>
                          <a href='#' className='view_btn button_hover'>
                            View More
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article className='row blog_item'>
                    <div className='col-md-3'>
                      <div className='blog_info text-right'>
                        <div className='post_tag'>
                          {/* <a href='#'>Food,</a> */}
                          <a href='#'>The best pictures</a>
                          {/* <a href='#'>Politics,</a> */}
                          {/* <a href='#'>Lifestyle</a> */}
                        </div>
                        <ul className='blog_meta list_style'>
                          <li>
                            <a href='#'>
                              Mark wiens
                              <i className='lnr lnr-user' />
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              12 Dec, 2017
                              <i className='lnr lnr-calendar-full' />
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              1.2M Views
                              <i className='lnr lnr-eye' />
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              06 Comments
                              <i className='lnr lnr-bubble' />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='col-md-9'>
                      <div className='blog_post'>
                        <img src={De6} alt='' />
                        <div className='blog_details'>
                          <a href='#'>
                            <h2>The Glossary Of turkey</h2>
                          </a>
                          <p>
                            Al Amal Hotel is a luxury hotel located in the heart
                            of Al Salam City. The hotel offers a wide range of
                            services and facilities to guests, including
                            spacious and comfortable guest rooms, fine dining
                            restaurants, a swimming pool and a spa.
                          </p>
                          <a href='#' className='view_btn button_hover'>
                            View More
                          </a>
                        </div>
                      </div>
                    </div>
                  </article>
                  <article className='row blog_item'>
                    <div className='col-md-3'>
                      <div className='blog_info text-right'>
                        <div className='post_tag'>
                          {/* <a href='#'>Food,</a> */}
                          <a href='#'>The best pictures</a>
                          {/* <a href='#'>Politics,</a> */}
                          {/* <a href='#'>Lifestyle</a> */}
                        </div>
                        <ul className='blog_meta list_style'>
                          <li>
                            <a href='#'>
                              Mark wiens
                              <i className='lnr lnr-user' />
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              12 Dec, 2017
                              <i className='lnr lnr-calendar-full' />
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              1.2M Views
                              <i className='lnr lnr-eye' />
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              06 Comments
                              <i className='lnr lnr-bubble' />
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className='col-md-9'>
                      <div className='blog_post'>
                        <img src={De7} alt='' />
                        <div className='blog_details'>
                          {/* <a href='#'>
                            <h2>The Night Sky</h2>
                          </a> */}
                          {/* <p>
                            Al Amal Hotel is a luxury hotel located in the heart
                            of Al Salam City. The hotel offers a wide range of
                            services and facilities to guests, including
                            spacious and comfortable guest rooms, fine dining
                            restaurants, a swimming pool and a spa.
                          </p> */}
                          {/* <a href='#' className='view_btn button_hover'>
                            View More
                          </a> */}
                        </div>
                      </div>
                    </div>
                  </article>
                  <article className='row blog_item'>
                    <div className='col-md-3'>
                      <div className='blog_info text-right'>
                        <div className='post_tag'>
                          {/* <a href='#'>Food,</a>
                          <a href='#'>The best pictures</a>
                          <a href='#'>Politics,</a>
                          <a href='#'>Lifestyle</a> */}
                        </div>
                        <ul className='blog_meta list_style'>
                          <li>
                            {/* <a href='#'>
                              Mark wiens
                              <i className='lnr lnr-user' />
                            </a> */}
                          </li>
                          <li>
                            {/* <a href='#'>
                              12 Dec, 2017
                              <i className='lnr lnr-calendar-full' />
                            </a> */}
                          </li>
                          <li>
                            {/* <a href='#'>
                              1.2M Views
                              <i className='lnr lnr-eye' />
                            </a> */}
                          </li>
                          <li>
                            {/* <a href='#'>
                              06 Comments
                              <i className='lnr lnr-bubble' />
                            </a> */}
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* <div className='col-md-9'>
                      <div className='blog_post'>
                        <img src={De8} alt='' />
                        <div className='blog_details'>
                          <a href='#'>
                            <h2>alnsee</h2>
                          </a>
                          <p>
                            Al Amal Hotel is a luxury hotel located in the heart
                            of Al Salam City. The hotel offers a wide range of
                            services and facilities to guests, including
                            spacious and comfortable guest rooms, fine dining
                            restaurants, a swimming pool and a spa.
                          </p>
                          <a href='#' className='view_btn button_hover'>
                            View More
                          </a>
                        </div>
                      </div>
                    </div> */}
                  </article>
                  <nav className='blog-pagination justify-content-center d-flex'>
                    <ul className='pagination'>
                      <li className='page-item'>
                        <a href='#' className='page-link' aria-label='Previous'>
                          {/* <span aria-hidden='true'>
                            <span className='lnr lnr-chevron-left' />
                          </span> */}
                        </a>
                      </li>
                      {/* <li className='page-item'>
                        <a href='#' className='page-link'>
                          01
                        </a>
                      </li>
                      <li className='page-item active'>
                        <a href='#' className='page-link'>
                          02
                        </a>
                      </li>
                      <li className='page-item'>
                        <a href='#' className='page-link'>
                          03
                        </a>
                      </li>
                      <li className='page-item'>
                        <a href='#' className='page-link'>
                          04
                        </a>
                      </li>
                      <li className='page-item'>
                        <a href='#' className='page-link'>
                          09
                        </a>
                      </li> */}
                      <li className='page-item'>
                        <a href='#' className='page-link' aria-label='Next'>
                          <span aria-hidden='true'>
                            <span className='lnr lnr-chevron-right' />
                          </span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className='col-lg-4'>
                <div className='blog_right_sidebar'>
                  <aside className='single_sidebar_widget search_widget'>
                    <div className='input-group'>
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Search Posts'
                      />
                      <span className='input-group-btn'>
                        <button className='btn btn-default' type='button'>
                          <i className='lnr lnr-magnifier' />
                        </button>
                      </span>
                    </div>
                    {/* /input-group */}
                    <div className='br' />
                  </aside>
                  <aside className='single_sidebar_widget author_widget'>
                    <img
                      className='author_img rounded-circle'
                      src={De9}
                      alt=''
                    />
                    <h4>Charlie Barber</h4>
                    <p>Senior blog writer</p>
                    <div className='social_icon'>
                      <a href='#'>
                        <i className='fa fa-facebook' />
                      </a>
                      <a href='#'>
                        <i className='fa fa-twitter' />
                      </a>
                      <a href='#'>
                        <i className='fa fa-github' />
                      </a>
                      <a href='#'>
                        <i className='fa fa-behance' />
                      </a>
                    </div>
                    <p>
                      Boot camps have its supporters andit sdetractors. Some
                      people do not understand why you should have to spend
                      money on boot camp when you can get. Boot camps have
                      itssuppor ters andits detractors.
                    </p>
                    <div className='br' />
                  </aside>
                  <aside className='single_sidebar_widget popular_post_widget'>
                    <h3 className='widget_title'>Popular Posts</h3>
                    <div className='media post_item'>
                      <img src={De10} alt='post' />
                      <div className='media-body'>
                        <a href='blog-details.html'>
                          <h3>Space The Final Frontier</h3>
                        </a>
                        <p>02 Hours ago</p>
                      </div>
                    </div>
                    <div className='media post_item'>
                      <img src={De11} alt='post' />
                      <div className='media-body'>
                        <a href='blog-details.html'>
                          <h3>The Amazing Hubble</h3>
                        </a>
                        <p>02 Hours ago</p>
                      </div>
                    </div>
                    <div className='media post_item'>
                      <img src={De12} alt='post' />
                      <div className='media-body'>
                        <a href='blog-details.html'>
                          <h3>Astronomy Or Astrology</h3>
                        </a>
                        <p>03 Hours ago</p>
                      </div>
                    </div>
                    <div className='media post_item'>
                      <img src={De13} alt='post' />
                      <div className='media-body'>
                        <a href='blog-details.html'>
                          <h3>Asteroids telescope</h3>
                        </a>
                        <p>01 Hours ago</p>
                      </div>
                    </div>
                    <div className='br' />
                  </aside>
                  <aside className='single_sidebar_widget ads_widget'>
                    <a href='#'>
                      <img className='img-fluid' src={De14} alt='' />
                    </a>
                    <div className='br' />
                  </aside>
                  <aside className='single_sidebar_widget post_category_widget'>
                    <h4 className='widget_title'>Post Catgories</h4>
                    <ul className='list_style cat-list'>
                      <li>
                        <a href='#' className='d-flex justify-content-between'>
                          <p>Technology</p>
                          <p>37</p>
                        </a>
                      </li>
                      <li>
                        <a href='#' className='d-flex justify-content-between'>
                          <p>Lifestyle</p>
                          <p>24</p>
                        </a>
                      </li>
                      <li>
                        <a href='#' className='d-flex justify-content-between'>
                          <p>Fashion</p>
                          <p>59</p>
                        </a>
                      </li>
                      <li>
                        <a href='#' className='d-flex justify-content-between'>
                          <p>Art</p>
                          <p>29</p>
                        </a>
                      </li>
                      <li>
                        <a href='#' className='d-flex justify-content-between'>
                          <p>Food</p>
                          <p>15</p>
                        </a>
                      </li>
                      <li>
                        <a href='#' className='d-flex justify-content-between'>
                          <p>Architecture</p>
                          <p>09</p>
                        </a>
                      </li>
                      <li>
                        <a href='#' className='d-flex justify-content-between'>
                          <p>Adventure</p>
                          <p>44</p>
                        </a>
                      </li>
                    </ul>
                    <div className='br' />
                  </aside>
                  <aside className='single-sidebar-widget newsletter_widget'>
                    <h4 className='widget_title'>Newsletter</h4>
                    <p>
                      Here, I focus on a range of items and features that we use
                      in life without giving them a second thought.
                    </p>
                    <div className='form-group d-flex flex-row'>
                      <div className='input-group'>
                        <div className='input-group-prepend'>
                          <div className='input-group-text'>
                            <i className='fa fa-envelope' aria-hidden='true' />
                          </div>
                        </div>
                        <input
                          type='text'
                          className='form-control'
                          id='inlineFormInputGroup'
                          placeholder='Enter email'
                          onfocus="this.placeholder = ''"
                          onblur="this.placeholder = 'Enter email'"
                        />
                      </div>
                      <a href='#' className='bbtns'>
                        Subcribe
                      </a>
                    </div>
                    <p className='text-bottom'>
                      You can unsubscribe at any time
                    </p>
                    <div className='br' />
                  </aside>
                  <aside className='single-sidebar-widget tag_cloud_widget'>
                    <h4 className='widget_title'>Tag Clouds</h4>
                    <ul className='list_style'>
                      <li>
                        <a href='#'>Technology</a>
                      </li>
                      <li>
                        <a href='#'>Fashion</a>
                      </li>
                      <li>
                        <a href='#'>Architecture</a>
                      </li>
                      <li>
                        <a href='#'>Fashion</a>
                      </li>
                      <li>
                        <a href='#'>Food</a>
                      </li>
                      <li>
                        <a href='#'>Technology</a>
                      </li>
                      <li>
                        <a href='#'>Lifestyle</a>
                      </li>
                      <li>
                        <a href='#'>Art</a>
                      </li>
                      <li>
                        <a href='#'>Adventure</a>
                      </li>
                      <li>
                        <a href='#'>Food</a>
                      </li>
                      <li>
                        <a href='#'>Lifestyle</a>
                      </li>
                      <li>
                        <a href='#'>Adventure</a>
                      </li>
                    </ul>
                  </aside>
                </div>
              </div>
              {/* ///////////////////// */}
              <>
                <div className='comments-area'>
                  <h4> Comments</h4>
                  <div className='comment-list'>
                    <div className='single-comment justify-content-between d-flex'>
                      <div className='user justify-content-between d-flex'>
                        <div className='thumb'>
                          <img src='image/blog/c1.jpg' alt='' />
                        </div>
                        <div className='desc'>
                          <h5>
                            <a href='#'>Emilly Blunt</a>
                          </h5>
                          <p className='date'>December 4, 2017 at 3:12 pm </p>
                          <p className='comment'>
                            Never say goodbye till the end comes!
                          </p>
                        </div>
                      </div>
                      <div className='reply-btn'>
                        <a href='' className='btn-reply text-uppercase'>
                          reply
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='comment-list left-padding'>
                    <div className='single-comment justify-content-between d-flex'>
                      <div className='user justify-content-between d-flex'>
                        <div className='thumb'>
                          <img src='image/blog/c2.jpg' alt='' />
                        </div>
                        <div className='desc'>
                          <h5>
                            <a href='#'>Elsie Cunningham</a>
                          </h5>
                          <p className='date'>December 4, 2017 at 3:12 pm </p>
                          <p className='comment'>
                            Never say goodbye till the end comes!
                          </p>
                        </div>
                      </div>
                      <div className='reply-btn'>
                        <a href='' className='btn-reply text-uppercase'>
                          reply
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='comment-list left-padding'>
                    <div className='single-comment justify-content-between d-flex'>
                      <div className='user justify-content-between d-flex'>
                        <div className='thumb'>
                          <img src='image/blog/c3.jpg' alt='' />
                        </div>
                        <div className='desc'>
                          <h5>
                            <a href='#'>Annie Stephens</a>
                          </h5>
                          <p className='date'>December 4, 2017 at 3:12 pm </p>
                          <p className='comment'>
                            Never say goodbye till the end comes!
                          </p>
                        </div>
                      </div>
                      <div className='reply-btn'>
                        <a href='' className='btn-reply text-uppercase'>
                          reply
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='comment-list'>
                    <div className='single-comment justify-content-between d-flex'>
                      <div className='user justify-content-between d-flex'>
                        <div className='thumb'>
                          <img src='image/blog/c4.jpg' alt='' />
                        </div>
                        <div className='desc'>
                          <h5>
                            <a href='#'>Maria Luna</a>
                          </h5>
                          <p className='date'>December 4, 2017 at 3:12 pm </p>
                          <p className='comment'>
                            Never say goodbye till the end comes!
                          </p>
                        </div>
                      </div>
                      <div className='reply-btn'>
                        <a href='' className='btn-reply text-uppercase'>
                          reply
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className='comment-list'>
                    <div className='single-comment justify-content-between d-flex'>
                      <div className='user justify-content-between d-flex'>
                        <div className='thumb'>
                          <img src='image/blog/c5.jpg' alt='' />
                        </div>
                        <div className='desc'>
                          <h5>
                            <a href='#'>Ina Hayes</a>
                          </h5>
                          <p className='date'>December 4, 2017 at 3:12 pm </p>
                          <p className='comment'>
                            Never say goodbye till the end comes!
                          </p>
                        </div>
                      </div>
                      <div className='reply-btn'>
                        <a href='' className='btn-reply text-uppercase'>
                          reply
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='comment-form'>
                  <h4>Leave a Reply</h4>
                  <form>
                    <div className='form-group form-inline'>
                      <div className='form-group col-lg-6 col-md-6 name'>
                        <input
                          type='text'
                          className='form-control'
                          id='name'
                          placeholder='Enter Name'
                          onfocus="this.placeholder = ''"
                          onblur="this.placeholder = 'Enter Name'"
                        />
                      </div>
                      <div className='form-group col-lg-6 col-md-6 email'>
                        <input
                          type='email'
                          className='form-control'
                          id='email'
                          placeholder='Enter email address'
                          onfocus="this.placeholder = ''"
                          onblur="this.placeholder = 'Enter email address'"
                        />
                      </div>
                    </div>
                    <div className='form-group'>
                      <input
                        type='text'
                        className='form-control'
                        id='subject'
                        placeholder='Subject'
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Subject'"
                      />
                    </div>
                    <div className='form-group'>
                      <textarea
                        className='form-control mb-10'
                        rows={5}
                        name='message'
                        placeholder='Messege'
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Messege'"
                        required=''
                        defaultValue={''}
                      />
                    </div>
                    {/* <button
                      className='primary-btn button_hover'
                      onClick={() => Navigate('/profile')}
                    >
                      Book Now
                    </button> */}
                  </form>
                </div>
              </>
              {/* ///////////////////// */}
            </div>
          </div>
        </section>
        <BookingArea/>
        {/*================Blog Area =================*/}
      </>
    </>
  )
}

export default Deatails
