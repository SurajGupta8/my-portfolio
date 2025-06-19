import React from 'react';
import { Drawer, Box, List, ListItem, ListItemText, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { navItems } from '../data/resumeData';

interface MobileDrawerProps {
    open: boolean;
    onClose: () => void;
    activeSection: string | null;
}

const MobileDrawer: React.FC<MobileDrawerProps> = ({ open, onClose, activeSection }) => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId.substring(1)); // Remove #
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            onClose();
        }
    };

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose}
            sx={{ display: { xs: 'block', md: 'none' } }}
        >
            <Box
                sx={{ width: 250, p: 2 }}
                role="presentation"
            >
                <IconButton onClick={onClose} sx={{ mb: 2, float: 'right' }}>
                    <CloseIcon />
                </IconButton>
                <List sx={{clear: 'both'}}>
                    {navItems.map((item) => (
                        <ListItem
                            button // Mui v5 uses component="li" and other props for button behavior if needed
                            key={item.label}
                            onClick={() => scrollToSection(item.href)}
                            selected={activeSection === item.id}
                        >
                            <ListItemText primary={item.label} />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>
    );
};
export default MobileDrawer;