import { createInput } from "input-core";

export const formatPhone = (value, mask) => {
    const input = createInput({
        value,
        mask,
    });

    return input.getState().visibleValue;
};