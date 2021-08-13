import ButtonIcon from 'components/ButtonIcon';
import { useHistory} from 'react-router-dom';
import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { requestBackendLogin } from 'requests';
import { getAuthData, saveAuthData } from 'storage';
import { AuthContext } from 'AuthContext';
import { getTokenData } from 'auth';

import './styles.css';

type FormData = {
  username: string;
  password: string;
};

const LoginCard = () => {

  const [hasError, setHasError] = useState(false);
  const { setAuthContextData } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const history = useHistory();
  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then((response) => {
        saveAuthData(response.data);
        const token = getAuthData().access_token;
        console.log('TOKEN GERADO: ' + token);
        setHasError(false);
        setAuthContextData({
          authenticated: true,
          tokenData: getTokenData(),
        });
        console.log('SUCESSO', response);
        history.push('/movies');
      })
      .catch((error) => {
        setHasError(true);
        console.log('ERRO', errors);
      });
  };
  return (
    <div className="main">
      <div className="container-image-main">
        <h1>Avalie Filmes</h1>
        <p>Diga o que você achou do seu filme favorito</p>
        <MainImage />
      </div>

      <div className="login-card">
        <h1>LOGIN</h1>
        {hasError && (
          <div className="alert alert-danger">Usuário ou senha inválidos!</div>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('username', {
              required: 'Campo obrigatório',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email inválido',
              },
            })}
            type="text"
            placeholder="Email"
            name="username"
          />

          <div className="invalid-feedback d-block">
            {errors.username?.message}
          </div>

          <input
            {...register('password', {
              required: 'Campo obrigatório',
            })}
            type="password"
            placeholder="Senha"
            name="password"
          />
          <div className="invalid-feedback d-block">
            {errors.password?.message}
          </div>

          <ButtonIcon text="Fazer Login" />
        </form>
      </div>
    </div>
  );
};

export default LoginCard;
