import 'bootstrap/dist/css/bootstrap.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
//////////////////////////////////////////////////////

// // Set token in headers for all requests
// const token = localStorage.getItem('token')
// axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

import Register from './components/Register/Register'
import Login from './components/logins/login'

import Blog from './components/HOME/blog/Blog'
import Contact from './components/Contact/contacts/contacts'
import Layout from './components/Layout/Layout'
import Home from './components/HOME/Home'
import AboutUS from './components/AboutUS/About US'
import MyAcooModation from './components/AcooModation/myAcooModation'
import Accomodation from './components/AcooModation/AccomodationArea/Accomodation'
import BookingArea from './components/AcooModation/BookingTabl/BookingArea'
import Profile from './components/AcooModation/profile/Profile'
import Profilehost from './components/AcooModation/profilehost/Profilehost'
import Myblog from './components/Blog/myblog'
import Createprofile from './components/AcooModation/createprofile/Createprofile'
import Newblog from './components/Blog/newblog/Newblog'
import Mydeatails from './components/AcooModation/deatails/Mydeatails'
import Yourplace from './components/HostPlace/Your-place1/Yourplace'
import Structure from './components/HostPlace/structure 2/Structure'
import PrivacyType from './components/HostPlace/Privacy-type 3/Privacytype'
import Floorplan from './components/HostPlace/Floor-plan 4/Floorplan'
import Instantbook from './components/HostPlace/instant-book 5/Instantbook'
// import Price from './components/HostPlace/price 6/Price'
import Congratulations from './components/HostPlace/Congratulations 7/Congratulations'
import Auth from './components/Auth/Auth'
import Nav from './components/HOME/Nav/Nav'
import Footer from './components/HOME/Footer/Footer'
import HostPlace from './components/HostPlace/HostPlace'
import Account from './components/AcooModation/accountprofile/Account'

import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { currentUser } from './Redux/slices/authSlice'

function App () {

const dispatch = useDispatch();
const loc = useLocation()

const messageError = useSelector(state => state.authReducer.catchError);


useEffect(()=>{
  dispatch(currentUser())
  if (messageError) {
    alert(messageError);
  }
}, [dispatch, messageError])

  // const [input, setInput] = useState('');
  // const [arr, setArr] = useState([]);

  // function changeInput(e) {
  //   setInput(e.target.value);
  // }
  // function addInput(){
  //   setArr([...arr, {text : input, done : false}]);
  // }

  // function isDone(index) {
  //   console.log(index);
  //   arr[index].done = !arr[index].done
  //   setArr([...arr])
  // }

  // console.log(loc.pathname);

  return (
    <>
    {loc.pathname == '/your-blace' ? null :
        <Nav />
    }

      {/* <input type="text" onChange={changeInput}/>
      <input type="button" value='add task' onClick={addInput}/>
      <ul>
        {arr.map((item, index) => {
          return <li key={index} onClick={()=> isDone (index)}  {...item.done && {style: {color: 'red'}}} >{item.text}</li>
        })}
      </ul> */}


      <Routes>
        {/* <Route path='*' element={<Home />} /> */}

        {/* <Route element={<Layout />}> */}
          <Route path='/' element={<Home />} />
          <Route path='/aboutUs' element={<AboutUS />} />
          <Route path='/blog' element={<Myblog />} />
          <Route path='/account/profile/:role/:id' element={<Profile />} />
          <Route path='/Newblog' element={<Newblog />} />

          <Route path='/Blog' element={<Blog />} />
          <Route path='/Elements' element={<elements />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/Register' element={<Register />} />
          <Route path='/Login' element={<Login />}></Route>

          
          <Route element={<Auth />}>
            <Route path='/accomodation' element={<MyAcooModation />} />
            <Route path='/Accomodation/Mydeatails/:id' element={<Mydeatails />} />
            <Route path='/BookingArea' element={<BookingArea />} />
          </Route>
          
          <Route path='/Profilehost' element={<Profilehost />} />
          <Route path='/account' element={<Account />} />
          <Route path='/Mydeatails' element={<Mydeatails />} />
          <Route path='/Createprofile' element={<Createprofile />} />

          <Route path='/your-blace/:id' element={ <HostPlace /> } />
          <Route path='/your-blace/:id/welcome' element={<Yourplace />} />
          <Route path='/your-blace/:id/Structure' element={<Structure />} />
          <Route path='/PrivacyType' element={<PrivacyType />} />
          <Route path='/Floorplan' element={<Floorplan />} />
          <Route path='/Instantbook' element={<Instantbook />} />
          {/* <Route path='/Price' element={<Price />} /> */}
          <Route path='/Congratulations' element={<Congratulations />} />
        {/* </Route> */}

      </Routes>

    {loc.pathname == '/place' ? null :
      <Footer />
    }

    </>
  )
}

export default App
