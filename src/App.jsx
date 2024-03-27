import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Route, Routes } from 'react-router-dom';
//////////////////////////////////////////////////////

import Blog from './components/HOME/blog/Blog';
import Contact from './components/Contact/contacts/contacts';
import Layout from './components/Layout/Layout';
import Home from './components/HOME/Home';
import AboutUS from './components/AboutUS/About US';
import Register from './components/Register/Register';
import Login from './components/logins/login';
import MyAcooModation from './components/AcooModation/myAcooModation';
import Accomodation from './components/AcooModation/AccomodationArea/Accomodation';
import BookingArea from './components/AcooModation/BookingTabl/BookingArea';
import Deatails from './components/AcooModation/deatails/Deatails';
import Profile from './components/AcooModation/profile/Profile';
import Profilehost from './components/AcooModation/profilehost/Profilehost';
import Myblog from './components/Blog/myblog';
import Account from './components/AcooModation/accountprofile/Account';
import Createprofile from './components/AcooModation/createprofile/Createprofile';
import Nav from './components/HOME/Nav/Nav';
// import Deatails from './components/AcooModation/deatails/Deatails';
// import BookingArea from './components/AcooModation/BookingTabl/BookingArea';




function App() {

  return (
    <>
    <Nav/>

      <Routes>
      <Route path="*" element={<Home />} />

        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutUs" element={<AboutUS/>} />
          <Route path="/accomodation" element={<MyAcooModation />} />
          <Route path="/blog" element={<Myblog />} />
          <Route  path='/deatails' element={<Deatails/>}></Route>
          <Route  path='/profile' element={<Profile/>}></Route>

          <Route path="/Blog" element={<Blog />} />
          <Route path="/Elements" element={<elements />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Register" element={<Register/>} />
          <Route  path='/Login' element={<Login/>}></Route>
          
          <Route  path='/Accomodation' element={<Accomodation/>}>
            {/* <Route path='deatails' element={<Deatails/>}/>
            <Route path='BookingArea' element={<BookingArea/>}/> */}
          </Route>
          <Route  path='/BookingArea' element={<BookingArea/>}></Route>
          <Route  path='/Profilehost' element={<Profilehost/>}></Route>
          <Route  path='/Account' element={<Account/>}></Route>
          {/* <Route  path='/Profile' element={<Profile/>}></Route> */}
          <Route  path='/Createprofile' element={<Createprofile/>}></Route>
      
        </Route>
      </Routes>
      
    </>
  )
}

export default App

