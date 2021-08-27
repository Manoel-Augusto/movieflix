import './styles.css';
import imgCard from '../../assets/images/img-card.png';
import { Movie } from 'types/movie';

type Props = {
  movie: Movie;
};
const MovieCardDetails = ({ movie }: Props) => {
  return (
    <div className="movie-card-details-container">
      <img src={imgCard} alt="img-card-details-" />
      <div className="info-container">
        <div className="movie-card-details-info-container">
          <h1 className="movie-card-details-title">{movie.title}</h1>
          <h4 className="movie-card-details-year">{movie.year}</h4>
          <h4 className="movie-card-details-sub-titler">{movie.subTitle}</h4>
        </div>
        <div className="movie-card-details-synopsis">{movie.synopsis}</div>
      </div>
    </div>
  );
};
export default MovieCardDetails;
