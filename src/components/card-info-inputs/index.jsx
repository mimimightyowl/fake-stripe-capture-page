import React from "react";
import { CustomInput } from "../custom-input";
import { useStyles } from "./styles";
export function CardInfoInputs() {
  const { classes } = useStyles();

  return (
    <div>
      <CustomInput
        label="Card information"
        placeholder="1234 1234 1234 1234 "
      />
      <div className={classes.secureData}>
        <CustomInput placeholder="MM / YY" />
        <CustomInput placeholder="CVC" />
      </div>
    </div>
  );
}
