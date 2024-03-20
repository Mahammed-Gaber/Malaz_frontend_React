import { Link } from 'react-router-dom'
import './Breadcrumb.css'

function Breadcrumb() {
  return (
    <>
     {/* <!--================Breadcrumb Area =================--> */}
        <section className="breadcrumb_area blog_banner_two">
            <div className="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0" data-background=""></div>
            <div className="container">
                <div className="page-cover text-center">
                    <h2 className="page-cover-tittle f_48">Blog Details page</h2>
                    <ol className="breadcrumb">
                        <li><Link to="home">Home</Link></li>
                        <li><Link to="blog">Blog</Link></li>
                        <li className="active">Blog Details</li>
                    </ol>
                </div>
            </div>
        </section>
        {/* <!--================Breadcrumb Area =================--> */}
    
    </>
  )
}

export default Breadcrumb