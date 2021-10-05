import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Portfolio = () => {

    return(
        <Box sx={{ flexGrow: 1 }} marginTop={ 10 }>
        <Grid container spacing = 'center' spacing={8} >

          <Grid item xs={6}>
            <Card xs={{ maxWidth: 450 }}>
            <CardMedia
                component="img"
                alt="Run Buddy"
                height="140"
                image="./static/run-buddy.png"
            />
            <CardContent>
                <Typography variant="body2" gutterBottom variant='h6' color="text.secondary">
                Winter is just around the corner and that means endless food. Come sign up for Run Buddy to stay fit and reat for next summer!
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant='contained' size="large" target='_blank' a href='https://dmc20.github.io/run-buddy/'>Run Buddy</Button>
            </CardActions>
            </Card>
          </Grid>


        <Grid item xs={6}>
            <Card xs={{ maxWidth: 450 }}>
                <CardMedia
                    component="img"
                    alt="party event"
                    height="140"
                    image="./static/nightcap.jpeg"
                />
                <CardContent>
                    <Typography variant="body2" gutterBottom variant ='h6' color="text.secondary">
                    Need something to do this weekend? Come checkout Nightcap Events. With thousands of events happening in your area, you will 
                    for sure have a busy weekend!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant = 'contained' size="large" target='_blank' a href='https://dmc20.github.io/Nightcap-Events/'>Nightcap Events</Button>
                </CardActions>
            </Card>
        </Grid>

        <Grid item xs={6}>
            <Card xs={{ maxWidth: 450 }}>
                <CardMedia
                    component="img"
                    alt="note pad"
                    height="140"
                    image="./static/note.png"
                />
                <CardContent>
                    <Typography variant="body2" bottomGutter variant='h6' color="text.secondary">
                        Life can be extremely busy at times and there are moments where we forget what we have to do. Note taker simplifies life a bit. 
                        You can take notes throughout the day to help you keep you organized. Once you are all done, delete your notes and start over!
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant ='contained' a href='https://damp-ridge-43976.herokuapp.com/' target='_blank' size="large">Note Taker</Button>
                </CardActions>
            </Card>
        </Grid>

        <Grid item xs={6}>
            <Card xs={{ maxWidth: 450 }}>
                <CardMedia
                    component="img"
                    alt="blog layout"
                    height="150"
                    image="./static/justask.png"
                />
                <CardContent>
                <Typography variant="body2" bottomGutter variant='h6' color="text.secondary">
                Just ask...literally! Just Ask is a blog website where you can post topics on food, tech, lifestyle, etc. Other users can also commment
                and like your posts etc. And you can also like, comment, etc on other users posts. Just Ask! 
                </Typography>
                </CardContent>
                <CardActions>
                    <Button variant='contained' a href='https://justaskproject2.herokuapp.com/' target='_blank' size="large">Just Ask</Button>
                </CardActions>
            </Card>
        </Grid>



        </Grid>
      </Box>
    )
}

export default Portfolio;