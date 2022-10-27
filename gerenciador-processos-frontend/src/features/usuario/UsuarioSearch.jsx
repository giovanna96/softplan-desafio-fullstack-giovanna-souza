import { useEffect } from 'react';
import { searchUsuarios } from '../../redux/actions/usuarios.action';
import UsuarioTable from './UsuarioTable';

const UsuarioSearch = (props) => {
  const { usuario, dispatch, auth } = props;
  useEffect(() => {
    dispatch(searchUsuarios(auth));
  }, []);
  return (
    <>
      <UsuarioTable usuario={usuario} dispatch={dispatch} auth={auth} />
    </>
  );
};
export default UsuarioSearch;
