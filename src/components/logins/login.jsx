import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./login.css";
import axiosInstance from "../../axios/instance";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authUser } from "../../Redux/slices/authSlice";

function Login() {
  const {
    register,
    handleSubmit: handleFormSubmit,
    formState: { errors },
  } = useForm();

  const navigation = useNavigate();

  const isLogged = useSelector((state) => state.authReducer.isLogged);
  const messageError = useSelector((state) => state.authReducer.catchError);

  const loc = useLocation();
  // console.log(loc.state);

  const dispatch = useDispatch();

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   // setIsSubmitting(true);
  //   // Perform your submit logic here
  //   // Once done, you can navigate to another page
  //   navigation('/next-page');
  // };

  const onSubmit = (data) => {
    console.log(data);
    dispatch(authUser(data));
    // console.log(data);
    // eslint-disable-next-line no-undef
    // axiosInstance.post('/guests/login', data)
    // axiosInstance.get('/guests/showGuests')
    // .then(response => {
    //   console.log('Form data sent successfully:', response);
    //   localStorage.setItem('token' ,response.data.token);
    //   localStorage.setItem('userRole' ,response.data.data.user.role);

    //   if (loc.state) {
    //     navigation(loc.state)
    //   }else navigation('/')

    //   // setIsSubmitting(true);
    // })
    // .catch(error => {
    //   console.error('Error sending form data:', error);
    // });
  };

  useEffect(()=> {
    if (isLogged) {
      if (loc.state) {
        navigation(loc.state);
      } else navigation("/");
    }
  }, [isLogged, loc.state, navigation])


  return (
    <div className="bg-img">
      <div className="content">
        <header>Nables Nest</header>
        <form onSubmit={handleFormSubmit(onSubmit)}>
          {/* <div className='field'>
            <span className='fa fa-user' />
            <input
              type='text'
              {...register('_host_name', { required: true })}
              placeholder='_host_name'
            />
            {errors._host_name && errors._host_name.type === 'required' && (
              <p className='error'>_host_name is required</p>
            )}
          </div> */}

          <div className="field">
            <span className="fa fa-envelope" />
            <input
              type="text"
              {...register("email", {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              })}
              placeholder="_email or Phone"
            />
            {errors.email && errors.email.type === "required" && (
              <p className="error">_email or Phone is required</p>
            )}
            {errors.email && errors.email.type === "pattern" && (
              <p className="error">Invalid _email format</p>
            )}
          </div>

          <div className="field space">
            <span className="fa fa-lock" />
            <input
              type="password"
              className="pass-key"
              {...register("password", {
                required: true,
                minLength: 6,
                // pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/,
              })}
              placeholder="password"
            />
            {errors.password && errors.password.type === "required" && (
              <p className="error">password is required</p>
            )}
            {errors.password && errors.password.type === "minLength" && (
              <p className="error">
                password must be at least 6 characters long
              </p>
            )}
            {errors.password && errors.password.type === "pattern" && (
              <p className="error">
                password must contain at least one uppercase letter, one
                lowercase letter, and one number
              </p>
            )}
            <span className="show"></span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginBottom: "25px",
            }}
          >
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="role"
                value={"host"}
                style={{ fontSize: "15px" }}
                {...register("role", {
                  required: {
                    value: true,
                  },
                })}
              />
              <label
                className="form-check-label"
                style={{
                  fontSize: "18px",
                  fontWeight: "normal",
                  margin: "0",
                  padding: "0",
                }}
              >
                Host
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="role"
                value={"guest"}
                style={{ fontSize: "15px" }}
                {...register("role", {
                  required: {
                    value: true,
                  },
                })}
              />
              <label
                className="form-check-label"
                style={{
                  fontSize: "18px",
                  fontWeight: "lighter",
                  margin: "0",
                  padding: "0",
                }}
              >
                Guest
              </label>
            </div>
          </div>

          <div className="field">
            <button type="submit">LOG IN</button>
          </div>

          <div className="pass">
            <Link to={"/login"}>Forgot Password</Link>
          </div>
          <div className="signup">
            Dont have an account?
            <Link className="underline text-blue " to={"/register"}>
              Signup Now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
