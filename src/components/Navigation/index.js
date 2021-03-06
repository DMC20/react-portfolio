import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

function Nav() {

    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h4" sx={{ flexGrow: 4 }}>
                My Portfolio
              </Typography>
              <Button color="inherit" component={Link} to='./'>About</Button>
              <Button color="inherit" component={Link} to='./projects'>Projects</Button>
              <Button color="inherit" component={Link} to='./resume'>Resume</Button>
              <Button color="inherit" component={Link} to='./contact'>Reach Out</Button>
            </Toolbar>
          </AppBar>
        </Box>
      );
}

export default Nav;