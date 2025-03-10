/* eslint-disable no-unsafe-optional-chaining */
import './SearchResult.css'
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import  InfiniteScroll from "react-infinite-scroll-component";
import { fetchDataFromApi } from "../../utils/api";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
// import noResults from "../../assets/no-results.png";
import Spinner from '../../components/spinner/Spinner';
import MovieCard from '../../components/movieCard/MovieCard';

const SearchResult = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const { query } = useParams();
  const fetchInitialData = () => {
    setLoading(true);
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
        (res) => {
            setData(res);
            setPageNum((prev) => prev + 1);
            setLoading(false);
        }
    );
};
// next page
const fetchNextPageData = () => {
  fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
      (res) => {
          if (data?.results) {
              setData({
                  ...data,
                  results: [...data?.results, ...res.results],
              });
          } else {
              setData(res);
          }
          setPageNum((prev) => prev + 1);
      }
  );
};
useEffect(()=>{
  setPageNum(1);
  fetchInitialData();
},[query])
  return (
    <div className="searchResultsPage">
    {loading && <Spinner initial={true} />}
    {!loading && (
        <ContentWrapper>
            {data?.results?.length > 0 ? (
                <>
                  <div className="contanier">
                  <div className="pageTitle" style={{fontSize:"20px"}}>
                        {`Search ${
                            data?.total_results > 1
                                ? "results"
                                : "result"
                        } of '${query}'`}
                    </div>
                    <InfiniteScroll
                        className="content"
                        dataLength={data?.results?.length || []}
                        next={fetchNextPageData}
                        hasMore={pageNum <= data?.total_pages}
                        loader={<Spinner />}
                    >
                        {data?.results.map((item, index) => {
                            if (item.media_type === "person") return;
                            return (
                                <MovieCard
                                    key={index}
                                    data={item}
                                    fromSearch={true}
                                />
                            );
                        })}
                    </InfiniteScroll>
                  </div>
                </>
            ) : (
                <div className="resultNotFound"style={{width:"100%"}} >
                    Sorry, Results not found!
                </div>
            )}
        </ContentWrapper>
    )}
</div> 
  )
}

export default SearchResult