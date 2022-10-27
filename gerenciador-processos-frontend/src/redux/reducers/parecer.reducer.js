import { actionTypes } from '../actions/parecer.action';

const initialState = {
  itens: [],
  item: {
    idProcesso: '',
    conteudoParecer: '',
    parecerExecutado: false,
  },
  erro: '',
  msgErro: '',
  page: 1,
  isCadastro: false,
  limparDados: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.CHANGE:
      if (payload.hasOwnProperty('limparDados') && payload.limparDados) {
        payload.item = initialState.item;
      }
      return { ...state, ...payload };

    default:
      return state;
  }
};
