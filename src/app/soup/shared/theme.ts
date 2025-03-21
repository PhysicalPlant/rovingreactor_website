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
                    color: 'rgb(30 41 59)',
                }
            }
        }
    }
}); 