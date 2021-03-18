import Image2 from "../../assets/image/glasses2.svg"
import Image3 from "../../assets/image/travel.svg"



function CarouselElement() {
    return (
        <div>

            <div id="demo" className="carousel slide" data-ride="carousel">

                <ul className="carousel-indicators">
                    <li data-target="#image1" data-slide-to="0" className="active"/>
                    <li data-target="#image2" data-slide-to="1"/>
                    <li data-target="#image3" data-slide-to="2"/>
                </ul>

                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Image2} alt="Los Angeles" width="1100" height="500"/>
                    </div>
                    <div className="carousel-item">
                        <img src={Image3} alt="New York" width="1100" height="500"/>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#image1" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#image2" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>
        </div>
    )
}
export default CarouselElement;