import { useEffect } from 'react'
import {fetchDataFromApi} from './utils/api'
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration, getGenrea } from "./store/homeSlice";

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
    
    </>
  )
}

export default App
