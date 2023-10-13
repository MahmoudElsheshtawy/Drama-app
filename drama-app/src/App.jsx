import { useEffect } from 'react'
import {fetchDataFromApi} from './utils/api'
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGenrea } from "./store/homeSlice";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/SearchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import Err from "./pages/err/Err";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const dispatch = useDispatch();
  const {url}  = useSelector((state) => state.Home);
  console.log(url)
 useEffect(()=>{

  testingapi();

 },[])
 const testingapi =()=>{
  fetchDataFromApi("/movie/popular").then(
    (res)=>{
      console.log(res);
      dispatch(getApiConfiguration(res))
    }
  )
 }

  return (
    <>
          <h1>{url?.total_pages}</h1>
          <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:mediaType/:id" element={<Details />} />
                <Route path="/search/:query" element={<SearchResult />} />
                <Route path="/explore/:mediaType" element={<Explore />} />
                <Route path="*" element={<Err />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
