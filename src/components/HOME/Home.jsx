// import React from 'react'
import About from './About Us/About.jsx'
import Clients from './Clients/Clients.jsx'
import Mainsection from './Mainsection/Mainsection.jsx'
import Blog from './blog/Blog.jsx'
import Card from './cards/cards.jsx'
import Facilities from './Facilities/Facilities';
// import  Nav  from './components/HOME/Nav';

function Home() {
    return (
        <>
            {/* <Nav/>  */}
            <Mainsection />
            <About />
            <Blog />
            <Card />
            <Clients />
            {/* <Facilities /> */}
        </>
    )
}

export default Home