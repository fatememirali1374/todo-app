import { purple, pink, teal } from "@material-ui/core/colors";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { Todos } from "./features/todos/Todos";

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      light: teal[500],
      main: pink[500],
      contrastText: "#fff",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Todos />
    </ThemeProvider>
  );
}

export default App;
