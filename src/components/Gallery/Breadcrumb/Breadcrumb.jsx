import './Breadcrumb.css'
import gall1 from'./../../../assets/image/gallery/01.jpg'
import gall2 from'./../../../assets/image/gallery/02.jpg'
import gall3 from'./../../../assets/image/gallery/03.jpg'
import gall4 from'./../../../assets/image/gallery/04.jpg'
import gall5 from'./../../../assets/image/gallery/05.jpg'
import gall6 from'./../../../assets/image/gallery/06.jpg'
import gall7 from'./../../../assets/image/gallery/01-1.jpg'
// import gall8 from'./../../../assets/image/gallery/02-1.jpg'
// import gall9 from'./../../../assets/image/gallery/03-1.jpg'

function Breadcrumb() {
    return (
        <>
            {/* <!--================Breadcrumb Area =================--> */}
            <section className="breadcrumb_area">
                <div className="overlay bg-parallax" data-stellar-ratio="0.8" data-stellar-vertical-offset="0" data-background=""></div>
                <div className="container">
                    <div className="page-cover text-center">
                        <h2 className="page-cover-tittle">Gallery</h2>
                        <ol className="breadcrumb">
                            <li><a href="index.html">Home</a></li>
                            <li className="active">Gallery</li>
                        </ol>
                    </div>
                </div>
            </section>
            {/* <!--================Breadcrumb Area =================--> */}

            {/* <!--================Breadcrumb Area =================--> */}
            <section className="gallery_area section_gap">
                <div className="container">
                    <div className="section_title text-center">
                        <h2 className="title_color">Royal Hotel Gallery</h2>
                        <p>Who are in extremely love with eco friendly system.</p>
                    </div>
                    <div className="row imageGallery1" id="gallery">
                        <div className="col-md-4 gallery_item">
                            <div className="gallery_img">
                                <img src={gall1} alt="" />
                                <div className="hover">
                                    <a className="light" href="image/gallery/01.jpg"><i className="fa fa-expand"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 gallery_item">
                            <div className="gallery_img">
                                <img src={gall2} alt="" />
                                <div className="hover">
                                    <a className="light" href="image/gallery/02.jpg"><i className="fa fa-expand"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 gallery_item">
                            <div className="gallery_img">
                                <img src={gall3} alt="" />
                                <div className="hover">
                                    <a className="light" href="image/gallery/03.jpg"><i className="fa fa-expand"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 gallery_item">
                            <div className="gallery_img">
                                <img src={gall4} alt="" />
                                <div className="hover">
                                    <a className="light" href="image/gallery/04.jpg"><i className="fa fa-expand"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 gallery_item">
                            <div className="gallery_img">
                                <img src={gall5} alt="" />
                                <div className="hover">
                                    <a className="light" href="image/gallery/05.jpg"><i className="fa fa-expand"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 gallery_item">
                            <div className="gallery_img">
                                <img src={gall6} alt="" />
                                <div className="hover">
                                    <a className="light" href="image/gallery/06.jpg"><i className="fa fa-expand"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 gallery_item">
                            <div className="gallery_img">
                                <img src={gall5} alt="" />
                                <div className="hover">
                                    <a className="light" href="image/gallery/01-1.jpg"><i className="fa fa-expand"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 gallery_item">
                            <div className="gallery_img">
                                <img src={gall6} alt="" />
                                <div className="hover">
                                    <a className="light" href="image/gallery/02-1.jpg"><i className="fa fa-expand"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 gallery_item">
                            <div className="gallery_img">
                                <img src={gall7} alt="" />
                                <div className="hover">
                                    <a className="light" href="image/gallery/03-1.jpg"><i className="fa fa-expand"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!--================Breadcrumb Area =================--> */}

        </>
    )
}

export default Breadcrumb