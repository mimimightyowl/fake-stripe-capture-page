import React from "react";
import { CustomInput } from "../custom-input";
import Button from "@mui/material/Button";
import { useStyles } from "./styles";
import { CardInfoInputs } from "../card-info-inputs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { CustomPhoneInput } from "../custom-phone-input";
import { BillingAddressInputs } from "../billing-address-inputs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { paymentSchema } from "../../validation/payment-schema";
export function CustomForm() {
  const { handleSubmit, control } = useForm({
    mode: "onChange",
    resolver: yupResolver(paymentSchema),
  });

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
        <BillingAddressInputs control={control} />
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
