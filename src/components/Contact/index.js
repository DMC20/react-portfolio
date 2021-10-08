import React from 'react'
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';


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
                    <TextField fullWidth label='Message' placeholder="Please enter your question"/>
                    <Button type='submit' variant='text' color='primary'>Submit</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default ContactForm;