import React, { useState } from 'react';
import { Box, Typography, Paper, List, ListItem, ListItemIcon, ListItemText, Collapse, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { experienceData } from '../data/resumeData';
import { renderMarkdownBold } from '../utils/renderMarkdownBold';

const ExperienceSection: React.FC = () => {
    const [expanded, setExpanded] = useState<Record<string, boolean>>({});

    const handleToggleExpand = (id: string) => {
        setExpanded(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
        <Box component="section" id="experience" sx={{ mb: 6 }}>
            <Typography variant="h2">Experience</Typography>
            {experienceData.map((exp) => (
                <Paper key={exp.id} sx={{ mb: 3 }}>
                    <Typography variant="h3">{exp.title}</Typography>
                    <Typography variant="subtitle1" color="primary" gutterBottom>
                        {exp.company} | {exp.location}
                    </Typography>
                    <Typography variant="caption" color="text.secondary" display="block" mb={2}>
                        {exp.duration}
                    </Typography>
                    <List dense disablePadding>
                        {exp.details.slice(0, 3).map((detail, index) => (
                            <ListItem key={index} sx={{ pl: 0, alignItems: 'flex-start' }}>
                                <ListItemIcon sx={{minWidth: '20px', mt: '4px'}}><Typography component="span" sx={{fontSize: '1.2rem', color: 'primary.main'}}>•</Typography></ListItemIcon>
                                <ListItemText primary={renderMarkdownBold(detail)} />
                            </ListItem>
                        ))}
                    </List>
                    {exp.details.length > 3 && (
                        <>
                            <Collapse in={expanded[exp.id]} timeout="auto" unmountOnExit>
                                <List dense disablePadding>
                                    {exp.details.slice(3).map((detail, index) => (
                                        <ListItem key={index} sx={{ pl: 0, alignItems: 'flex-start' }}>
                                            <ListItemIcon sx={{minWidth: '20px', mt: '4px'}}><Typography component="span" sx={{fontSize: '1.2rem', color: 'primary.main'}}>•</Typography></ListItemIcon>
                                            <ListItemText primary={renderMarkdownBold(detail)} />
                                        </ListItem>
                                    ))}
                                </List>
                            </Collapse>
                            <Button
                                onClick={() => handleToggleExpand(exp.id)}
                                size="small"
                                endIcon={expanded[exp.id] ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                sx={{ mt: 1, textTransform: 'none' }}
                            >
                                {expanded[exp.id] ? 'Show less...' : 'Show more...'}
                            </Button>
                        </>
                    )}
                </Paper>
            ))}
        </Box>
    );
};
export default ExperienceSection;
