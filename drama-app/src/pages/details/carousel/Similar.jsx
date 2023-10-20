/* eslint-disable react/prop-types */
import Carousel from "../../../components/Carousel/Carousel";
import UseFeching from '../../../hooks/UseFeching'
const Similar = ({ mediaType, id }) => {

    const { data, loading, error } = UseFeching(`/${mediaType}/${id}/similar`);

    const title = mediaType === "tv" ? "Similar TV Shows" : "Similar Movies";

    return (
        <Carousel
            title={title}
            data={data?.results}
            loading={loading}
            endpoint={mediaType}
        />
    );
};

export default Similar;