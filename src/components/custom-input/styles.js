import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
    container: {
        width: "100%",
        marginBottom: "20px",
    },
    input: {
        width: "100%",
    },
    error: {
        color: theme.palette.error.main,
    },
}));