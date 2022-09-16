import React, {FC} from "react"
import Slider from "react-slick"
import ContentLoader from "react-content-loader"
import titles from '../../Data/titles'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './slick-fix.css'
interface Props {
    
}
const settings = {
    slidesToShow: 6,
    slidesToScroll: 3,
}
const Slide: FC<Props> = () => {
    return ( 
        <div className="min-h-full min-w-100 relative">
            <Slider {...settings}>
                {titles.map((title) => (
                    <div className="w-64 h-64 bp4-skeleton">
                        <img className="cover" src={require('../../assets/img/' + title.imgname + '.jpg')}></img>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
export default Slide;