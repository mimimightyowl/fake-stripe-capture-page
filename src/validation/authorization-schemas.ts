import * as yup from "yup";
import {
  cardholderDateRegExp,
  cardRegExp,
  cityRegExp,
  cvcRegExp,
  emailRegExp,
  expireDateRegExp,
  phoneRegExp,
  zipCodeRegExp,
} from "../constants/regexp";

export const emailSchemaExtended = yup
  .object()
  .shape({
    email: yup
      .string()
      .required("Email cannot be empty")
      .matches(emailRegExp, "Email is not valid"),
  })
  .required();

export const cvcSchema = yup
  .object()
  .shape({
    cvc: yup
      .string()
      .required("CVC cannot be empty")
      .matches(cvcRegExp, "CVC is 3 number code on your card"),
  })
  .required();

export const phoneSchema = yup
  .object()
  .shape({
    phone: yup
      .string()
      .required("Phone number cannot be empty")
      .matches(phoneRegExp, "Phone number is 10 characters length"),
  })
  .required();

export const cardSchema = yup
  .object()
  .shape({
    card: yup
      .string()
      .required("Card number cannot be empty")
      .matches(cardRegExp, "Card number is 16 number length"),
  })
  .required();

export const expireDateSchema = yup
  .object()
  .shape({
    card: yup
      .string()
      .required("Expire date cannot be empty")
      .matches(expireDateRegExp, "Expire date is MM/YY format"),
  })
  .required();

export const cardholderSchema = yup
  .object()
  .shape({
    card: yup
      .string()
      .required("Cardholder name cannot be empty")
      .matches(
        cardholderDateRegExp,
        "Cardholder name max 3 words, no digits, no special symbols"
      ),
  })
  .required();

export const addressCodeSchema = yup.string().required('Address cannot be empty');

export const zipCodeSchema = yup
  .object()
  .shape({
    card: yup
      .string()
      .required("Postal code cannot be empty")
      .matches(zipCodeRegExp, "Postal code is 5 number code"),
  })
  .required();

export const citySchema = yup
  .object()
  .shape({
    card: yup
      .string()
      .required("City cannot be empty")
      .matches(cityRegExp, "City doesn't exist"),
  })
  .required();
