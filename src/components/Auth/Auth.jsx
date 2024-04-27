import { Navigate, Outlet, useLocation } from 'react-router-dom'

function Auth() {
    // const [isLogged, setIsLogged] = useState(false);
    let isLogged;
    const token = localStorage.getItem('token');
    if (token) {
        // setIsLogged(true)
        isLogged = true
    }

    const location = useLocation()

  return (
    isLogged ? <Outlet /> : <Navigate to='/login' state={location.pathname}/>
  )
}

export default Auth