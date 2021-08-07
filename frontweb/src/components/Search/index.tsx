import ButtonSearch from 'components/ButtonSearch';
import './styles.css';

const Search = () => {
  return (
    <div className="search-container">
      <input type="text" placeholder="Deixe sua avaliação aqui" />
      <div className="btn-div">
        <ButtonSearch text="salvar avaliação" />
      </div>
    </div>
  );
};
export default Search;
