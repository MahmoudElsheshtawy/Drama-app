
import { useState } from "react";
import Carousel from "../../../components/Carousel/Carousel";
import ContentWrapper from "../../../components/ContentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/SwitchTabs/SwitchTabs";
import UseFeching from "../../../hooks/UseFeching";
import './Trending.css'
const Trending = () => {
    const [endpoint, setEndpoint] = useState("day");

    const { data, loading } = UseFeching(`/trending/movie/${endpoint}`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Day" ? "day" : "week");
    };

    return (
        <div className="carouselSection">
            <ContentWrapper>
            <div className="container" >
            <span className="carouselTitle" >Trending</span> 
                 <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
            </div>
                
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} />
        </div>
    );
};

export default Trending;