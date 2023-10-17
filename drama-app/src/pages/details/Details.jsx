import './Details.css'
import DetailsBanner from './detailsBanner/DetailsBanner'
import UseFeching from '../../hooks/UseFeching';
import { useParams } from 'react-router-dom';
import Cast from './cast/Cast';
const Details = () => {
  const { mediaType, id } = useParams();
  const { data, loading } = UseFeching(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = UseFeching(`/${mediaType}/${id}/credits`)
  return (
    <div>

      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew}/>
      <Cast/>
    </div>
  )
}

export default Details