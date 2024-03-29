// import React from 'react'
// import { useForm } from 'react-hook-form'
// import { Link } from 'react-router-dom'
// import axios from 'axios'
import './Profile.css' // Assuming you have a CSS file for styling

// function Profile () {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors }
//   } = useForm()

//   const onSubmit = async data => {
//     try {
//       const response = await axios.post('http://localhost:3000/bookings', data)
//       console.log('Booking request sent successfully:', response.data)
//       // Show success message to the user
//     } catch (error) {
//       console.error('Error sending booking request:', error)
//       // Handle errors appropriately, e.g., display an error message to the user
//     }
//   }

//   return (
//     <div className='bg-img'>
//       <div className='content'>
//         <header>Booking Request</header>
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className='field'>
//             <span className='fa fa-user' />
//             <input
//               type='text'
//               {...register('name', { required: true })}
//               placeholder='Full Name'
//             />
//             {errors.name && errors.name.type === 'required' && (
//               <p className='error'>Full name is required</p>
//             )}
//           </div>
//           <div className='field'>
//             <span className='fa fa-envelope' />
//             <input
//               type='email'
//               {...register('email', {
//                 required: true,
//                 pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
//               })}
//               placeholder='Email Address'
//             />
//             {errors.email && errors.email.type === 'required' && (
//               <p className='error'>Email address is required</p>
//             )}
//             {errors.email && errors.email.type === 'pattern' && (
//               <p className='error'>Invalid email format</p>
//             )}
//           </div>
//           <div className='field'>



//             <label htmlFor="arrivalDate">Arrival Date</label> 
//              <input
//               type="date"
//               {...register('arrivalDate', { required: true })}
//             />



//             {errors.arrivalDate && errors.arrivalDate.type === 'required' && (
//               <p className='error'>Arrival date is required</p>
//             )}
//           </div>
//           <div className='field'>
//             <label htmlFor='departureDate'>Departure Date</label>



//             <input
//               type='date'
//               {...register('departureDate', { required: true })}
//             />





//             {errors.departureDate &&
//               errors.departureDate.type === 'required' && (
//                 <p className='error'>Departure date is required</p>
//               )}
//           </div>
//           <div className='field'>
//             <label htmlFor='roomType'>Room Type</label>
//             <select {...register('roomType', { required: true })}>
//               <option value=''>Select Room Type</option>
//               <option value='single'>Single</option>
//               <option value='double'>Double</option>
//               <option value='suite'>Suite</option>
//             </select>
//             {errors.roomType && errors.roomType.type === 'required' && (
//               <p className='error'>Room type is required</p>
//             )}
//           </div>
//           <div className='field'>
//             <label htmlFor='guests'>Number of Guests</label>
//             <input
//               type='number'
//               {...register('guests', { required: true, min: 1 })}
//               placeholder='Number of Guests'
//             />
//             {errors.guests && errors.guests.type === 'required' && (
//               <p className='error'>Number of guests is required</p>
//             )}
//             {errors.guests && errors.guests.type === 'min' && (
//               <p className='error'>Minimum guests allowed is 1</p>
//             )}
//           </div>
//           <div className='field'>
//             <label htmlFor='paymentMethod'>Payment Method</label>
//             <select {...register('paymentMethod', { required: true })}>
//               <option value=''>Select Payment Method</option>
//               <option value='partial'>Partial Payment</option>
//               <option value='full'>Full Payment</option>
//             </select>
//             {errors.paymentMethod &&
//               errors.paymentMethod.type === 'required' && (
//                 <p className='error'>Payment method is required</p>
//               )}
//           </div>
//           <div className='field'>
//             <label htmlFor='paymentOption'>Payment Option</label>
//             <select {...register('paymentOption', { required: true })}>
//               <option value=''>Select Payment Option</option>
//               <option value='creditCard'>Credit Card</option>
//               <option value='debitCard'>Debit Card</option>
//               <option value='paypal'>PayPal</option>
//               <option value='googlePay'>Google Pay</option>
//             </select>
//             {errors.paymentOption &&
//               errors.paymentOption.type === 'required' && (
//                 <p className='error'>Payment option is required</p>
//               )}
//           </div>
//           <div className='field'>
//             <label htmlFor='cardNumber'>Card Number</label>
//             <input
//               type='text'
//               {...register('cardNumber', { required: true })}
//               placeholder='Card Number'
//             />
//             {errors.cardNumber && errors.cardNumber.type === 'required' && (
//               <p className='error'>Card number is required</p>
//             )}
//           </div>
//           Other payment details fields
//           <div className='field'>
//             <p className='confirmation-message'>
//               Your booking request will not be confirmed until the host accepts
//               your request within 24 hours. No charges will be incurred until
//               then.
//             </p>
//           </div>
//           <div className='field'>
//             <input type='submit' value='Submit Booking' />
//           </div>
//           <div className='signup'>
//             Already have an account? <Link to='/login'>Login Now</Link>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// export default Profile

// import React from 'react'
// import './Profile.css'
// import { Link } from 'react-router-dom'

// function Profile() {
//   return (
//     <>
    
