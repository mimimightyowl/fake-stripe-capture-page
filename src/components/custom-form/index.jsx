import React, { useState } from "react";
import { CustomInput } from "../custom-input";
import Button from "@mui/material/Button";
import { useStyles } from "./styles";
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

const SWIPE_CARD_DELAY_MS = 4000;

export function CustomForm() {
  const {
    handleSubmit,
    control,
    formState: { isDirty, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(paymentSchema),
  });
  const [isReserveEnabled, setIsReserveEnabled] = useState(false);

  const [openSwipeAlert, setOpenSwipeAlert] = useState(false);
  const [openSuccessModal, setOpenSuccessModal] = useState(false);

  const handleOpenSwipeAlert = () => setOpenSwipeAlert(true);
  const handleOpenSuccessModal = () => setOpenSuccessModal(true);

  const handleCloseSwipeAlert = () => setOpenSwipeAlert(false);
  const handleCloseSuccessModal = () => setOpenSuccessModal(false);

  const onSwipeCardButtonClick = () => {
    handleOpenSwipeAlert();

    setTimeout(() => {
      setIsReserveEnabled(true);
    }, SWIPE_CARD_DELAY_MS);
  };

  const onSubmit = (data) => {
    const { address, city, email, phone, zipcode } = data;

    fetch(API_SPREADSHEETS_URL, {
      method: "POST",
      body: JSON.stringify({
        data: {
          city,
          email,
          phone: phone.slice(1),
          address,
          zipcode,
        },
      }),
    }).then((res) => {
      if (res.status === 201) {
        // SUCCESS
        console.log("success");
      } else {
        // ERROR
        console.log("error");
      }
    });
    handleOpenSuccessModal();
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
        <BillingAddressInputs control={control} />
        <Button
          className={classes.swipeButton}
          variant="contained"
          disabled={!isDirty || !isValid}
          onClick={handleSubmit(onSwipeCardButtonClick)}
        >
          Swipe Credit Card Now
        </Button>
        <Button
          className={classes.reserveButton}
          variant="contained"
          disabled={!isReserveEnabled}
          onClick={handleSubmit(onSubmit)}
        >
          Reserve
        </Button>
      </form>
      <Modal
        open={openSwipeAlert}
        onClose={handleCloseSwipeAlert}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.modal}>
          <Alert severity="info">
            <AlertTitle>Ready to read you card!</AlertTitle>
            Please swipe your card
          </Alert>
        </Box>
      </Modal>
      <Modal
        open={openSuccessModal}
        onClose={handleCloseSuccessModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={classes.modal}>
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            Data successfully send via API Spreadsheets
          </Alert>
        </Box>
      </Modal>
    </Box>
  );
}
