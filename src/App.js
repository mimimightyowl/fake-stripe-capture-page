import { CustomForm } from "./components/custom-form";
import { useStyles } from "./GlobalStyles";

function App() {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <CustomForm />
    </div>
  );
}

export default App;
