import { useSelector } from 'react-redux';
import UsuarioSearch from './UsuarioSearch';
import NewUsuario from './NewUsuario';
import { useDispatch } from 'react-redux';
import NavBar from '../../components/ui/Layout/NavBar';
import { Box } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

const Usuario = () => {
  const usuario = useSelector((state) => state.usuarioReducer);
  const auth = useSelector((state) => state.autenticacaoReducer);
  const dispatch = useDispatch();
  return (
    <>
      <NavBar />

      {usuario.page === 1 ? (
        <UsuarioSearch usuario={usuario} dispatch={dispatch} auth={auth} />
      ) : (
        <NewUsuario usuario={usuario} dispatch={dispatch} auth={auth} />
      )}
    </>
  );
};
export default Usuario;
