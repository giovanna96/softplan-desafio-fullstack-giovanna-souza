import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import AutoAwesomeMotionIcon from '@mui/icons-material/AutoAwesomeMotion';
import LogoutIcon from '@mui/icons-material/Logout';
import React from 'react';

const NavBar = () => {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="fixed"
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          >
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                sx={{ mr: 2 }}
              >
                <AutoAwesomeMotionIcon />
              </IconButton>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
              >
                Gerenciador de Processos
              </Typography>

              <LogoutIcon />
            </Toolbar>
          </AppBar>
        </Box>
      </Box>
    </>
  );
};

export default NavBar;
