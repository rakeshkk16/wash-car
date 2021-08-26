import Category from "../category/category.component";
import AboutUs from "../aboutus/aboutus.component";
import Services from "../services/services.component";
import Facts from "../facts/facts.component";
import WashingPlan from "../washingplans/washingplan.component";
import Location from "../location/location.component";
import Team from "../team/team.component";
import Testimonial from "../testimonials/testimonial.component";
import Blogs from "../blogs/blogs.component";






export const Dashboard = (props) => {
    return (
        <>
            <Category></Category>

            <AboutUs></AboutUs>

            <Services></Services>

            <Facts></Facts>

            <WashingPlan></WashingPlan>

            <Location></Location>

            <Team></Team>

            <Testimonial></Testimonial>

            <Blogs></Blogs>

        </>
      )

}
export default Dashboard;