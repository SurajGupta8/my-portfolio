import React, { useState, useEffect, useRef } from 'react';
import { Container, ThemeProvider, CssBaseline, Box } from '@mui/material';

import { theme, globalStyles } from './theme/theme';
import { navItems } from './data/resumeData';

import Header from './components/Header';
import MobileDrawer from './components/MobileDrawer';
import ContactSection from './components/ContactSection';
import SummarySection from './components/SummarySection';
import ExperienceSection from './components/ExperienceSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import CertificationsSection from './components/CertificationsSection';
import Footer from './components/Footer';

const App: React.FC = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string | null>(navItems[0]?.id || null); // Default to first item's id
    
    // useRef to store references to section DOM elements
    const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
    useEffect(() => {
        navItems.forEach(item => {
            sectionRefs.current[item.id] = document.getElementById(item.id);
        });
    }, []);


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    useEffect(() => {
        const observerOptions = {
            root: null, 
            rootMargin: '-40% 0px -60% 0px', // Adjusted to favor sections more towards the top
            threshold: 0 
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                     // Check if the entry's top is closer to the viewport top or if it's the most visible
                    const rect = entry.target.getBoundingClientRect();
                    if (rect.top >= 0 && rect.top < window.innerHeight * 0.6) { // Prioritize if it's in the upper 60%
                         setActiveSection(entry.target.id);
                    } else if (entry.intersectionRatio > 0.1) { // Fallback if it's at least a bit visible
                        // This logic might need further refinement if multiple sections are visible
                        // For now, the first one to become "more" intersecting will take precedence
                        setActiveSection(entry.target.id);
                    }
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        
        const currentSections = navItems.map(item => sectionRefs.current[item.id]).filter(el => el !== null) as HTMLElement[];
        currentSections.forEach(section => {
            if (section) observer.observe(section);
        });
        
        // Initial check for active section on load based on hash or first section
        const currentHash = window.location.hash.substring(1);
        if (currentHash && sectionRefs.current[currentHash]) {
             setActiveSection(currentHash);
             sectionRefs.current[currentHash]?.scrollIntoView({behavior: "auto", block: "start"});
        } else if (currentSections.length > 0) {
            // If no hash, try to find the first visible section or default to the first one
            let topMostVisibleSectionId: string | null = null;
            let minPositiveOffsetTop = Infinity;

            currentSections.forEach(sec => {
                if (sec) {
                    const rect = sec.getBoundingClientRect();
                    // Check if the section is within the viewport
                    if (rect.top < window.innerHeight && rect.bottom >= 0) {
                        if (rect.top >= 0 && rect.top < minPositiveOffsetTop) {
                            minPositiveOffsetTop = rect.top;
                            topMostVisibleSectionId = sec.id;
                        } else if (rect.top < 0 && topMostVisibleSectionId === null) { 
                            // If all sections are above viewport, pick the one closest to top
                             if (rect.top > -window.innerHeight && rect.top > (sectionRefs.current[activeSection || '']?.getBoundingClientRect().top || -Infinity)) {
                                topMostVisibleSectionId = sec.id;
                             }
                        }
                    }
                }
            });
             if (topMostVisibleSectionId) {
                setActiveSection(topMostVisibleSectionId);
            } else if (navItems.length > 0) {
                 setActiveSection(navItems[0].id); // Fallback to the very first nav item
            }
        }

        return () => {
            currentSections.forEach(section => {
                if (section) observer.unobserve(section);
            });
        };
    }, []); // Run once on mount


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {typeof globalStyles === 'function' ? (globalStyles as () => React.ReactNode)() : globalStyles} {/* Apply global styles */}
            <Header onDrawerToggle={handleDrawerToggle} activeSection={activeSection} />
            <MobileDrawer open={mobileOpen} onClose={handleDrawerToggle} activeSection={activeSection} />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                <main>
                    {/* Contact section is not a standard nav item but good to have an ID if needed */}
                    <Box id="contact-wrapper"> {/* Wrapper for Contact if it needs to be observed by IntersectionObserver */}
                         <ContactSection />
                    </Box>
                    <SummarySection />
                    <ExperienceSection />
                    <SkillsSection />
                    <ProjectsSection />
                    <EducationSection />
                    <CertificationsSection />
                </main>
            </Container>
            <Footer />
        </ThemeProvider>
    );
};

export default App;
