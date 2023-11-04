/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
import {fetchDataFromApi} from './utils/api'
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./Store/Homeslice";
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
  // console.log(url)
 useEffect(()=>{
  testingapi();
 },[])
 const testingapi =()=>{
  fetchDataFromApi("/configuration").then(
    (res)=>{
      // console.log(res);
      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
    };
    // console.log(url)
      dispatch(getApiConfiguration(url));
    }
  )
 }
  return (
    <>
          <BrowserRouter>
            <Header/>
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
