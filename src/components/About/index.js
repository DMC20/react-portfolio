import React from "react";
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  });

const About = () => {
 
    return(
        <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1, marginTop: 10 }}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 200, height: 200 }}>
              <Img alt="me" src="./static/me.jpeg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1" component="div">
                  Hi Everyone!
                </Typography>
                <Typography variant="body2" gutterBottom>
                  My name is Daniel Carazo and welcome to my portfolio. I am a currently a Full Stack Developer in progress seeking an opportunity in the tech world.
                  Please take a stroll on my page to see some of the projects I have been a part of, my skills, and click on one of the links below so we can connect!
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    )
}

export default About;