import JumbotronHome from "./JumbotronHome/JumbotronHome";
import Footer from "../../component/Footer/Footer";
import Navigation from "../../component/Navigation";
import React from "react";
import CarouselElement from "./CarouselElement";

export default function Home() {
    return(
        <div>
            <Navigation/>
            {/*<CarouselElement/>*/}
            <JumbotronHome/>
            {/*<Footer/>*/}
        </div>
    )
}