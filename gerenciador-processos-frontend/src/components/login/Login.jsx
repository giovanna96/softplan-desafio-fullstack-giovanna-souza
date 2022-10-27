import {
  Button,
  Card,
  CardActions,
  CardHeader,
  Grid,
  TextField,
} from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logar } from '../../redux/actions/autenticacao.action';
import InputPass from '../ui/Layout/InputPass';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [dadosUsuario, setDadosUsuario] = React.useState({
    login: '',
    senha: '',
  });
  const auth = useSelector((state) => state.autenticacaoReducer);
  const handleChange = (event) => {
    setDadosUsuario({
      ...dadosUsuario,
      senha: event.target.value,
    });
  };
  const logarUsuario = () => {
    dispatch(logar(dadosUsuario)).then(navigate('/menu'));
  };

  return (
    <>
      <style>{'body { background-color: #293c50; }'}</style>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '80vh' }}
      >
        <Grid item xs={3}>
          <Card sx={{ width: 550, height: 450 }}>
            <CardHeader
              title="Login"
              style={{ backgroundColor: '#d1d1d1' }}
            ></CardHeader>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
              spacing={3}
              style={{ minHeight: '40vh' }}
            >
              <TextField
                id="standard-basic"
                label="Login"
                variant="standard"
                sx={{ paddingBottom: 5 }}
                value={dadosUsuario.login}
                onChange={(event) =>
                  setDadosUsuario({
                    ...dadosUsuario,
                    login: event.target.value,
                  })
                }
              />
              <InputPass
                valor={dadosUsuario.senha}
                handleChange={handleChange}
              />
              <CardActions sx={{ paddingTop: 10 }}>
                <Button
                  variant="contained"
                  size="large"
                  onClick={() => logarUsuario()}
                >
                  Entrar
                </Button>
              </CardActions>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
