import { Link } from 'react-router-dom'
import './Blog Categorie.css'


function BlogCategorie() {
  return (
    <>
     {/* <!--================Blog Categorie Area =================--> */}
        <section className="blog_categorie_area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="categories_post">
                            <img src="image/blog/cat-post/cat-post-3.jpg" alt="post"/>
                            <div className="categories_details">
                                <div className="categories_text">
                                    <Link to="blogDetails"><h5>Social Life</h5></Link>
                                    <div className="border_line"></div>
                                    <p>Enjoy your social life together</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="categories_post">
                            <img src="image/blog/cat-post/cat-post-2.jpg" alt="post"/>
                            <div className="categories_details">
                                <div className="categories_text">
                                    <link to="blogDetails"><h5>Politics</h5></link>
                                    <div className="border_line"></div>
                                    <p>Be a part of politics</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="categories_post">
                            <img src="image/blog/cat-post/cat-post-1.jpg" alt="post"/>
                            <div className="categories_details">
                                <div className="categories_text">
                                    <link href="blogDetails"><h5>Food</h5></link>
                                    <div className="border_line"></div>
                                    <p>Let the food be finished</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!--================Blog Categorie Area =================--> */}
    </>
  )
}

export default BlogCategorie