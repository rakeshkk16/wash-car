
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './category.styles.scss';
import img1 from '../../images/carousel-1.jpg';
import img2 from '../../images/carousel-2.jpg';
import img3 from '../../images/carousel-3.jpg';
// var Carousel = require('react-responsive-carousel').Carousel;


export const Category = (props) => {
    return (
        <div className="carousel">
             <Carousel showArrows={true} autoPlay={true} interval={2000}  centerMode={true} centerSlidePercentage={100} infiniteLoop={true}>
                <div>
                    <img src={img1} alt="Image33"/>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={img2} alt="Image22"/>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={img3} alt="Image22"/>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>

             {/* <!-- Carousel Start --> */}
             {/* <div className="carousel">
                <div className="container-fluid">
                    <div className="owl-carousel">
                        <div className="carousel-item">
                            <div className="carousel-img">
                                <img src="../../images/carousel-1.jpg" alt="Image33"/>
                            </div>
                            <div className="carousel-text">
                                <h3>Washing & Detailing</h3>
                                <h1>Keep your Car Newer</h1>
                                <p>
                                    Lorem ipsum dolor sit amet elit. Phasellus ut mollis mauris. Vivamus egestas eleifend dui ac
                                </p>
                                <a className="btn btn-custom" href="https/www.google.com">Explore More</a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-img">
                                <img src="../../images/carousel-2.jpg" alt="Image22"/>
                            </div>
                            <div className="carousel-text">
                                <h3>Washing & Detailing</h3>
                                <h1>Quality service for you</h1>
                                <p>
                                    Morbi sagittis turpis id suscipit feugiat. Suspendisse eu augue urna. Morbi sagittis orci sodales
                                </p>
                                <a className="btn btn-custom" href="https/www.google.com">Explore More</a>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="carousel-img">
                                <img src="../../images/carousel-3.jpg" alt="Image22"/>
                            </div>
                            <div className="carousel-text">
                                <h3>Washing & Detailing</h3>
                                <h1>Exterior & Interior Washing</h1>
                                <p>
                                    Sed ultrices, est eget feugiat accumsan, dui nibh egestas tortor, ut rhoncus nibh ligula euismod quam
                                </p>
                                <a className="btn btn-custom" href="https/www.google.com">Explore More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <!-- Carousel End --> */}
        </div>
      )

}
export default Category;