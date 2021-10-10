import React from "react";
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import PDF from '../../assets/Resume.pdf'

const Resume = () => {
    return(

        <Box sx={{ flexGrow: 1 }} marginTop={ 10 }>
            <Grid container spacing = 'center' spacing={8} >
                <Grid item xs={6}>
                    <Card xs={{ maxWidth: 450 }}  elevation={5}>
                    <CardContent>
                    <Typography variant='h6' color="text.primary"> Front-End Knowledge</Typography>
                        <Timeline position="alternate">
                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot variant='outlined'/>
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>HTML</TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot  variant='outlined'/>
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>CSS (Bootstrap/Bulma/MUI)</TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot  variant='outlined'/>
                                </TimelineSeparator>
                                <TimelineContent>Javascript (React, JQuery)</TimelineContent>
                            </TimelineItem>
                            </Timeline>
                    </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={6}>
                    <Card xs={{ maxWidth: 450 }} elevation={5}>
                        <CardContent>
                        <Typography variant='h6' color="text.primary"> Back-End Knowledge</Typography>
                        <Timeline position="alternate">
                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot  variant='outlined'/>
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>Node JS</TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot  variant='outlined'/>
                                <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>Express</TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                <TimelineDot  variant='outlined'/>
                                </TimelineSeparator>
                                <TimelineContent>SQL/NoSQL</TimelineContent>
                            </TimelineItem>
                            </Timeline>
                        </CardContent>
                    </Card>
                </Grid>
                <Typography marginLeft={4}>Click <a href={PDF} target='_blank'>here</a> to download my resume</Typography>
        </Grid>
      </Box>
    )
}

export default Resume;