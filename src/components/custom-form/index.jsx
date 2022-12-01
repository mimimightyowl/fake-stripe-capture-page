import React from "react";
import { CustomInput } from "../custom-input";
import Button from "@mui/material/Button";
import { useStyles } from "./styles";
import { CardInfoInputs } from "../card-info-inputs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export function CustomForm() {
  const { classes } = useStyles();

  return (
    <Box className={classes.container}>
      <Typography className={classes.title} variant="h6">
        Pay with card
      </Typography>

      <CustomInput label="Email" placeholder="example@domain.com" />
      <CustomInput label="Phone" placeholder="(201) 555-0123" />
      <CardInfoInputs />
      <CustomInput label="Name on card" placeholder="" />
      <CustomInput label="Billing address" placeholder="Billing address" />

      <Button className={classes.button} variant="contained">
        Pay
      </Button>
    </Box>
  );
}
