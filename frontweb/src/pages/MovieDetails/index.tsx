import { AxiosRequestConfig } from 'axios';
import Comments from 'components/Comments';
import Search from 'components/Search';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestBackend } from 'requests';

import { Details } from 'types/details';
import { Review } from 'types/review';
import './styles.css';

type UrlParams = {
  movieId: string;
};
const MovieDetails = () => {
  const [details, setDetails] = useState<Details>();
  const [review, setReview] = useState<Review[]>([]);
  const { movieId } = useParams<UrlParams>();

  useEffect(() => {
    const params: AxiosRequestConfig = {
      url: `/movies/${movieId}`,
      withCredentials: true,
    };
    requestBackend(params).then((response) => {
      setDetails(response.data);
    });
  }, [movieId]);

  useEffect(() => {
    const params: AxiosRequestConfig = {
      url: `/movies/${movieId}/reviews`,
      withCredentials: true,
    };
    requestBackend(params).then((response) => {
      setReview(response.data);
    });
  }, [movieId]);

  return (
    <div className="container-card">
      <h1 className="text-movie-details">
        Tela detalhes do filme id: {details?.id}
      </h1>
      <p className="text-movie-details">Titulo: {details?.title}</p>
      <p className="text-movie-details">Genre: {details?.genre.name}</p>
      <Search />
      <div className="container-card-coments">
        {review.map((item) => (
          <div key={item.id}>
            <Comments name={item.user.name} comments={item.text} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default MovieDetails;
