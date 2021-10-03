import React from "react";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Typography } from "@mui/material";

function Footer() {
    const [value, setValue] = React.useState(0);

    return (
        <div className='footer'>
            <Typography>Make this go on the bottom later </Typography>
            <Box sx={{ width: 500 }}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
            >
                <BottomNavigationAction className='icons' label="Email" icon={<EmailIcon />} />
                <BottomNavigationAction className='icons' label="LinkedIn"icon={<LinkedInIcon />} />
                <BottomNavigationAction className='icons' label="Github"icon={<GitHubIcon />} />
                <BottomNavigationAction className='icons' label="Facebook"icon={<FacebookIcon />} />
                <BottomNavigationAction className='icons' label="Instagram" icon={<InstagramIcon />} />
            </BottomNavigation>
            </Box>
        </div>
    )
}

export default Footer;