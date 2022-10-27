import {
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
import {
  addUsuario,
  change,
  editUsuario,
} from '../../redux/actions/usuarios.action';

const NewUsuario = (props) => {
  const { usuario, dispatch, auth } = props;
  const handleSubmit = (event) => {
    if (!usuario.isEditar) {
      dispatch(addUsuario({ auth, usuario: usuario.item }));
    } else {
      dispatch(editUsuario({ auth, usuario: usuario.item }));
    }
  };

  return (
    <>
      <form onSubmit={() => handleSubmit()}>
        <Grid
          container
          alignItems="center"
          style={{ paddingTop: '1%', paddingLeft: '1%', minWidth: 300 }}
          direction="row"
          rowSpacing={0.1}
        >
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom>
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
          <Grid item xs={12}>
            <TextField
              variant="standard"
              id="codUsr"
              label="Código"
              value={usuario.item.id}
              disabled
            />
          </Grid>
          <Grid item xs={12}>
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
          <Grid item xs={12}>
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

          <Grid item xs={3}>
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
          <Grid item xs={3}>
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
          <Grid item xs={12}>
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
          <Grid item xs={12}>
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
