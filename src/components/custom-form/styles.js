import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
        border: "2px",
    },
    title: {
        margin: "40px 0",
    },
    button: {
        margin: "40px 0",
        width: "100%",
    },
}));