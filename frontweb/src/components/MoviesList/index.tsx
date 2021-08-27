import { AxiosRequestConfig } from 'axios';
import MovieCard from 'components/MovieCard';
import MovieFilter, { GenreFilterData } from 'components/MovieFilter';
import Pagination from 'components/Pagination';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { requestBackend } from 'requests';
import { Movie } from 'types/movie';
import { SpringPage } from 'types/vendor/spring';

import './styles.css';

type ControlComponentsData = {
  activePage: number;
  filterData: GenreFilterData;
};
const MoviesList = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();
  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
      filterData: { genre: null },
    });

  const handlePageChange = (pageNumber: number) => {
    setControlComponentsData({
      activePage: pageNumber,
      filterData: controlComponentsData.filterData,
    });
  };
  const handleSubmitFilter = (data: GenreFilterData) => {
    setControlComponentsData({
      activePage: 0,
      filterData:data,
    });
  };

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: 'movies',
      params: {
        page: controlComponentsData.activePage,
        size: 4,
        genreId: controlComponentsData.filterData.genre?.id,
      },
      withCredentials: true,
    };
    requestBackend(params).then((response) => {
      setPage(response.data);
    });
  }, [controlComponentsData]);
  return (
    <div className="list-container">
      <div className="row">
        <MovieFilter onSubmitFilter={handleSubmitFilter} />
        {page?.content.map((movie) => (
          <div className="col-lg-4 col-xl-3 movies" key={movie.id}>
            <Link to={`/movies/${movie.id}`}>
              <MovieCard movie={movie} />
            </Link>
          </div>
        ))}
      </div>
      <div className="row">
        <Pagination
          pageCount={page ? page.totalPages : 0}
          range={3}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
};
export default MoviesList;
