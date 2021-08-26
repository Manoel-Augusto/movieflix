import { AxiosRequestConfig } from 'axios';
import MovieCard from 'components/MovieCard';
import MovieFilter from 'components/MovieFilter';
import Pagination from 'components/Pagination';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {requestBackend } from 'requests';
import { Movie } from 'types/movie';
import { SpringPage } from 'types/vendor/spring';

import './styles.css';

const MoviesList = () => {
  const [page, setPage] = useState<SpringPage<Movie>>();

  const getMovies = (pageNumber: number) => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies',
      params: {
        page: pageNumber,
        size: 3,
      },
      withCredentials: true,
    };
    requestBackend(params).then((response) => {
      setPage(response.data);
    });
  };
  useEffect(() => {
    getMovies(0);
  },[]);
  return (
    <div className="list-container">
      <div className="row">
        <MovieFilter onSubmitFilter={() => {}} />
        {page?.content.map((movie) => (
          <div className="col-sm-6 col-lg-4 col-xl-3 listing" key={movie.id}>
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
          onChange={getMovies}
        />
      </div>
     
    </div>
  );
};
export default MoviesList;
