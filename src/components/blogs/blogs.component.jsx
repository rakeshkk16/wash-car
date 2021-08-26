import blog1 from '../../images/blog-1.jpg';
import blog2 from '../../images/blog-2.jpg';
import blog3 from '../../images/blog-3.jpg';

export const Blogs = (props) => {
    return (
        <>
          {/* <!-- Blog Start --> */}
          <div className="blog">
                <div className="container">
                    <div className="section-header text-center">
                        <p>Our Blog</p>
                        <h2>Latest news & articles</h2>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src={blog1} alt="Image22"/>
                                    <div className="meta-date">
                                        <span>01</span>
                                        <strong>Jan</strong>
                                        <span>2045</span>
                                    </div>
                                </div>
                                <div className="blog-text">
                                    <h3><a href="https/www.google.com">Lorem ipsum dolor sit amet</a></h3>
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Pellent iaculis blandit lorem, quis convall diam eleife. Nam in arcu sit amet massa ferment quis enim. Nunc  augue velit metus congue eget semper
                                    </p>
                                </div>
                                <div className="blog-meta">
                                    <p><i className="fa fa-user"></i><a href="https/www.google.com">Admin</a></p>
                                    <p><i className="fa fa-folder"></i><a href="https/www.google.com">Web Design</a></p>
                                    <p><i className="fa fa-comments"></i><a href="https/www.google.com">15 Comments</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src={blog2} alt="Image22"/>
                                    <div className="meta-date">
                                        <span>01</span>
                                        <strong>Jan</strong>
                                        <span>2045</span>
                                    </div>
                                </div>
                                <div className="blog-text">
                                    <h3><a href="https/www.google.com">Lorem ipsum dolor sit amet</a></h3>
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Pellent iaculis blandit lorem, quis convall diam eleife. Nam in arcu sit amet massa ferment quis enim. Nunc  augue velit metus congue eget semper
                                    </p>
                                </div>
                                <div className="blog-meta">
                                    <p><i className="fa fa-user"></i><a href="https/www.google.com">Admin</a></p>
                                    <p><i className="fa fa-folder"></i><a href="https/www.google.com">Web Design</a></p>
                                    <p><i className="fa fa-comments"></i><a href="https/www.google.com">15 Comments</a></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src={blog3} alt="Image22"/>
                                    <div className="meta-date">
                                        <span>01</span>
                                        <strong>Jan</strong>
                                        <span>2045</span>
                                    </div>
                                </div>
                                <div className="blog-text">
                                    <h3><a href="https/www.google.com">Lorem ipsum dolor sit amet</a></h3>
                                    <p>
                                        Lorem ipsum dolor sit amet elit. Pellent iaculis blandit lorem, quis convall diam eleife. Nam in arcu sit amet massa ferment quis enim. Nunc  augue velit metus congue eget semper
                                    </p>
                                </div>
                                <div className="blog-meta">
                                    <p><i className="fa fa-user"></i><a href="https/www.google.com">Admin</a></p>
                                    <p><i className="fa fa-folder"></i><a href="https/www.google.com">Web Design</a></p>
                                    <p><i className="fa fa-comments"></i><a href="https/www.google.com">15 Comments</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Blog End --> */}
        </>
      )

}
export default Blogs;