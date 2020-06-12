import EStyleSheet from "react-native-extended-stylesheet"
const colors = require("../../../color/Colors").default;

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
    guardianContainer: {
        width: "100%",
        backgroundColor: "transparent",
        height: "40rem",
        padding: "1rem"
    },
    btnCreate: {
        position: "absolute",
        width: "20rem",
        height: "20rem",
        right: "12rem",
        bottom: "12rem",
        backgroundColor: "#088bbf",
        borderRadius: "20rem",
        shadowColor: "#fff",
        shadowOffset: {
            width: "1.2rem",
            height: "1.2rem"
        },
        elevation: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    modal: {
        justifyContent: "center",
        alignItems: "center"
    },
    modalContentContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center",
    },
    divForm: {
        width: "120rem",
        height: "170rem",
        borderRadius: "8rem",
        backgroundColor: "#fff",
        flexDirection: "column"
    },
    formComposeHeader: {
        width: "100%",
        flex: 1,
        borderTopLeftRadius: "8rem",
        borderTopRightRadius: "8rem",
        backgroundColor: colors.theme2,
        justifyContent: "center",
        alignItems: "center"
    },
    formComposeContent: {
        width: "100%",
        flex: 5
    },
    formComposeFooter: {
        width: "100%",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderTopWidth: 1,
        borderTopColor: "#ddd"
    },
    imgClose: {
        width: "100%",
        height: "100%"
    },
    imgAdd: {
        width: "12rem",
        height: "12rem"
    },
    btnGuardian: {
        backgroundColor: "#fff",
        width: "100%",
        height: "100%",
        borderRadius: "1rem",
        flexDirection: "row"
    },
    avatarContainer: {
        height: "100%",
        aspectRatio: 1,
        backgroundColor: "transparent",
        justifyContent: "center",
        alignItems: "center"
    },
    avatar: {
        height: "90%",
        aspectRatio: 1,
        borderRadius: "20rem"
    },
    infoContainer: {
        backgroundColor: "#1a40ab",
        flex: 1,
        height: "100%",
        alignItems: "center",
        flexDirection: "column",
        borderTopRightRadius: "1rem",
        borderBottomRightRadius: "1rem",
        paddingLeft: "2rem"
    },
    infoNameContainer: {
        width: "100%",
        flex: 1,
        // backgroundColor: "red",
        justifyContent: "center"
    },
    infoElementcontainer: {
        width: "100%",
        flex: 0.6,
        // backgroundColor: "blue"
    },
    textName: {
        fontSize: "7rem"
    }
})