import Comments from 'components/Comments';
import Search from 'components/Search';
import './styles.css';

const MovieDetails = () => {
  return (
    <div className="container-card">
      <h1 className="text-movie-details">Tela detalhes do filme id: 1</h1>
      <Search />
      <div className="container-card-coments">
        <Comments />
        <Comments />
        <Comments />
        <Comments />
      </div>
    </div>
  );
};
export default MovieDetails;
