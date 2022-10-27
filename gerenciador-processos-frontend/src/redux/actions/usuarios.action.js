import { Http } from '../../config/Http';

export const actionTypes = {
  CHANGE: 'CHANGE_USUARIO',
  ADD: 'ADD_USUARIO',
};

export const change = (payload) => ({
  type: actionTypes.CHANGE,
  payload,
});

export const searchUsuarios = (auth) => (dispatch) => {
  return Http.get('/usuario/listar', {
    auth: { username: auth.login, password: auth.senha },
  }).then((response) => {
    if (typeof response != undefined && response.status === 200) {
      dispatch(change({ itens: response.data }));
    }
  });
};

export const addUsuario =
  ({ auth, usuario }) =>
  (dispatch) => {
    return Http.post('/usuario/salvar', usuario, {
      auth: { username: auth.login, password: auth.senha },
    }).then((response) => {
      if (typeof response != undefined && response.status === 201) {
        dispatch(change({ limparDados: true, page: 1 }));
      }
    });
  };

export const editUsuario =
  ({ auth, usuario }) =>
  (dispatch) => {
    return Http.put('/usuario/atualizar?id=' + usuario.id, usuario, {
      auth: { username: auth.login, password: auth.senha },
    }).then((response) => {
      if (typeof response != undefined && response.status === 201) {
        dispatch(change({ limparDados: true, page: 1 }));
      }
    });
  };

export const deleteUsuario =
  ({ auth, id }) =>
  (dispatch) => {
    return Http.delete('/usuario/excluir?id=' + id, {
      auth: { username: auth.login, password: auth.senha },
    }).then((response) => {
      if (typeof response != undefined && response.status === 200) {
        dispatch(searchUsuarios(auth));
      }
    });
  };