// <div className="container rounded bg-white mt-5 mb-5">
//   <div className="row">
//     <div className="col-md-3 border-right">
//       <div className="d-flex flex-column align-items-center text-center p-3 py-5">
//         <img
//           className="rounded-circle mt-5"
//           width="150px"
//           src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
//         />
//         <span className="font-weight-bold">mohamed</span>
//         <span className="font-weight-bold">guest</span>
//         <span className="text-black-50">mohamed@gmail.com</span>
//         <span> </span>
//       </div>
//     </div>
//     <div className="col-md-5 border-right">
//       <div className="p-3 py-5">
//         <div className="d-flex justify-content-between align-items-center mb-3">
//           <h4 className="text-right">Profile Settings</h4>
//         </div>
//         <div className="row mt-2">
//           <div className="col-md-6">
//             <label className="labels">Name</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="first name"
//               defaultValue=""
//             />
//           </div>
//           <div className="col-md-6">
//             <label className="labels">Surname</label>
//             <input
//               type="text"
//               className="form-control"
//               defaultValue=""
//               placeholder="surname"
//             />
//           </div>
//         </div>
//         <div className="row mt-3">
//           <div className="col-md-12">
//             <label className="labels">Mobile Number</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="enter phone number"
//               defaultValue=""
//             />
//           </div>
//           <div className="col-md-12">
//             <label className="labels">Address </label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="enter address line 1"
//               defaultValue=""
//             />
//           </div>
//           <div className="col-md-12">
//             <label className="labels">The school she went to</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="enter The school she went to"
//               defaultValue=""
//             />
//           </div>
//           <div className="col-md-12">
//             <label className="labels">Where you live</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="enter Where you live"
//               defaultValue=""
//             />
//           </div>
//           <div className="col-md-12">
//             <label className="labels">State</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="enter address "
//               defaultValue=""
//             />
//           </div>
//           <div className="col-md-12">
//             <label className="labels">Area</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="enter address Area "
//               defaultValue=""
//             />
//           </div>
//           <div className="col-md-12">
//             <label className="labels">Email ID</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="enter email id"
//               defaultValue=""
//             />
//           </div>
//           <div className="col-md-12">
//             <label className="labels">Education</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="education"
//               defaultValue=""
//             />
//           </div>
//         </div>
//         <div className="row mt-3">
//           <div className="col-md-6">
//             <label className="labels">Country</label>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="country"
//               defaultValue=""
//             />
//           </div>
//           <div className="col-md-6">
//             <label className="labels">State/Region</label>
//             <input
//               type="text"
//               className="form-control"
//               defaultValue=""
//               placeholder="state"
//             />
//           </div>
//         </div>
//         <div className="mt-5 text-center">
//           <button className="btn btn-primary profile-button" type="button">
//             Save Profile
//           </button>
//         </div>
       
//       </div>
//       <div className="Profile">
//             Already have an account?
//             <Link to="/Profilehost">Profilehost</Link>

//           </div>
//     </div>
//     <div className="col-md-4">
//       <div className="p-3 py-5">
//         <div className="d-flex justify-content-between align-items-center experience">
//           <span>Edit Experience</span>
//           <span className="border px-3 p-1 add-experience">
//             <i className="fa fa-plus" />
//             &nbsp;Experience
//           </span>
//         </div>
//         <br />
//         <div className="col-md-12">
//           <label className="labels">Experience in Designing</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="experience"
//             defaultValue=""
//           />
//         </div>{" "}
//         <br />
//         <div className="col-md-12">
//           <label className="labels">Additional Details</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="additional details"
//             defaultValue=""
//           />
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

//     </>
//   )
// }

// export default Profile

////////////////////////////////////////////

import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


function Profile() {
  const navigate =useNavigate()

  return (
    <>

    <div>
      <div className="container px-4"style={{marginTop:"190" }}>
        <div className="row gx-5 ">
          <div
            className="col-md card my-4"
            style={{ width: "18rem", borderRadius: "30px" }}
          >
            <div className="card-body text-center">
              <h3
                className="card-title  bg-dark text-white rounded-circle m-auto text-center align-middle "
                style={{ width: "50px", height: "50px", lineHeight: "50px" }}
              >
                M
              </h3>
              <h5 className="card-subtitle my-1 text-muted ">Mahdy</h5>
              <p className="card-text">Guest</p>
            </div>
          </div>
        </div>
        <div className="row gx-5 mt-5  justify-content-sm-between">
          <div className="col-md-4    card " style={{ borderRadius: "30px" }}>
            <div className="card-body ">
              <h5>Mahdy confirmed information</h5>
              <p className="card-text">Email address</p>
              <p className="card-text border-bottom pb-3">phone number</p>

              <h5>Verify your identity</h5>
              <p className="card-text">
                Before you book or host on Airbnb, you will need to complete this
                step.
              </p>
              <a href="#" className="btn btn-primary btn-lg">
                Get verified
              </a>
            </div>

          </div>
          <div className="col-md-5 ">
            <div className="border-top p-3">
              <div className="card-body">
                <h4 className="card-title">It is time to create your profile</h4>
                <p className="card-text text-muted">
                  Your Airbnb profile is an important part of every reservation.
                  Create yours to help other Hosts and guests get to know you.
                </p>
                <button to="Createprofile" className="btn btn-danger btn-lg"onClick={()=>navigate("/Createprofile")}>
Update Profile                </button>
                {/* //////////////// */}
                {/* <button className='btn theme_btn button_hover'onClick={()=>navigate("/deatails")}>
                          Deatails
                        </button> */}
                {/* //////////////// */}
              </div>
            </div>

            {/* card 2 */}
          </div>
        </div>
      </div>

      {/* part 2 */}
    </div>

    </>
  )
}

export default Profile
