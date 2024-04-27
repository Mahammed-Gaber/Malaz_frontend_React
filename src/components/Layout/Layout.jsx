import { Outlet } from "react-router-dom"
import Nav from "../HOME/Nav/Nav.jsx"
import Footer from './../HOME/Footer/Footer';

function Layout() {
  return (
    <>
    <Nav/>
      <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout