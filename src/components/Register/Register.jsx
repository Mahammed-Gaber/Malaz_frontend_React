// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useForm } from 'react-hook-form';
import "./Register.css"
import { Link, useNavigate  } from "react-router-dom";
import  axios  from '../../axios/instance'
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../../Redux/slices/authSlice';

function Register() {

  const { register, handleSubmit, formState: { errors }, getValues } = useForm();

  const dispatch = useDispatch()
  const nav = useNavigate()
  const catchError = useSelector(state => state.authReducer.err);


  function submition  (data) {
    dispatch(registerUser(data)).then(action => {
      if (action) {
        nav('/login')
      }
    })

    // console.log(data); 
    // axios.post('/guests/signup', data)
    // .then(response => {
    //   console.log('Form data sent successfully:', response.data.message);
    //   alert(response.data.message)
    // })
    // .catch(error => {
    //   console.error('Error sending form data:', error);
      
    // });
  }

  return (
    <div className="bg-img">
      <div className="content">
        <header>Nables Nest</header>
        <form onSubmit={handleSubmit(submition)}>
          <div className="field">
            <span className="fa fa-user" />
            <input
              type="text"
              {...register('guest_name', { required: true })}
              placeholder="guest_name"
            />
            {errors.guest_name && errors.guest_name.type === "required" && (
              <p className="error">guest_name is required</p>
            )}
          </div>
          <div className="field">
            <span className="fa fa-envelope" />
            <input
              type="text"
              {...register('email', {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
              placeholder="email"
            />
            {errors.email && errors.email.type === "required" && (
              <p className="error">Email or Phone is required</p>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <p className="error">Invalid email format</p>
            )}
          </div>
          <div className="field space">
            <span className="fa fa-lock" />
            <input
              type="password"
              className="pass-key"
              {...register('password', {
                required: true,
                minLength: 6,
                pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
              })}
              placeholder="password"
            />
            {errors.password && errors.password.type === "required" && (
              <p className="error">password is required</p>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <p className="error">password must be at least 6 characters long</p>
            )}
            {errors.password && errors.password.type === "pattern" && (
              <p className="error">password must contain at least one uppercase letter, one lowercase letter, and one number</p>
            )}
            <span className="show"></span>
          </div>
          <div className="field space">
            <span className="fa fa-lock" />
            <input
              type="password"
              className="pass-key"
              {...register('passwordConfirm', {
                required: true,
                // eslint-disable-next-line no-undef
                validate: (value) => value === getValues('password'),
              })}
              placeholder="Confirm password"
            />
            {errors.passwordConfirm && errors.passwordConfirm.type === "required" && (
              <p className="error">Confirm _password is required</p>
            )}
            {errors.passwordConfirm && errors.passwordConfirm.type === "validate" && (
              <p className="error">_passwords must match</p>
            )}
          </div>
          <div className="field">
            <input type="submit" value="REGISTER" />
          </div>
          <div className="signup">
            Already have an account?
            <Link to="/login">login Now</Link>

          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
