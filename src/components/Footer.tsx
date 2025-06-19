import React from 'react';
import { Box, Typography } from '@mui/material';
import { theme } from '../theme/theme'; // Import theme for divider color

const Footer: React.FC = () => (
    <Box component="footer" sx={{ py: 3, textAlign: 'center', borderTop: `1px solid ${theme.palette.divider}` }}>
        <Typography variant="body2" color="text.secondary">
            &copy; {new Date().getFullYear()} Suraj Kumar Gupta. All Rights Reserved.
        </Typography>
    </Box>
);
export default Footer;