import React from 'react';
import { Box, Typography, Paper, Chip } from '@mui/material';
import { skillsData } from '../data/resumeData';

const SkillsSection: React.FC = () => (
    <Box component="section" id="skills" sx={{ mb: 6 }}>
        <Typography variant="h2">Technical Skills</Typography>
        <Paper>
            {skillsData.map((skillCategory) => (
                <Box key={skillCategory.category} sx={{ mb: 3 }}>
                    <Typography variant="h4" gutterBottom>{skillCategory.category}</Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {skillCategory.items.map((item) => (
                            <Chip key={item} label={item} />
                        ))}
                    </Box>
                </Box>
            ))}
        </Paper>
    </Box>
);
export default SkillsSection;
