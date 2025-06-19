import React from 'react';
import { Modal, Box, Typography, IconButton, Button, Link as MuiLink } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import type { Project } from '../data/resumeData'; 
import { renderMarkdownBold } from '../utils/renderMarkdownBold';

interface ProjectModalProps {
    open: boolean;
    onClose: () => void;
    project: Project | null;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ open, onClose, project }) => {
    if (!project) return null;

    return (
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="project-modal-title"
            aria-describedby="project-modal-description"
        >
            <Box className="modal-content-container"> {/* Use global class for styling */}
                 <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <Typography id="project-modal-title" variant="h5" component="h2" gutterBottom>
                    {project.title}
                </Typography>
                <Typography id="project-modal-description" variant="body1" sx={{ mb: 2 }}>
                    {renderMarkdownBold(project.description)}
                </Typography>
                <Typography variant="subtitle1" fontWeight="bold">Tech Stack:</Typography>
                <Typography variant="body2" sx={{ mb: 3 }}>{project.techStack}</Typography>

                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    {project.githubUrl && (
                        <Button
                            variant="outlined"
                            startIcon={<GitHubIcon />}
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            component={MuiLink}
                            sx={{textTransform: 'none'}}
                        >
                            View on GitHub
                        </Button>
                    )}
                    {project.deployUrl && (
                        <Button
                            variant="contained"
                            startIcon={<OpenInNewIcon />}
                            href={project.deployUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            component={MuiLink}
                            sx={{textTransform: 'none'}}
                        >
                            View Deployed App
                        </Button>
                    )}
                </Box>
            </Box>
        </Modal>
    );
};
export default ProjectModal;