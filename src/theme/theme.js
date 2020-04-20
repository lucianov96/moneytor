import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true
    },
    palette: {
        primary : {
            main : '#1b962c',
        },
        secondary : {
            main : '#1f1f1f',
        },
    }
});

export default theme;