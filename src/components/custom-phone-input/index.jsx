import React from "react";
import { CustomInput } from "../custom-input";

export function CustomPhoneInput({ control }) {
  return (
    <>
      <CustomInput
        label="Phone"
        name="phone"
        placeholder="+(201) 555-0123"
        control={control}
      />
    </>
  );
}
