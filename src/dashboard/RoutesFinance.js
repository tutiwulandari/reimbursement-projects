import Header from "./dashboardHc/Header";
import Content from "./dashboardHc/Content";
import Footer from "./dashboardHc/Footer";
import MenuFinance from "./dashboardFinance/MenuFinance";

function RoutesFinance() {
    return(
        <div>
            <Header/>
            <MenuFinance/>
            <Content />
            <Footer />
        </div>
    )
}
export default RoutesFinance