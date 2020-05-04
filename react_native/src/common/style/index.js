import {StyleSheet} from "react-native";
const colors = require("../../color/Colors").default;


export default styles = StyleSheet.create({
    fullViewCenterVertical: {
        flex: 1,
        width: "100%",
        height: "100%",
        alignContent: "center",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8, 
    },
    fullViewCenterHorizontal: {
        flex: 1,
        alignContent: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    toolBar: {
        backgroundColor: "#004400",
        width: "100%",
        height: 45,
        alignItems: "center",
        // justifyContent: "center",
        flexDirection: "row-reverse",
        position: "absolute",
        top: 0,
        backgroundColor: colors.theme,
    },
    text: {
        color: "#ffffff",
        fontFamily: "Arial"
    },
    textBold: {
        fontWeight: "bold"
    }
});