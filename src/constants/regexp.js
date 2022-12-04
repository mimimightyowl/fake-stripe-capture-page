export const emailRegExp =
    /^(([^<>()\\[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


export const cvcRegExp = /^[0-9]{0,3}$/;

export const phoneRegExp = /^\+\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

export const cardRegExp =
    /^6(?:011\d{12}|5\d{14}|4[4-9]\d{13}|22(?:1(?:2[6-9]|[3-9]\d)|[2-8]\d{2}|9(?:[01]\d|2[0-5]))\d{10})$/;

export const expireDateRegExp = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;

export const cardholderDateRegExp = /^((?:[A-Za-z]+ ?){1,3})$/;

export const zipCodeRegExp = /^[0-9]{0,5}$/;

export const cityRegExp = /^[a-zA-Z',.\s-]{1,25}$/;