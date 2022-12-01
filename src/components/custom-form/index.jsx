import React, { useState } from "react";
import { CustomInput } from "../custom-input";
import Button from "@mui/material/Button";
import { useStyles } from "./styles";
export function CustomForm() {
  const [cardNumber, setCardNumber] = useState("");
  const [expireDate, setExpireDate] = useState("");
  const [cvc, setCvc] = useState("");

  const { classes } = useStyles();

  const handleCardNumberInput = () => {
    
  }

  return (
    <div className={classes.container}>
      <CustomInput label="Email" placeholder="Email" />
      <CustomInput label="Phone" placeholder="Phone" />
      <CustomInput label="Card information" placeholder="Card information" />
      <CustomInput label="Name on card" placeholder="Name on card" />
      <CustomInput label="Billing address" placeholder="Billing address" />
      <Button variant="contained">Pay</Button>
    </div>
  );
}
