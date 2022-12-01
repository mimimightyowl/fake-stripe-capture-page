import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
    container: {
        // backgroundColor: "blue",
    },
    input: {
        backgroundColor: "red",
        width: "100%",
        marginBottom: "20px",
    },
}));