import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    components: {
        MuiAccordion: {
            styleOverrides: {
                root: {
                    border: 'none',
                    boxShadow: 'none',
                    '&:before': {
                        display: 'none',
                    },
                    '&.Mui-expanded': {
                        margin: '0 !important',
                    },
                    backgroundColor: 'transparent',
                    color: 'rgb(124 45 18)',
                    margin: '0 !important',
                }
            }
        },
        MuiAccordionSummary: {
            styleOverrides: {
                root: {
                    margin: '0 !important',
                    minHeight: '48px !important',
                    '&.Mui-expanded': {
                        minHeight: '48px !important',
                    },
                    color: 'rgb(124 45 18)'
                },
                content: {
                    margin: '0 !important',
                    '&.Mui-expanded': {
                        margin: '0 !important'
                    },
                    color: 'rgb(124 45 18)'
                }
            }
        }
    }
}); 