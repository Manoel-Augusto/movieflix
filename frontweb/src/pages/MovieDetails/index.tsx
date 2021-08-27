import { hasAnyRoles } from 'auth';
import Comments from 'components/Comments';
import CommentsInput from 'components/CommentsInput';
import MovieCardDetails from 'components/MovieCardDetails';
import { useCallback } from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestBackend } from 'requests';
import { Movie } from 'types/movie';
import { Review } from 'types/review';
import './styles.css';
type UrlParams = {
  movieId: string;
};
const MovieDetails = () => {
  const [review, setReview] = useState<Review[]>([]);
  const [movie, setMovie] = useState<Movie>();
  const { movieId } = useParams<UrlParams>();
  const [notFoundReview] = useState<boolean>(false);

  const getReviews = useCallback(() => {
    requestBackend({
      url: `movies/${movieId}/reviews`,
      withCredentials: true,
    })
      .then((response) => {
        setReview(response.data);
      })
      .catch(() => {});
  }, [movieId]);

  useEffect(() => {
    getReviews();
  }, [getReviews]);

  useEffect(() => {
    requestBackend({
      url: `movies/${movieId}`,
      withCredentials: true,
    }).then((response) => {
      setMovie(response.data);
    });
  }, [movieId]);

  return (
    <div className="container-card">
      {movie !== undefined ? <MovieCardDetails movie={movie} /> : ''}
      {hasAnyRoles(['ROLE_MEMBER']) && (
        <CommentsInput onCreate={getReviews} />
      )}{' '}
      <div className="container-card-coments">
        {notFoundReview === false ? (
          review.map((item) => (
            <div key={item.id}>
              <Comments name={item.user.name} comments={item.text} />
            </div>
          ))
        ) : (
          <div className="notFound">Ainda não há avaliações !</div>
        )}
      </div>
    </div>
  );
};
export default MovieDetails;
