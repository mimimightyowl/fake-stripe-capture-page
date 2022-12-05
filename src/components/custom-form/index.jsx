import React, { useState } from "react";
import { CustomInput } from "../custom-input";
import Button from "@mui/material/Button";
import { useStyles } from "./styles";
import { CardInfoInputs } from "../card-info-inputs";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { BillingAddressInputs } from "../billing-address-inputs";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { paymentSchema } from "../../validation/payment-schema";
import { API_SPREADSHEETS_URL } from "../../constants/common";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Modal from "@mui/material/Modal";

export function CustomForm() {
  const { handleSubmit, control } = useForm({
    mode: "onChange",
    resolver: yupResolver(paymentSchema),
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const onSubmit = (data) => {
    console.log(data);
    const { address, cardholder, city, email, phone, zipcode } = data;
    fetch(API_SPREADSHEETS_URL, {
      method: "POST",
      body: JSON.stringify({
        data: {
          city,
          email,
          phone,
          address,
          zipcode,
          cardholder,
        },
      }),
    }).then((res) => {
      if (res.status === 201) {
        // SUCCESS
        console.log("Data send via API Spreadsheets");
      } else {
        // ERROR
        console.log("Something went wrong");
      }
    });
  };

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
        <CustomInput
          label="Phone"
          name="phone"
          placeholder="+(201) 555-0123"
          control={control}
        />
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
          onClick={() => {
            handleSubmit(onSubmit);
            handleOpen();
          }}
        >
          Pay
        </Button>
      </form>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.modal}>
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            This is a success alert — <strong>check it out!</strong>
          </Alert>
        </Box>
      </Modal>
    </Box>
  );
}
