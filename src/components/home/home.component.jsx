// import { useState, useEffect }  from  'react';

// import './home.styles.scss';
import Header  from "../header/header.component";
import NavBar from "../navbar/navbar.component";
import Dashboard from "../dashboard/dashboard.component";
import Footer from "../footer/footer.component";

export const Home = (props) => {
    return (
        <div className="homepage">
            <Header></Header>

            <NavBar></NavBar>

            <Dashboard></Dashboard>

            <Footer></Footer>
        </div>
    )

}
export default Home;