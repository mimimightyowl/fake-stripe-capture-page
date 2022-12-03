import { createInput } from "input-core";

const PHONE_MASK = "+(200) 000-0000";

const CARD_MASK = "0000 0000 0000 0000";

export const format = (value, mask) => {
    const input = createInput({
        value,
        mask,
    });
    const maskedValue = input.getState().visibleValue;

    if (
        maskedValue.slice(maskedValue.length - 1) === " " ||
        maskedValue.slice(maskedValue.length - 1) === "-"
    ) {
        return maskedValue.slice(0, maskedValue.length - 1);
    }
    return maskedValue;
};

export const formatInput = (value, name) => {
    switch (name) {
        case "phone":
            return format(value, PHONE_MASK);

        case "card":
            return format(value, CARD_MASK);

        default:
            return value;
    }
};