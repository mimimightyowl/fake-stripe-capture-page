import React from "react";
import Input from "@mui/material/Input";
import { useStyles } from "./styles";

export function CustomInput({label, placeholder}) {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <div>{label}</div>
      <Input className={classes.input} placeholder={placeholder} />
    </div>
  );
}
