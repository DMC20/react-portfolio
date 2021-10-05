import React from "react";
import Box from '@mui/material/Box';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Typography, Button } from "@mui/material";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

function Footer() {

    return (
        <footer className='footer'>

            <Box px={{ xs: 3, sm:8 }} py={{ xs: 5, sm: 8 }} bgcolor='primary.main' color='white'>
              <Container maxWidth='lg'>
                <Grid>
                  <Grid item md= {12} sm={4}>
                    <Typography variant='h5' marginBottom={5}>
                      Click Below to Contact Me
                    </Typography>
                    <Button variant='contained' className='icons' a href='mailto: danielcarazo20@gmail.com' target='_blank' startIcon={<EmailIcon />} />
                    <Button variant='contained' className='icons' a href='https://www.linkedin.com/in/danielcarazo20/' target='_blank' startIcon={<LinkedInIcon />} />
                    <Button variant='contained' className='icons' a href='https://github.com/DMC20' target='_blank' startIcon={<GitHubIcon />} />
                  </Grid>
                </Grid>
              </Container>
            </Box>
        </footer>
    )
}

export default Footer;