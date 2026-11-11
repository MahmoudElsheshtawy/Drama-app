
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

    const { data, loadingg } = UseFeching("/movie/upcoming");

    useEffect(() => {
        const bg =
            url.backdrop +
            data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;

        setBackground(bg);
    }, [url, data]);

    // Search when pressing Enter
    const searchQueryHandler = (event) => {
        if (event.key === "Enter") {
            handleClick();
        }
    };

    // Search button handler
    const handleClick = () => {
        const trimmedQuery = query.trim();

        // Prevent empty search
        if (!trimmedQuery) return;

        navigate(`/search/${encodeURIComponent(trimmedQuery)}`);
    };

    return (
        <div className="heroBanner">

            {!loadingg && background && (
                <div className="backdrop-img">
                    <Img src={background} />
                </div>
            )}

            <div className="opacity-layer"></div>

            <ContentWrapper>
                <div className="heroBannerContent">

                    <span className="title">
                        Welcome.
                    </span>

                    <span className="subTitle">
                        Millions of movies, TV shows and people to discover.
                        Explore now.
                    </span>

                    <div className="searchInput">

                        <div className="inputbox">
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyDown={searchQueryHandler}
                                placeholder="Search for a movie or tv show...."
                            />

                            <i></i>
                        </div>

                        <button
                            type="button"
                            onClick={handleClick}
                            disabled={!query.trim()}
                        >
                            Search
                        </button>

                    </div>
                </div>
            </ContentWrapper>

        </div>
    );
};

export default HeroBanner;
