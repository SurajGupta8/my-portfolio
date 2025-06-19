import { createTheme, GlobalStyles as MuiGlobalStyles } from '@mui/material';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#2563eb',
        },
        secondary: {
            main: '#1f2937',
        },
        background: {
            default: '#f3f4f6',
            paper: '#ffffff',
        },
        text: {
            primary: '#374151',
            secondary: '#4b5563',
        },
    },
    typography: {
        fontFamily: '"Inter", sans-serif',
        h1: {
            fontSize: '2.25rem',
            fontWeight: 700,
            color: '#2563eb',
        },
        h2: {
            fontSize: '1.75rem',
            fontWeight: 600,
            color: '#1f2937',
            marginBottom: '1.5rem',
            paddingBottom: '0.5rem',
            borderBottom: `2px solid #3b82f6`,
            scrollMarginTop: '80px',
        },
        h3: {
            fontSize: '1.25rem',
            fontWeight: 600,
            color: '#1f2937',
        },
        h4: {
            fontSize: '1.125rem',
            fontWeight: 600,
            color: '#1f2937',
        },
        body1: {
            lineHeight: 1.6,
        },
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    borderRadius: '0.75rem',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    padding: '1.5rem',
                    marginBottom: '1.5rem',
                    transition: 'box-shadow 0.3s ease',
                    '&:hover': {
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                    }
                }
            }
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '0.5rem',
                }
            }
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    backgroundColor: '#e0f2fe',
                    color: '#0369a1',
                    fontWeight: 500,
                }
            }
        }
    }
});

export const globalStyles = MuiGlobalStyles({
  styles: {
    'html': {
        scrollBehavior: 'smooth',
    },
    'body': {
        fontFamily: '"Inter", sans-serif',
        overscrollBehaviorY: 'contain',
    },
    '::-webkit-scrollbar': {
        width: '8px',
    },
    '::-webkit-scrollbar-track': {
        background: '#f1f5f9',
    },
    '::-webkit-scrollbar-thumb': {
        background: '#94a3b8',
        borderRadius: '4px',
    },
    '::-webkit-scrollbar-thumb:hover': {
        background: '#64748b',
    },
    '.nav-link': {
        transition: 'color 0.3s ease, border-bottom-color 0.3s ease',
        padding: '0.5rem 0',
        textDecoration: 'none',
        color: theme.palette.text.secondary,
        borderBottom: '2px solid transparent',
        '&.active': {
            color: theme.palette.primary.main,
            borderBottomColor: theme.palette.primary.main,
            fontWeight: 500,
        },
        '&:hover': {
            color: theme.palette.primary.main,
            borderBottomColor: theme.palette.primary.main,
        }
    },
    '.modal-content-container': {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        maxWidth: '600px',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #888',
        borderRadius: '0.75rem',
        boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
        padding: '2rem',
        outline: 'none',
    }
  }
});