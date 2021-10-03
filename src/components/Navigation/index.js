import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import '@fontsource/roboto';


function Nav() {

    return (
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <h1>My Portfolio</h1>
              </Typography>
              <Button color="inherit" a href='./about'>About Me</Button>
              <Button color="inherit" a href='./projects'>Projects</Button>
              <Button color="inherit" a href="./contact">Reach Out</Button>
              <Button color="inherit" a href='./resume'>Resume</Button>
            </Toolbar>
          </AppBar>
        </Box>
      );
}

export default Nav;