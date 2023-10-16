import './Home.css'
import Popular from './Popular/Popular'
import TopRated from './TopRated/TopRated'
import HeroBanner from './hearobanner/HeroBanner'
import Trending from './tranding/Trending'
const Home = () => {
  return (
    <div>

      <HeroBanner/>
      <Trending/>
      <Popular/>
      <TopRated/>
    </div>
  )
}

export default Home