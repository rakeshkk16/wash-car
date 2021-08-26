import aboutImg from '../../images/about.jpg';

export const AboutUs = (props) => {
    return (
        <>
            {/* <!-- About Start --> */}
            <div className="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about-img">
                                <img src={aboutImg} alt="Image22"/>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="section-header text-left">
                                <p>About Us</p>
                                <h2>car washing and detailing</h2>
                            </div>
                            <div className="about-content">
                                <p>
                                    Lorem ipsum dolor sit amet elit. In vitae turpis. Donec in hendre dui, vel blandit massa. Ut vestibu suscipi cursus. Cras quis porta nulla, ut placerat risus. Aliquam nec magna eget velit luctus dictum
                                </p>
                                <ul>
                                    <li><i className="far fa-check-circle"></i>Seats washing</li>
                                    <li><i className="far fa-check-circle"></i>Vacuum cleaning</li>
                                    <li><i className="far fa-check-circle"></i>Interior wet cleaning</li>
                                    <li><i className="far fa-check-circle"></i>Window wiping</li>
                                </ul>
                                <a className="btn btn-custom" href="https/www.google.com">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- About End --> */}
        </>
      )

}
export default AboutUs;