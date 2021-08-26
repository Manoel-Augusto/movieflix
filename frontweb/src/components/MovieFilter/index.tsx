import './styles.css';
import { BASE_URL, requestBackend } from '../../requests';
import { Genre } from 'types/genre';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';

export type GenreFilterData = {
  name: string;
  genre: Genre | null;
};

type Props = {
  onSubmitFilter: (data: GenreFilterData) => void;
};

const MovieFilter = ({ onSubmitFilter }: Props) => {
  const [selectGenres, setSelectGenres] = useState<Genre[]>([]);
  const { handleSubmit, setValue, getValues, control } =
    useForm<GenreFilterData>();

  const onSubmit = (formData: GenreFilterData) => {
    onSubmitFilter(formData);
  };

  const handleChangeGenre = (value: Genre) => {
    setValue('genre', value);

    const obj: GenreFilterData = {
      name: getValues('name'),
      genre: getValues('genre'),
    };

    onSubmitFilter(obj);
  };

  useEffect(() => {
    requestBackend({
      method: 'GET',
      baseURL: BASE_URL,
      url: `/genres`,
      withCredentials: true,
    }).then((response) => {
      setSelectGenres(response.data);
    });
  }, []);

  return (
    <div className="movie-filter-container">
      <form onSubmit={handleSubmit(onSubmit)} className="movie-filter-form">
        <div className="movie-filter-name-container">
          <Controller
            name="genre"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                options={selectGenres}
                isClearable
                placeholder="Genero"
                classNamePrefix="genre-filter-select"
                onChange={(value) => handleChangeGenre(value as Genre)}
                getOptionLabel={(genre: Genre) => genre.name}
                getOptionValue={(genre: Genre) => String(genre.id)}
              />
            )}
          />
        </div>
      </form>
    </div>
  );
};
export default MovieFilter;
