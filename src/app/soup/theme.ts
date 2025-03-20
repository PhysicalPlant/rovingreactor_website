import { createTheme } from '@mui/material/styles';

export const soupTheme = createTheme({
    typography: {
        fontFamily: 'Bona Nova, serif',
        allVariants: {
            fontFamily: 'Bona Nova, serif',
        },
    },
    components: {
        MuiAccordion: {
            styleOverrides: {
                root: {
                    backgroundColor: 'transparent',
                    color: 'rgb(30 41 59)',
                    border: 'none',
                    borderTop: 'none',
                    boxShadow: 'none',
                    '&:before': {
                        display: 'none',
                    },
                    margin: '0 !important',
                },
            },
        },
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    paddingLeft: 0,
                    minHeight: '48px',
                    fontFamily: 'Bona Nova, serif',
                    '&.Mui-expanded': {
                        minHeight: '48px',
                        marginBottom: 0,
                    },
                },
                content: {
                    margin: '12px 0',
                    fontFamily: 'Bona Nova, serif',
                    fontSize: '1.25rem',
                    '&.Mui-expanded': {
                        margin: '12px 0',
                    },
                },
            },
        },
        MuiAccordionDetails: {
            styleOverrides: {
                root: {
                    paddingRight: '16px',
                    paddingTop: '8px',
                    paddingBottom: '16px',
                    paddingLeft: 0,
                    fontFamily: 'Bona Nova, serif',
                },
            },
        },
    },
}); 