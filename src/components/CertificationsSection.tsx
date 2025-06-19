import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import { certificationsData } from '../data/resumeData';

const CertificationsSection: React.FC = () => (
    <Box component="section" id="certifications" sx={{ mb: 6 }}>
        <Typography variant="h2">Certifications</Typography>
        {certificationsData.map((cert) => (
            <Paper key={cert.id} sx={{ mb: 2 }}>
                <Typography variant="h4" sx={{fontSize: '1.1rem'}}>{cert.name}</Typography>
                <Typography variant="subtitle2" color="text.secondary" fontStyle="italic">{cert.issuer}</Typography>
                <Typography variant="body2" sx={{ mt: 0.5 }}>{cert.description}</Typography>
            </Paper>
        ))}
    </Box>
);
export default CertificationsSection;