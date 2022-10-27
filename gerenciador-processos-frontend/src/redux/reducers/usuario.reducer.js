import { actionTypes } from '../actions/usuarios.action';

const initialState = {
  itens: [],
  item: {
    id: '',
    nome: '',
    email: '',
    login: '',
    senha: '',
    ativo: false,
    papeis: '',
  },
  erro: {
    erroNome: false,
    erroEmail: false,
    erroLogin: false,
    erroSenha: false,
  },
  msgErro: '',
  page: 1,
  isEditar: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE:
      if (payload.hasOwnProperty('limparDados') && payload.limparDados) {
        payload.item = initialState.item;
      }
      return { ...state, ...payload };

    case actionTypes.ADD:
      return { ...state, ...payload };

    default:
      return state;
  }
};
