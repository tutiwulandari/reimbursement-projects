import Header from "./dashboardHc/Header";
import Menu from "./dashboardHc/Menu";
import Footer from "./dashboardHc/Footer";
import DashboardContent from "./dashboardHc/DashboardContent";


function RoutesHc() {
    return(
        <div>
            <Header/>
            <Menu />
            <DashboardContent/>
            <Footer />
        </div>
    )
}
export default RoutesHc