import {
  Box,
  Button,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { change } from '../../redux/actions/usuarios.action';
const UsuarioTable = (props) => {
  const { usuario, dispatch } = props;

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
                      <TableCell></TableCell>
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
          onClick={() => dispatch(change({ page: 2 }))}
        >
          Novo
        </Button>
      </Grid>
    </>
  );
};

export default UsuarioTable;
