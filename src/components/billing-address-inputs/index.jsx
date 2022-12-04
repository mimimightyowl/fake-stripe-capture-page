import React from "react";
import { CustomInput } from "../custom-input";
import { useStyles } from "./styles";
export function BillingAddressInputs({ control }) {
  const { classes } = useStyles();

  return (
    <div>
      <CustomInput
        label="Billing address"
        name="address"
        placeholder="Address line"
        control={control}
      />
      <div className={classes.additionalData}>
        <CustomInput placeholder="Postal code" name="zipcode" control={control} />
        <CustomInput placeholder="City" name="city" control={control} />
      </div>
    </div>
  );
}
