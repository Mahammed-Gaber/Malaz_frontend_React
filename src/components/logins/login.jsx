import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import './login.css'
import axios from 'axios'


function Login () {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const onSubmit = (data) => {
    // console.log(data);
    // eslint-disable-next-line no-undef
    axios.post('http://127.0.0.1:3000/hosts/login', data)
    .then(response => {
      console.log('Form data sent successfully:', response.data);
      localStorage.setItem('token' ,response.data.token);
    })
    .catch(error => {
      console.error('Error sending form data:', error.response.data);
      alert(error.response.data)
      
    });
  };
  

  return (
    <div className='bg-img'>
      <div className='content'>
        <header>Nables Nest</header>
        <form onSubmit={handleSubmit(onSubmit)}>
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

          <div className='field'>
            <span className='fa fa-envelope' />
            <input
              type='text'
              {...register('email', {
                required: true,
                // pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
              })}
              placeholder='_email or Phone'
            />
            {errors.email && errors.email.type === 'required' && (
              <p className='error'>_email or Phone is required</p>
            )}
            {errors.email && errors.email.type === 'pattern' && (
              <p className='error'>Invalid _email format</p>
            )}
          </div>
          <div className='field space'>
            <span className='fa fa-lock' />
            <input
              type='password'
              className='pass-key'
              {...register('password', {
                required: true,
                minLength: 6,
                // pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/
              })}
              placeholder='password'
            />
            {errors.password && errors.password.type === 'required' && (
              <p className='error'>password is required</p>
            )}
            {errors.password && errors.password.type === 'minLength' && (
              <p className='error'>
                password must be at least 6 characters long
              </p>
            )}
            {/* {errors.password && errors.password.type === 'pattern' && (
              <p className='error'>
                password must contain at least one uppercase letter, one
                lowercase letter, and one number
              </p>
            )} */}
            <span className='show'></span>
          </div>
          <div className='pass'>
            <a href='#'>Forgot Password</a>
          </div>
          <div className='field'>
            <input type='submit' value='LOGIN'  />
          </div>
          <div className='signup'>
            Dont have an account?
            <Link className='underline text-blue ' to={'/register'}>
              Signup Now
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
