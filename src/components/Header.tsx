import React from 'react';
import { AppBar, Toolbar, Typography, Container, Box, Link, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { navItems } from '../data/resumeData';

interface HeaderProps {
    onDrawerToggle: () => void;
    activeSection: string | null;
}

const Header: React.FC<HeaderProps> = ({ onDrawerToggle, activeSection }) => {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId.substring(1)); // Remove #
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <AppBar position="sticky" sx={{ bgcolor: 'background.paper', boxShadow: 3, zIndex: (theme) => theme.zIndex.drawer + 1 }}>
            <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    <Typography variant="h1" component="div" sx={{ flexGrow: { xs: 1, md: 0 } }}>
                        Suraj Kumar Gupta
                    </Typography>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                                className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </Box>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="end"
                        onClick={onDrawerToggle}
                        sx={{ display: { md: 'none' }, color: 'text.primary' }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Header;