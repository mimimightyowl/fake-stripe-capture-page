import * as yup from "yup";
import {
    cityRegExp,
    emailRegExp,
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