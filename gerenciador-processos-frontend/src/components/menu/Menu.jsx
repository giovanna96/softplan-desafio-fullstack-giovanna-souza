import { Card, CardContent, Divider, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import NavBar from '../ui/Layout/NavBar';
import Grid from '@mui/material/Unstable_Grid2';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import ArticleIcon from '@mui/icons-material/Article';
import { useNavigate } from 'react-router-dom';

const Menu = () => {
  const auth = useSelector((state) => state.autenticacaoReducer);
  const papeis = auth.roles.split(',');
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <Grid
        container
        alignItems="center"
        style={{ paddingTop: '1%', paddingLeft: '1%', minWidth: 300 }}
        direction="row"
        rowSpacing={2}
      >
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Módulos
          </Typography>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          {papeis.includes('ROLE_ADMIN') ? (
            <Card
              sx={{ width: 220, height: 200 }}
              style={{ backgroundColor: '#f5f5f5' }}
              onClick={() => navigate('/usuario')}
            >
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" color="text.secondary">
                  Cadastro Usuários
                </Typography>
                <AccountCircleIcon color="primary" sx={{ fontSize: 100 }} />
              </CardContent>
            </Card>
          ) : (
            ''
          )}
        </Grid>
        <Grid item xs={12}>
          {papeis.includes('ROLE_TRIADOR') ? (
            <Card
              sx={{ width: 220, height: 200 }}
              style={{ backgroundColor: '#f5f5f5' }}
            >
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" color="text.secondary">
                  Cadastro Processos
                </Typography>
                <AutoAwesomeMotionIcon color="primary" sx={{ fontSize: 100 }} />
              </CardContent>
            </Card>
          ) : (
            ''
          )}
        </Grid>
        <Grid item xs={12}>
          {papeis.includes('ROLE_FINALIZADOR') ? (
            <Card
              sx={{ width: 220, height: 200 }}
              style={{ backgroundColor: '#f5f5f5' }}
            >
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" color="text.secondary">
                  Cadastro Parecer
                </Typography>
                <ArticleIcon color="primary" sx={{ fontSize: 100 }} />
              </CardContent>
            </Card>
          ) : (
            ''
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Menu;
