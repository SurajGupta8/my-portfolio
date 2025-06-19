import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { summaryData } from '../data/resumeData';

const SummarySection: React.FC = () => (
    <Box component="section" id="summary" sx={{ mb: 6 }}>
        <Typography variant="h2">Summary</Typography>
        <Paper>
            <Typography variant="body1">{summaryData}</Typography>
        </Paper>
    </Box>
);
export default SummarySection;