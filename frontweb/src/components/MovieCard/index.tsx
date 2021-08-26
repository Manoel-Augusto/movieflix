import './styles.css';
import imgCard from '../../assets/images/img-card.png';
import { Movie } from 'types/movie';

type Props = {
  movie: Movie;
};
const MovieCard = ({movie}:Props) => {
  return (
    <div className="movie-card-container">
      <img src={imgCard} alt="img-card" />
      <div className="movie-card-info-container">
          <h1 className="movie-card-title">{movie.title}</h1>
          <h4 className="movie-card-year">{movie.year}</h4>
          <h4 className="movie-card-sub-titler">{movie.subTitle}</h4>
          
      </div>
    </div>
  );
};
export default MovieCard;
