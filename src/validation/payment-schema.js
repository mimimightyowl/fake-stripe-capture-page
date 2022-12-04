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

export const paymentSchema = yup
    .object()
    .shape({
        email: yup
            .string()
            .required("Email cannot be empty")
            .matches(emailRegExp, "Email is not valid"),
        phone: yup
            .string()
            .required("Phone number cannot be empty")
            .matches(phoneRegExp, "Phone number is 10 characters length"),
        card: yup
            .string()
            .required("Card number cannot be empty")
            .matches(cardRegExp, "Card number is not valid"),
        expire: yup
            .string()
            .required("Expire date cannot be empty")
            .matches(expireDateRegExp, "Expire date is MM/YY format"),
        cvc: yup
            .string()
            .required("CVC cannot be empty")
            .matches(cvcRegExp, "CVC is 3 number code on your card"),
        cardholder: yup
            .string()
            .required("Cardholder name cannot be empty")
            .matches(
                cardholderDateRegExp,
                "Cardholder name is not valid"
            ),
        address: yup.string().required("Address cannot be empty"),
        city: yup
            .string()
            .required("City cannot be empty")
            .matches(cityRegExp, "City doesn't exist"),
        zipcode: yup
            .string()
            .required("Postal code cannot be empty")
            .matches(zipCodeRegExp, "Postal code is invalid"),
    })
    .required();