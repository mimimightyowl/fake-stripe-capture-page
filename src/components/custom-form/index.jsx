import React from "react";
import { CustomInput } from "../custom-input";
import Button from "@mui/material/Button";
import { useStyles } from "./styles";
import { CardInfoInputs } from "../card-info-inputs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CustomPhoneInput } from "../custom-phone-input";
import { useForm } from "react-hook-form";
export function CustomForm() {
  const { handleSubmit, control } = useForm();

  const onSubmit = (data) => console.log(data);
  const { classes } = useStyles();

  return (
    <Box className={classes.container}>
      <Typography className={classes.title} variant="h6">
        Pay with card
      </Typography>
      <form>
        <CustomInput
          label="Email"
          name="email"
          placeholder="example@domain.com"
          control={control}
        />
        <CustomPhoneInput control={control} />
        <CardInfoInputs control={control} />
        <CustomInput
          label="Name on card"
          name="cardholder"
          placeholder=""
          control={control}
        />
        <CustomInput
          label="Billing address"
          name="address"
          placeholder="Billing address"
          control={control}
        />
        <Button
          className={classes.button}
          variant="contained"
          onClick={handleSubmit(onSubmit)}
        >
          Pay
        </Button>
      </form>
    </Box>
  );
}
