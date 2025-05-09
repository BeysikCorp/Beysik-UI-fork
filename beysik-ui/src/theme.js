import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#222222',
    },
    secondary: {
      main: '#757575',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: '#222222',
      secondary: '#555555',
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.8rem',
      fontWeight: 600,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      marginBottom: '1.5rem',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
    },
    h3: {
        fontSize: '1.1rem',
        fontWeight: 500,
        marginBottom: '0.25rem',
    },
    h4: {
        fontSize: '1rem',
        fontWeight: 600,
        color: '#222222',
    },
    body1: {
        fontSize: '0.95rem',
        lineHeight: 1.6,
    },
    button: {
        textTransform: 'none',
        fontWeight: 500,
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          padding: '8px 18px',
        },
        containedPrimary: {
          backgroundColor: '#222222',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#444444',
          },
        },
        outlinedPrimary: {
            borderColor: '#222222',
            color: '#222222',
            '&:hover': {
                backgroundColor: 'rgba(34,34,34,0.04)',
                borderColor: '#222222',
            }
        },
        textPrimary: {
            color: '#222222',
            '&:hover': {
                backgroundColor: 'rgba(34,34,34,0.04)',
            }
        }
      },
    },
    MuiCard: {
        styleOverrides: {
            root: {
                borderRadius: '0px',
                boxShadow: 'none',
                transition: 'box-shadow 0.3s ease-in-out',
                '&:hover': {
                    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                }
            }
        }
    },
    MuiAppBar: {
        styleOverrides: {
            root: {
                backgroundColor: '#ffffff',
                color: '#222222',
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
            }
        }
    },
    MuiIconButton: {
        styleOverrides: {
            root: {
                color: '#222222',
            }
        }
    }
  }
});

export default theme;