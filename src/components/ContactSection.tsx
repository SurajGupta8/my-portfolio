import React from 'react';
import { Paper, Typography, Grid, Link } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { contactData } from '../data/resumeData';

const ContactSection: React.FC = () => (
    <Paper component="section" id="contact" sx={{ mb: 6, scrollMarginTop: (theme) => theme.typography.h2.scrollMarginTop || '80px' }}>
        <Typography variant="h4" gutterBottom>Contact Information</Typography>
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
                <EmailIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Link href={`mailto:${contactData.email}`} color="primary" underline="hover">{contactData.email}</Link>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
                <PhoneIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography>{contactData.phone}</Typography>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
                <LocationOnIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Typography>{contactData.location}</Typography>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
                <LinkedInIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Link href={contactData.linkedin} target="_blank" rel="noopener noreferrer" color="primary" underline="hover">linkedin.com/in/suraj-k-gupta</Link>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
                <GitHubIcon sx={{ mr: 1, color: 'primary.main' }} />
                <Link href={contactData.github} target="_blank" rel="noopener noreferrer" color="primary" underline="hover">github.com/SurajGupta8</Link>
            </Grid>
        </Grid>
    </Paper>
);
export default ContactSection;