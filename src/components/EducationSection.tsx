import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { educationData } from '../data/resumeData';

const EducationSection: React.FC = () => (
    <Box component="section" id="education" sx={{ mb: 6 }}>
        <Typography variant="h2">Education</Typography>
        <Paper>
            <Typography variant="h3">{educationData.degree}</Typography>
            <Typography variant="subtitle1" color="text.secondary">{educationData.university}</Typography>
            <Typography variant="caption" color="text.secondary">{educationData.duration}</Typography>
        </Paper>
    </Box>
);
export default EducationSection;