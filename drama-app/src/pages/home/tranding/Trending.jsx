
import { useState } from "react";

// import Carousel from "../../../components/Carousel/Carousel";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTabs from "../../../components/SwitchTabs/SwitchTabs";

import UseFeching from "../../../hooks/UseFeching";

const Trending = () => {
    const [endpoint, setEndpoint] = useState("day");

    const { data, loading } = UseFeching(`/trending/movie/${endpoint}`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Day" ? "day" : "week");
    };

    return (
        <div className="carouselSection">
            <ContentWrapper>
                <span className="carouselTitle">Trending</span>
                <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
                
            </ContentWrapper>
            {/* <Carousel data={data?.results} loading={loading} /> */}
        </div>
    );
};

export default Trending;