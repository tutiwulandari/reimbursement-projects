import JumbotronHome from "./JumbotronHome";
import Footer from "../../component/Footer/Footer";
import Navigation from "../../component/Navigation";
import React from "react";

export default function Home() {
    return(
        <div>
            <Navigation/>
            <JumbotronHome/>
            {/*<Footer/>*/}
        </div>
    )
}