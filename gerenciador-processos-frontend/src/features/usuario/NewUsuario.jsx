import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  TextField,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import React from 'react';
import InputPass from '../../components/ui/Layout/InputPass';
import { addUsuario, change } from '../../redux/actions/usuarios.action';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { red } from '@mui/material/colors';

const NewUsuario = (props) => {
  const { usuario, dispatch, auth } = props;
  const handleSubmit = (event) => {
    dispatch(addUsuario({ auth, usuario: usuario.item }));
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  return (
    <>
      <form onSubmit={() => handleSubmit()}>
        <Grid
          container
          alignItems="center"
          style={{ paddingTop: '5%', paddingLeft: '1%', minWidth: 300 }}
          direction="row"
          rowSpacing={0.1}
        >
          <Grid xs={12}>
            <Typography variant="h4" gutterBottom sx={{ bgcolor: red }}>
              Cadastro de Usuário
            </Typography>
            <Divider />
          </Grid>
        </Grid>
        <Grid
          container
          alignItems="center"
          style={{ paddingLeft: '2%', minWidth: 300 }}
          direction="row"
          rowSpacing={0.1}
        >
          <Grid xs={12}>
            <TextField
              variant="standard"
              id="codUsr"
              label="Código"
              value={usuario.item.id}
              disabled
            />
          </Grid>
          <Grid xs={12}>
            <TextField
              variant="standard"
              id="nmUsr"
              label="Nome"
              value={usuario.item.nome}
              style={{ minWidth: '50%' }}
              onChange={(input) =>
                dispatch(
                  change({
                    item: { ...usuario.item, nome: input.target.value },
                  }),
                )
              }
              required
            />
          </Grid>
          <Grid xs={12}>
            <TextField
              variant="standard"
              id="emailUsr"
              label="Email"
              value={usuario.item.email}
              style={{ minWidth: '50%' }}
              onChange={(input) =>
                dispatch(
                  change({
                    item: { ...usuario.item, email: input.target.value },
                  }),
                )
              }
              required
            />
          </Grid>

          <Grid xs={3}>
            <TextField
              variant="standard"
              id="loginUsr"
              label="Login"
              value={usuario.item.login}
              onChange={(input) =>
                dispatch(
                  change({
                    item: { ...usuario.item, login: input.target.value },
                  }),
                )
              }
              required
            />
          </Grid>
          <Grid xs={3}>
            <InputPass
              valor={usuario.item.senha}
              handleChange={(input) =>
                dispatch(
                  change({
                    item: { ...usuario.item, senha: input.target.value },
                  }),
                )
              }
            />
          </Grid>
          <Grid xs={12}>
            <TextField
              variant="standard"
              id="papeisUsr"
              label="Papeis"
              value={usuario.item.papeis}
              style={{ minWidth: '50%' }}
              onChange={(input) =>
                dispatch(
                  change({
                    item: { ...usuario.item, papeis: input.target.value },
                  }),
                )
              }
              required
            />
          </Grid>
          <Grid xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  name="checkedB"
                  color="primary"
                  checked={usuario.item.ativo}
                  value={usuario.item.ativo}
                  onChange={(input) =>
                    dispatch(
                      change({
                        item: {
                          ...usuario.item,
                          ativo: input.target.checked,
                        },
                      }),
                    )
                  }
                />
              }
              style={{ paddingTop: '1%' }}
              label="Ativo"
            />
          </Grid>

          <Grid sm={1} style={{ paddingTop: '2%' }}>
            <Button variant="contained" size="large" type="submit">
              Cadastrar
            </Button>
          </Grid>
          <Grid sm={1} style={{ paddingTop: '2%' }}>
            <Button
              variant="contained"
              size="large"
              type="button"
              onClick={() => dispatch(change({ page: 1 }))}
            >
              Voltar
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
export default NewUsuario;
