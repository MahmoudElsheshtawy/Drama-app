/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

import { useRef } from "react";
import { BsFillArrowLeftCircleFill,BsFillArrowRightCircleFill,} from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import './Carousel.css'
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import Img from "../lazyLoadeimg/Img";
import CircleRating from "../CircleRating/CircleRating";
import PosterFallback from "../../assets/no-poster.png";
const Carousel = ({data,loading,endpoint,title }) => {
  const carouselContainer = useRef();
  const { url } = useSelector((state) => state.Home);
    const navigate = useNavigate();

    const navigation = (dir) => {
      const container = carouselContainer.current;

      const scrollAmount =
          dir === "left"
              ? container.scrollLeft - (container.offsetWidth + 20)
              : container.scrollLeft + (container.offsetWidth + 20);

      container.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
      });
  };
  const skItem = () => {
    return (
        <div className="skeletonItem">
            <div className="posterBlock skeleton"></div>
            <div className="textBlock">
                <div className="title skeleton"></div>
                <div className="date skeleton"></div>
            </div>
        </div>
    );
};
  return (
    <div className="carousel">
      
      <ContentWrapper>
      {title  && <div className="carouselTitle" style={{position:"absolute",top:'-30px'}}>{title }</div>}
           
            <BsFillArrowLeftCircleFill
                    className="carouselLeftNav arrow"
                    onClick={() => navigation("left")}
                />
                <BsFillArrowRightCircleFill
                    className="carouselRighttNav arrow"
                    onClick={() => navigation("right")}
                />
           

                {!loading ?
                (<div className="carouselItems" ref={carouselContainer}>
 
                 {data?.map((item)=>{

                  const posterUrl = item.poster_path
                  ? url.poster + item.poster_path
                  : PosterFallback;
                  return(
                   <div className="carouseItem" key={item.id}
                   onClick={() =>
                    navigate(`/${item.media_type || endpoint}/${ item.id }`)}
                >
                                    <div className="posterBlock">
                                        <Img src={posterUrl} className='img-poster' />
                                        <CircleRating       
                                         rating={item.vote_average.toFixed(
                                              1)}/>
                                       </div>
                                       <span className="textBlock">{item.title || item.name}</span>
                                       <span className="date-m"> {dayjs(item.release_date || item.first_air_date).format(
                                                "MMM D, YYYY"
                                            )}</span>
                   </div>
                  )
                 })}


                </div>)
                :( 
                
                <div className="loadingSkeleton">
                    {skItem()}
                    {skItem()}
                    {skItem()}
                    {skItem()}
                    {skItem()}
            </div>
            )}
      </ContentWrapper>
     
    </div>
  )
}

export default Carousel