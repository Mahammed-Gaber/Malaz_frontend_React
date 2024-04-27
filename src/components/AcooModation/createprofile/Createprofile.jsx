import React from 'react'
import Modal from './Modal '

function CreatProfile () {
  return (
    <>
      <div className='container my-5'>
        <div className='row  d-flex justify-content-between align-self-start'>
          <div className='col-md-3  d-flex  flex-column align-items-center '>
            <h3
              className='fs-1  bg-dark text-white rounded-circle  text-center  '
              style={{ lineHeight: '150px', width: '200px', height: '200px' }}
            >
              M
            </h3>
            <button
              type='button'
              className='btn-secondary'
              style={{ width: '60px' }}
            >
              Add
            </button>
          </div>
          <div className='col-md-8'>
            <h4>Your Profile</h4>
            <p className='text-muted'>
              The information you share will be used across Malaz to help other
              guests and Hosts get to know you <span></span>
              <a href='www.google.com'>Learn more</a>
            </p>
            {/* make cards start */}
            <div className='container overflow-hidden'>
              <div className='row gy-4 d-flex justify-content-between'>
                <div className='col-md-5 border-bottom '>
                  <div className='my-2 '>
                    <Modal
                      q1='where i went to school'
                      q2='What do you do for work?'
                      p='Tell us what your profession is. If you don’t have a traditional job, tell us your life’s calling. Example: Nurse, parent to four kids, or retired surfer'
                    />
                  </div>
                </div>
                <div className='col-md-5 border-bottom '>
                  <div className='my-2 '>
                    <Modal
                      q1='My Work'
                      q2='Where did you go to school?'
                      p='Whether it’s home school, high school, or trade school, name the school that made you who you are.'
                    />
                  </div>
                </div>
                <div className='col-md-5 border-bottom '>
                  <div className='my-2 '>
                    <Modal
                      q1='where i live'
                      q2='Where you live'
                      p='Your usual place'
                    />
                  </div>
                </div>
                <div className='col-md-5 border-bottom '>
                  <div className='my-2 '>
                    <Modal
                      q1='My favourite song in high school'
                      q2='What was your favorite song in high school?'
                      p='However embarrassing, share the tune you listened to on repeat as a teenager.'
                    />
                  </div>
                </div>
                <div className='col-md-5 border-bottom '>
                  <div className='my-2 '>
                    <Modal
                      q1='i am obsessed with'
                      q2='What are you obsessed with?'
                      p='Share whatever you can’t get enough of—in a good way. Example: Baking rosemary focaccia.'
                    />
                  </div>
                </div>
                <div className='col-md-5 border-bottom '>
                  <div className='my-2 '>
                    <Modal
                      q1='My fun fact'
                      q2='What’s a fun fact about you?'
                      p='Share something unique or unexpected about you. Example: I was in a music video or I’m a juggler.'
                    />
                  </div>
                </div>
                <div className='col-md-5 border-bottom '>
                  <div className='my-2 '>
                    <Modal
                      q1='My mahdy useless skill'
                      q2='What’s your mahdy useless skill?What’s a fun fact about you?'
                      p='Share a surprising but pointless talent you have. Example: Shuffling cards with one hand.'
                    />
                  </div>
                </div>
                <div className='col-md-5 border-bottom '>
                  <div className='my-2 '>
                    <Modal
                      q1='My biography title would be'
                      q2='What would your biography title be?'
                      p='If someone wrote a book about your life, what would they call it? Example: Born to Roam or Chronicles of a Dog Mom.'
                    />
                  </div>
                </div>
                <div className='col-md-5 border-bottom '>
                  <div className='my-2 '>
                    <Modal
                      q1='i spent to much time '
                      q2='What do you spend too much time doing?'
                      p='Share an activity or hobby you spend lots of free time on. Example: Watching cat videos or playing chess.'
                    />
                  </div>
                </div>
                <div className='col-md-5 border-bottom '>
                  <div className='my-2 '>
                    <Modal
                      q1='Pets '
                      q2='Do you have any pets in your life?'
                      p='Share any pets you have and their names. Example: My calico cat Whiskers, or Leonardo my speedy turtle.'
                    />
                  </div>
                </div>
                {/* <div className='col-md-5 border-bottom '>
                  <div className='my-2 '>enter here Modal</div>
                </div>
                <div className='col-md-5 border-bottom '>
                  <div className='my-2 '>enter here Modal</div>
                </div> */}
                <div>
                  <button
                    style={{
                      width: '1000px',
                      borderRadius: '50px',
                      border: 'none',
                      padding: '5px',
                      backgroundColor: '#D4A20E',
                      color: 'whitesmoke'
                      // alignItems:"center"
                    }}
                    to='Createprofile'
                    className='btn btn- btn-lg'
                    onClick={() => navigate('#')}
                  >
                    Update Profile
                  </button>
                </div>
                {/* <div className='col-md-12  '>
                  <h4>About you</h4>
                </div> */}
                {/* <div
                  className="col-md-12 my-0 rounded-3 "
                  style={{ border: "1px black dotted" }}
                >
                  <p className="mt-3 text-muted">write some thing fun</p>
                  <div className=" mb-3 text-decoration-underline fw-bold">
                    enter a modal
                  </div> */}
                {/* </div> */}
                <div className='col-md-12 rounded-3 mt-5  border-bottom '></div>
              </div>
            </div>

            {/* make cards end*/}
          </div>
        </div>
      </div>
    </>
  )
}

export default CreatProfile
