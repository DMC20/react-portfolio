import React from 'react'
import { Avatar, TextField } from '@material-ui/core'
import Box from '@mui/material/Box';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import Paper from '@mui/material/Paper'
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';



function ContactForm() {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    
    return (
         <Grid>
             <Paper elevation={20} style={paperStyle}>
                 <Grid align='center'>
                     <Avatar style={avatarStyle}>
                         <QuestionAnswerIcon />
                     </Avatar>
                     <h2 style={headerStyle}>Questions?</h2>
                     <Typography variant='caption'>Please fill this form to reach out to me or click one of the links below.</Typography>
                 </Grid>
                 <form>
                     <TextField fullWidth label='Name' placeholder="Enter your name"/>
                     <TextField fullWidth label='Email' placeholder="Enter your email"/>
                     <TextField fullWidth label='Message' placeholder="Please type your question"/>
                     <Button type='submit' variant='text' color='primary'>Submit</Button>
                 </form>
             </Paper>
         </Grid>
    )
}

export default ContactForm;