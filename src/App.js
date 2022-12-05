import { CustomForm } from "./components/custom-form";
import { useStyles } from "./GlobalStyles";
import logo from "./img/logo.png";

function App() {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <img src={logo} width={350} height={69} />
      <CustomForm />
    </div>
  );
}

export default App;
