import EStyleSheet from "react-native-extended-stylesheet"
const colors = require("../../../../color/Colors").default;

export default EStyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#ffffff",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
    },
    content: {
      flex: 1,
      width: "100%",
      backgroundColor: "#fff"
    },
    mailContainer: {
        width: "100%",
        height: "36rem",
        borderRadius: 10,
        // backgroundColor: "#fff",
        paddingLeft: "2rem",
        paddingRight: "2rem"
    },
    btnMail: {
        flex: 1,
        width: "100%",
        height: "100%",
        borderBottomWidth: "0.5rem",
        borderBottomColor: "grey",
        flexDirection: "column",
        alignItems: "center",
    },
    mailHeaderContainer: {
        flex: 1,
        width: "100%",
        alignItems: "flex-start",
        justifyContent: "center"
    },
    mailContentContainer: {
        flex: 1.2,
        width: "100%",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: "transparent",
        paddingTop: "1.6rem",
        paddingLeft: "1.2rem"
    },
    mailTimeContainer: {
        flex: 1.5,
        width: "100%",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: "transparent",
        paddingLeft: "1.2rem",
    },
    mailLblHeader: {
        color: "#03284f",
        fontWeight: "bold",
        fontSize: "6rem"
    },
    mailLblContent: {
        color: "#444",
        // fontWeight: "bold",
        fontSize: "6rem"
    },
    mailLblTime: {
        fontStyle: "italic",
        color: "#03284f",
        fontSize: "4.6rem"
    },
    btnCreate: {
        position: "absolute",
        width: "20rem",
        height: "20rem",
        right: "12rem",
        bottom: "12rem",
        backgroundColor: "#0d6e32",
        borderRadius: "20rem",
        shadowColor: "#fff",
        shadowOffset: {
            width: "1.2rem",
            height: "1.2rem"
        },
        elevation: 5,
        alignItems: "center",
        justifyContent: "center"
    }
})