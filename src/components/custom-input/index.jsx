import React from "react";
import Input from "@mui/material/Input";
import Typography from "@mui/material/Typography";
import { useStyles } from "./styles";
import { Controller } from "react-hook-form";

export function CustomInput({ label, name, placeholder, control }) {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <Typography>{label}</Typography>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            className={classes.input}
            placeholder={placeholder}
            value={value || ''}
            onChange={onChange}
          />
        )}
      />
    </div>
  );
}
