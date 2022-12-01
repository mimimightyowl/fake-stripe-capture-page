import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => ({
    container: {
        display: "flex",
        flexDirection: 'column',
        justifyContent: "center",
    },
}));