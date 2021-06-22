import { createMuiTheme } from '@material-ui/core/styles'
import { pink } from '@material-ui/core/colors'

const theme = createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    palette: {
      primary: {
      light: '#4d5687',
      main: '#3f4771',
      dark: '#1a1e36',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffadcf',
      main: '#fa82aa',
      dark: '#c60055',
      contrastText: '#000',
    },
      openTitle: '#7179a3',
      protectedTitle: pink['400'],
      type: 'light'
    }
  })

  export default theme