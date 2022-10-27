import { Http } from '../../config/Http';

export const actionTypes = {
  CHANGE: 'CHANGE_PROCESSO',
  ADD: 'ADD_PROCESSO',
};

export const changeProcesso = (payload) => ({
  type: actionTypes.CHANGE,
  payload,
});

export const searchProcessos = (auth) => (dispatch) => {
  return Http.get('/processo/listar', {
    auth: { username: auth.login, password: auth.senha },
  }).then((response) => {
    if (typeof response !== 'undefined' && response.status === 200) {
      dispatch(changeProcesso({ itens: response.data }));
    }
  });
};

export const addProcesso =
  ({ auth, processo }) =>
  (dispatch) => {
    return Http.post('/processo/salvar', processo, {
      auth: { username: auth.login, password: auth.senha },
    }).then((response) => {
      if (typeof response !== 'undefined') {
        dispatch(changeProcesso({ limparDados: true, page: 1 }));
      }
    });
  };
