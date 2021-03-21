import Header from "./dashboardHc/Header";
import Menu from "./dashboardHc/Menu";
import Content from "./dashboardHc/Content";
import Footer from "./dashboardHc/Footer";


function RoutesHc() {
    return(
        <div>
            <Header/>
            <Menu />
            <Content/>
            <Footer />
        </div>
    )
}
export default RoutesHc