import EStyleSheet from "react-native-extended-stylesheet"
const colors = require("../../../../color/Colors").default;

export default EStyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        flexDirection: "column"
    },
    coverContainer: {
        width: "100%",
        flex: 1,
    },
    parentCover: {
        width: "100%",
        height: "100%"
    },
    parentInfoContainer: {
        width: "100%",
        backgroundColor: "#fff",
        flex: 3,
        alignItems: "center",
        flexDirection :"column"
    },
    parentAvatarContainer: {
        width: "70rem",
        height: "35rem",
        top: "-35rem",
    },
    parentAvatar: {
        width: "70rem",
        height: "70rem",
        backgroundColor: "#fafafa",
        borderRadius: "35rem",
        borderWidth: "0.4rem",
        borderColor: "grey"
    },
    otherInfoContainer: {
        width: "100%",
        alignItems: "center",
        flex: 1,
        paddingTop: "5rem",
    },
    parentNameContainer: {
        width: "90%",
        height: "20rem",
        // backgroundColor: "#187ede",
        justifyContent: "center",
        borderRadius: "10rem"
    },
    btnLogOutContainer: {
        width: "90%",
        height: "20rem",
        backgroundColor: "#f00",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "4rem",
        marginTop: "10rem"
    },
    parentName: {
        fontSize: "10rem",
        textAlign: "center",
        color: "grey"
    },
    txtLogOut: {
        fontSize: "10rem"
    }
})