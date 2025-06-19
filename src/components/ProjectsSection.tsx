import React, { useState } from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { projectsData } from '../data/resumeData';
import type { Project } from '../data/resumeData';
import ProjectModal from './ProjectModal';

const ProjectsSection: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const handleOpenModal = (project: Project) => {
        setSelectedProject(project);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <Box component="section" id="projects" sx={{ mb: 6 }}>
            <Typography variant="h2">Projects</Typography>
            <Grid container spacing={3}>
                {projectsData.map((project) => (
                    <Grid item xs={12} sm={6} md={4} key={project.id}>
                        <Paper
                            onClick={() => handleOpenModal(project)}
                            sx={{ cursor: 'pointer', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 2 }}
                        >
                            <Box>
                                <Typography variant="h3" gutterBottom sx={{fontSize: '1.15rem'}}>{project.title}</Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ 
                                    mb: 1,
                                    display: '-webkit-box',
                                    WebkitLineClamp: 3,
                                    WebkitBoxOrient: 'vertical',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    minHeight: '3.6em' 
                                }}>
                                    {project.description}
                                </Typography>
                            </Box>
                             <Typography variant="caption" color="text.secondary" sx={{mt: 'auto', pt: 1}}>
                                Tech: {project.techStack.split(',').slice(0,3).join(', ')}{project.techStack.split(',').length > 3 ? '...' : ''}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
            <ProjectModal open={modalOpen} onClose={handleCloseModal} project={selectedProject} />
        </Box>
    );
};
export default ProjectsSection;