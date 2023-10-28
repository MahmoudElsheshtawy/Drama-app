
import { useState } from "react";

import Carousel from "../../../components/Carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/SwitchTabs/SwitchTabs";

import UseFeching from "../../../hooks/UseFeching";

const TopRated   = () => {
    const [endpoint, setEndpoint] = useState("movie");

    const { data, loading } = UseFeching(`/${endpoint}/top_rated`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    };

    
    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle" style={{marginRight:'-30px'}}>Top Rated</span>
                <SwitchTabs data={["Movies", "Series "]} onTabChange={onTabChange} />
                
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} endpoint={endpoint} />
        </div>
    );
};

export default TopRated  ;