import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
    container: {
        width: "350px",

        marginBottom: "20px",
    },
    input: {
        width: "100%",
    },
    error: {
        color: theme.palette.error.main,
    },
}));