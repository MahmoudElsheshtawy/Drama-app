/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./HeroBanner.css";
import UseFeching from "../../../hooks/UseFeching";
import Img from "../../../components/lazyLoadeimg/Img";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";

const HeroBanner = () => {

    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();




    const { url } = useSelector((state) => state.Home);


    console.log(url.backdrop)
    const { data, loadingg } = UseFeching("/movie/upcoming");
      console.log(data)
   
    useEffect(() => {
        const bg = 
        url.backdrop +
        data?.results?.[Math.floor(Math.random() * 20 )]?.backdrop_path;
       setBackground(bg);
       console.log(bg)
    }, [url]);
    console.log(url.backdrop)

const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
        navigate(`/search/${query}`);
    }
};

const handleClick =()=>{
    navigate(`/search/${query}`)
}
    return (



    
        <div className="heroBanner">
                  {!loadingg && (
            <div className="backdrop-img">
                <Img src={background} />
            </div> 
        )};
        {/* <Img src={background} /> */}
           
<div className="opacity-layer"></div>
            <ContentWrapper>
      
            {/* <div className="backdrop-img">
                <Img src={background} />
            </div>  */}
                <div className="heroBannerContent">
                    <span className="title">Welcome.</span>
                    <span className="subTitle">
                        Millions of movies, TV shows and people to discover.
                        Explore now.
                    </span>
                    <div className="searchInput">
                            <div className="inputbox">
                            
                            <input
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={searchQueryHandler}
                            placeholder="Search for a movie or tv show...."
                            required="required" type="text"/>
                          
                            <i></i>
                           
                            </div>
                    
                        <button onClick={handleClick} >Search</button>
                    </div>
                </div>
            </ContentWrapper>
        </div>
    );
};

export default HeroBanner;