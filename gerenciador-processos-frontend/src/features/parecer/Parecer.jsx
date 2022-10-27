import { useSelector } from 'react-redux';
import ProcessoSearch from '../processo/ProcessoSearch';
import { useDispatch } from 'react-redux';
import NavBar from '../../components/ui/Layout/NavBar';
import { useEffect } from 'react';
import { changeProcesso } from '../../redux/actions/proocesso.action';
import NewParecer from './NewParecer';
import NewProcesso from '../processo/NewProcesso';

const Processo = () => {
  const processo = useSelector((state) => state.processoReducer);
  const parecer = useSelector((state) => state.parecerReducer);
  const auth = useSelector((state) => state.autenticacaoReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeProcesso({ isParecer: true, page: 1 }));
  }, []);
  return (
    <>
      <NavBar />

      {processo.page === 1 ? (
        <ProcessoSearch processo={processo} dispatch={dispatch} auth={auth} />
      ) : parecer.isCadastro ? (
        <NewParecer parecer={parecer} dispatch={dispatch} auth={auth} />
      ) : (
        <NewProcesso processo={processo} dispatch={dispatch} auth={auth} />
      )}
    </>
  );
};
export default Processo;
