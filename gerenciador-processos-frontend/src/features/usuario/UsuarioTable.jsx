import {
  Button,
  Checkbox,
  Divider,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { change, deleteUsuario } from '../../redux/actions/usuarios.action';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const UsuarioTable = (props) => {
  const { usuario, dispatch, auth } = props;

  return (
    <>
      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        justifyItems="center"
        style={{ paddingTop: 100 }}
      >
        <Grid xs={12}>
          <Typography variant="h4" gutterBottom>
            Consulta de Usuários
          </Typography>
          <Divider />
        </Grid>
        <Grid xs={10}>
          <TableContainer>
            <Table size="small">
              <TableHead>
                <TableRow style={{ background: '#bfbfbf47' }}>
                  <TableCell>Cód.</TableCell>
                  <TableCell>Nome</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Papeis</TableCell>
                  <TableCell>Ativo</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {usuario.itens.length > 0 ? (
                  usuario.itens?.map((item, index) => (
                    <TableRow>
                      <TableCell key={index}>{item.id}</TableCell>
                      <TableCell key={index}>{item.nome}</TableCell>
                      <TableCell key={index}>{item.email}</TableCell>
                      <TableCell key={index}>{item.papeis}</TableCell>
                      <TableCell key={index}>
                        <Checkbox
                          name="checkedB"
                          color="primary"
                          checked={item.ativo}
                          disabled
                        />
                      </TableCell>
                      <TableCell key={index}>
                        <IconButton
                          onClick={() =>
                            dispatch(
                              change({ item: item, page: 2, isEditar: true }),
                            )
                          }
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          onClick={() => {
                            if (
                              window.confirm(
                                'Deseja realmente excluir o intem?',
                              )
                            ) {
                              dispatch(
                                deleteUsuario({ auth: auth, id: item.id }),
                              );
                            }
                          }}
                        >
                          <DeleteForeverIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={6}>
                      Nenhum registro encontrado
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent={'flex-end'}
        style={{ paddingTop: '1%', paddingRight: '10%' }}
      >
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={() =>
            dispatch(change({ limparDados: true, page: 2, isEditar: false }))
          }
        >
          Novo
        </Button>
      </Grid>
    </>
  );
};

export default UsuarioTable;
