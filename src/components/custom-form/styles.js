import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
    container: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "350px",
        height: "700px",
    },
    title: {
        margin: "40px 0",
    },
    button: {
        margin: "40px 0",
        width: "100%",
    },
}));