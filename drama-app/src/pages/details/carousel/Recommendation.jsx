/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


import Carousel from "../../../components/carousel/Carousel";
import UseFeching from '../../../hooks/UseFeching'


const Recommendation = ({ mediaType, id }) => {
    const { data, loading, error } = UseFeching(`/${mediaType}/${id}/recommendations`);

    return (
        <Carousel
            title="Recommendations"
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Recommendation;