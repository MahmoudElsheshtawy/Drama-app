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

    const { data, loading } = UseFeching("/movie/upcoming");

    // اختيار صورة خلفية عشوائية بعد وصول البيانات
    useEffect(() => {
        const results = data?.results;
        if (!results?.length) return;

        const path = results[Math.floor(Math.random() * results.length)]?.backdrop_path;
        if (path) setBackground(url.backdrop + path);
    }, [url, data]);

    // زر البحث + Enter: البحث الفاضي أو المسافات بس مش بيعمل حاجة
    const handleClick = () => {
        const q = query.trim();
        if (!q) return;
        navigate(`/search/${encodeURIComponent(q)}`);
    };

    const searchQueryHandler = (event) => {
        if (event.key === "Enter") handleClick();
    };

    return (
        <div className="heroBanner">
            {!loading && background && (
                <div className="backdrop-img">
                    <Img src={background} />
                </div>
            )}

            <div className="opacity-layer"></div>

            <ContentWrapper>
                <div className="heroBannerContent">
                    <span className="title">Welcome.</span>
                    <span className="subTitle">
                        Millions of movies, TV shows and people to discover.
                        Explore now.
                    </span>

                    <div className="searchInput">
                        <div className="inputbox">
                            <input
                                type="text"
                                required
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