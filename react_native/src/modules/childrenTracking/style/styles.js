import {StyleSheet} from "react-native";

export default styles = StyleSheet.create({
    divInfo: {
        position: "absolute",
        width: "98%",
        height: 130,
        bottom: 3,
        flexDirection: "row-reverse",
        alignItems: "flex-end",
        borderRadius: 6
    },
    panelInfo: {
        flex: 1,
        width: "100%",
        height: "100%",
        opacity: 0.7,
        backgroundColor: "#1c1c1c",
        position: "absolute",
        borderRadius: 6
    },
    viewInfo: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 6
    },
    btnExpandDivInfo: {
        position: "relative",
        width: 50,
        height: 35,
        bottom: 0,
        alignItems: "center",
        backgroundColor: "transparent",
        borderRadius: 3,
        // opacity: 0.6
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
    }
})