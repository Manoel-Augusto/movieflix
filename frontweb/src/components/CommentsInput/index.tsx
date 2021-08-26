import { AxiosRequestConfig } from 'axios';
import ButtonSearch from 'components/ButtonSave';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { BASE_URL, requestBackend } from 'requests';
import './styles.css';

type UrlParams = {
  movieId: string;
};

type Props = {
  onCreate: Function;
};
const CommentsInput = ({ onCreate }: Props) => {
  const { register, handleSubmit, setValue } = useForm<FormData>();
  const { movieId } = useParams<UrlParams>();

  type FormData = {
    text: string;
  };

  const onSubmit = (formData: FormData) => {
    const params: AxiosRequestConfig = {
      method: 'POST',
      baseURL: BASE_URL,
      url: `/reviews`,
      withCredentials: true,
      data: {
        text: formData.text,
        movieId: movieId,
      },
    };

    requestBackend(params).then(() => {
      onCreate();
    });
    setValue('text', '');
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register('text', {
            required: 'Campo obrigatório',
          })}
          placeholder="Deixe sua avaliação aqui"
          name="text"
        />

        <div className="btn-div">
          <ButtonSearch text="salvar avaliação" />
        </div>
      </form>
    </div>
  );
};
export default CommentsInput;
