import {StyleSheet} from "react-native";
const colors = require("../../../color/Colors").default;
export default styles = StyleSheet.create({
    divInfo: {
        position: "absolute",
        width: "98%",
        height: 130,
        bottom: 3,
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "flex-start",
        borderRadius: 6,
        // shadowColor: '#000',
        // shadowOffset: { width: -5, height: -5 },
        // shadowOpacity: 0.8,
        // shadowRadius: 2,
        // elevation: 4,
    },
    panelInfo: {
        flex: 1,
        width: "100%",
        height: "100%",
        opacity: 0.8,
        backgroundColor: colors.trackingDivInfo,
        position: "absolute",
        borderRadius: 6,
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
        // position: "relative",
        width: 40,
        height: 30,
        bottom: 0,
        alignItems: "center",
        // borderRadius: 3,
        // margin: 3
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
        opacity: 1,
        
    },
    btnExpand: {
        width: 50,
        height: 35,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    divInfoInside: {
        width: "100%",
        height: 40,
        justifyContent: "center"
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: "orange"
    },
    topRightClusterButton: {
        backgroundColor: "#140640",
        width: 160,
        height: 30,
        borderRadius: 3,
        justifyContent: "flex-start",
        flexDirection: "row-reverse",
        alignItems: "flex-end",
        
    },
    txtMapType: {
        color: "#fff",
        alignSelf: "center",
        flex: 1,
        textAlign: "center",
        fontWeight: "bold",
        fontStyle: "italic"
    }
})