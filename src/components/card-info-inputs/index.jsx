import React from "react";
import { CustomInput } from "../custom-input";
import { useStyles } from "./styles";
export function CardInfoInputs({ control }) {
  const { classes } = useStyles();

  return (
    <div>
      <CustomInput
        label="Card information"
        name="card"
        placeholder="1234 1234 1234 1234 "
        control={control}
      />
      <div className={classes.secureData}>
        <CustomInput placeholder="MM / YY" name="expires" control={control} />
        <CustomInput placeholder="CVC" name="cvc" control={control} />
      </div>
    </div>
  );
}
