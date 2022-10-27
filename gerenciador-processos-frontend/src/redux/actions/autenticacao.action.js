import { Http } from '../../config/Http';

export const actionTypes = {
  LOGAR: 'LOGAR_USUARIO',
  DESLOGAR: 'DESLOGAR_USUARIO',
};
export const logar = (dadosUsuario) => (dispatch) => {
  return Http.get('/usuario/verificar?login=' + dadosUsuario.login, {
    auth: {
      username: dadosUsuario.login,
      password: dadosUsuario.senha,
    },
  })
    .then(
      (response) =>
        typeof response != undefined &&
        dispatch(
          usuarioLogou({
            id: response.data.id,
            login: dadosUsuario.login,
            senha: dadosUsuario.senha,
            roles: response.data.papeis,
            page: 2,
          }),
        ),
    )
    .catch((error) => {
      if (error.response.status === 401) {
        console.log(error.message);
      } else {
        console.log(error.message);
      }
    });
};

export const usuarioLogou = (payload) => ({
  type: actionTypes.LOGAR,
  payload,
});
