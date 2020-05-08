import {StyleSheet} from "react-native";
const colors = require("../../../color/Colors").default;
export default styles = StyleSheet.create({
    divInfo: {
        position: "absolute",
        width: "98%",
        height: 130,
        bottom: 3,
        flexDirection: "column-reverse",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        borderRadius: 6
    },
    panelInfo: {
        flex: 1,
        width: "100%",
        height: "100%",
        opacity: 0.75,
        backgroundColor: colors.trackingDivInfo,
        position: "absolute",
        borderRadius: 6,
        borderWidth: 1,
        borderColor: "grey"
    },
    viewInfo: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6,
        paddingLeft: 10,
        alignItems: "flex-start",
        justifyContent: "space-around"
    },
    btnExpandDivInfo: {
        position: "relative",
        width: 45,
        height: 35,
        bottom: 0,
        alignItems: "center",
        backgroundColor: "#dbdbdb",
        borderRadius: 3,
        // opacity: 0.6
        margin: 3
    },
    btnCollapseDivInfo: {
        position: "absolute",
        width: "98%",
        height: 130,
        bottom: 3,
        flexDirection: "row-reverse",
        alignItems: "flex-end"
    },
    map: {
        position: "absolute"
    },
    divExpand: {
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        position: "absolute",
        width: 50,
        height: 35,
        bottom: 3,
        backgroundColor: "#1c1c1c",
        borderRadius: 3,
        opacity: 0.8
    },
    btnExpand: {
        width: 50,
        height: 35,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    divInfoInside: {
        // backgroundColor: "red",
        width: "100%",
        height: 40,
        justifyContent: "center"
    },
    avatar: {
        width: 28,
        height: 28,
        borderRadius: 5,
        backgroundColor: "orange"
    }
})