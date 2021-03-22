import { createMuiTheme } from '@material-ui/core/styles';

const blueTheme = '#197519'
const whiteTheme = '#FFFFFF'

export default createMuiTheme ({
    palette: {
        common: {
            blue: `${blueTheme}`,
            orange: `${whiteTheme}`
        },
        primary: {
            main: `${whiteTheme}`
        },
        secondary: {
            main: `${blueTheme}`
        },
        tertiary: {
         main: 'rgba(0,0,0,0.4)'
        }
    },
    typography: {
        h3 : {
            fontWeight: 300
        }
    }
})