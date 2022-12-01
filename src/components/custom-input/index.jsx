import React from "react";
import Input from "@mui/material/Input";
import Typography from "@mui/material/Typography";
import { useStyles } from "./styles";

export function CustomInput({ label, placeholder }) {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <Typography>{label}</Typography>
      <Input className={classes.input} placeholder={placeholder} />
    </div>
  );
}
