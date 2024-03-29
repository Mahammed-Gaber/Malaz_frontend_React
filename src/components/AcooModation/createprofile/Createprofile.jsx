<<<<<<< HEAD
function Createprofile() {
  return (
    <>
      <div className="container my-5">
        <div className="row  d-flex justify-content-between align-self-start">
          <div className="col-md-3  d-flex  flex-column align-items-center ">
=======
import './Createprofile.css' // Assuming you have a CSS file for styling

function Createprofile () {
  return (
    <>
      <br />
      <div className='container my-5'>
        <div className='row  d-flex justify-content-between align-self-start'>
          <div className='col-md-3  d-flex  flex-column align-items-center '>
>>>>>>> 487d25de6a588cf6835cb3478fe0f28a61147d3d
            <h3
              className='fs-1  bg-dark text-white rounded-circle  text-center  '
              style={{ lineHeight: '150px', width: '200px', height: '200px' }}
            ></h3>
            <button
              type='button'
              className='btn-secondary'
              style={{
                width: '80px',
                borderRadius: '50px',
                border: 'none',
                padding: '5px',
                backgroundColor: '#52D0FE',
                color: 'whitesmoke'
              }}
            >
              Upload
            </button>
          </div>
          <div className='col-md-8'>
            <h4 style={{ color: 'white' }}>Your Profile</h4>
            {/* make cards start */}
<<<<<<< HEAD
            <div className="container overflow-hidden">
              <div className="row gy-4 d-flex justify-content-between">
                <div className="col-md-5 border-bottom ">
                  <div className="my-2 text-muted ">enter here Modal</div>
                </div>
                <div className="col-md-5 border-bottom ">
                  <div className="my-2 text-muted ">enter here Modal</div>
                </div>
                <div className="col-md-5 border-bottom ">
                  <div className="my-2 text-muted ">enter here Modal</div>
                </div>
                <div className="col-md-5 border-bottom ">
                  <div className="my-2 text-muted ">enter here Modal</div>
                </div>
                <div className="col-md-5 border-bottom ">
                  <div className="my-2 text-muted ">enter here Modal</div>
                </div>
                <div className="col-md-5 border-bottom ">
                  <div className="my-2 text-muted ">enter here Modal</div>
                </div>
                <div className="col-md-5 border-bottom ">
                  <div className="my-2 text-muted ">enter here Modal</div>
                </div>
                <div className="col-md-5 border-bottom ">
                  <div className="my-2 text-muted ">enter here Modal</div>
                </div>
                <div className="col-md-5 border-bottom ">
                  <div className="my-2 text-muted ">enter here Modal</div>
                </div>
                <div className="col-md-5 border-bottom ">
                  <div className="my-2 text-muted ">enter here Modal</div>
                </div>
                <div className="col-md-5 border-bottom ">
                  <div className="my-2 text-muted ">enter here Modal</div>
                </div>
                <div className="col-md-5 border-bottom ">
                  <div className="my-2 text-muted ">enter here Modal</div>
                </div>
                <div className="col-md-12  ">
                  <h4>About you</h4>
                </div>
                <div
                  className="col-md-12 my-0 rounded-3 "
                  style={{ border: "1px black dotted" }}
                >
                  <p className="mt-3 text-muted">write some thing fun</p>
                  <div className=" mb-3 text-decoration-underline fw-bold">
                    enter a modal
                  </div>
                </div>
                <div className="col-md-12 rounded-3 mt-5  border-bottom "></div>
=======
            <div className='container overflow-hidden'>
              <div className='row gy-4 d-flex justify-content-between'>
                <div className='col-md-5 border-bottom '>
                  <div className='my-2 text-muted '>enter here Modal</div>
                </div>
                <br />
                <div className='col-md-5 border-bottom '>
                  <div className='my-2 text-muted '>enter here Modal</div>
                </div>
                <div className='col-md-5 border-bottom '>
                  <div className='my-2 text-muted '>enter here Modal</div>
                </div>
                <div className='col-md-5 border-bottom '>
                  <div className='my-2 text-muted '>enter here Modal</div>
                </div>
                <button
                  style={{
                    // width: '80px',
                    borderRadius: '50px',
                    border: 'none',
                    padding: '5px',
                    backgroundColor: '#D4A20E',
                    color: 'whitesmoke'
                  }}
                  to='Createprofile'
                  className='btn btn- btn-lg'
                  onClick={() => navigate('#')}
                >
                  Update Profile
                </button>
                {/* <div className='col-md-5 border-bottom '>
                  <div className='my-2 text-muted '>enter here Modal</div>
                </div>
                <div className='col-md-5 border-bottom '>
                  <div className='my-2 text-muted '>enter here Modal</div>
                </div>
                <div className='col-md-5 border-bottom '>
                  <div className='my-2 text-muted '>enter here Modal</div>
                </div>
                <div className='col-md-5 border-bottom '>
                  <div className='my-2 text-muted '>enter here Modal</div>
                </div>
                <div className='col-md-5 border-bottom '>
                  <div className='my-2 text-muted ' typeof='text'>
                    enter here
                  </div>
                </div>
                <div className='col-md-5 border-bottom '>
                  <div className='my-2 text-muted '>enter here Modal</div>
                </div>
                <div className='col-md-5 border-bottom '>
                  <div className='my-2 text-muted '>enter here Modal</div>
                </div>
                <div className='col-md-5 border-bottom '>
                  <div className='my-2 text-muted '>enter here Modal</div>
                </div>
                <div className='col-md-12  '>
                  <h4>About you</h4>
                </div> */}
                {/* <div
                  className='col-md-12 my-0 rounded-3 '
                  style={{ border: '1px black dotted' }}
                >
                  <p className='mt-3 text-muted'>write some thing fun</p>
                  <div className=' mb-3 text-decoration-underline fw-bold'>
                    enter a modal
                  </div>
                </div> */}
                {/* <div className='col-md-12 rounded-3 mt-5  border-bottom '></div> */}
>>>>>>> 487d25de6a588cf6835cb3478fe0f28a61147d3d
              </div>
            </div>
            <br />

            {/* make cards end*/}
          </div>
        </div>
      </div>
<<<<<<< HEAD
=======
      <br />
      <br />
>>>>>>> 487d25de6a588cf6835cb3478fe0f28a61147d3d
    </>
  );
}

<<<<<<< HEAD
export default Createprofile;
=======
export default Createprofile
>>>>>>> 487d25de6a588cf6835cb3478fe0f28a61147d3d
