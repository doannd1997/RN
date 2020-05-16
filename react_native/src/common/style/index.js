import {StyleSheet} from "react-native";
const colors = require("../../color/Colors").default;


export default styles = StyleSheet.create({
    fullViewVerticalCenter: {
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
    fullViewVerticalTopDown: {
        flex: 1,
        width: "100%",
        height: "100%",
        // alignContent: "center",
        // flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8, 
    },
    fullViewVerticalBottomUp: {
        flex: 1,
        width: "100%",
        height: "100%",
        // alignContent: "center",
        // flexDirection: "column",
        alignItems: "center",
        // justifyContent: "center",
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8, 
        flexDirection: "column-reverse"
    },
    fullViewCenterHorizontal: {
        flex: 1,
        alignContent: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    toolBar: {
        // backgroundColor: "#004400",
        width: "100%",
        height: 45,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        // position: "absolute",
        top: 0,
        backgroundColor: colors.theme,
    },
    text: {
        color: "#ffffff",
        fontFamily: "Arial"
    },
    textBold: {
        fontWeight: "bold"
    },
    screenWithToolBar: {
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    toolBarBtn: {
        width: 100,
        height: 35,
        backgroundColor: colors.toolBarBtn,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        padding: 10
    },
    toolBarBtnHome: {
        width: 40,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    toolBarTitle: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 17
    },
    divForm: {
        backgroundColor: "#fff",
        width: 350,
        marginTop: 50,
        height: 450,
        // flex: 1
        shadowColor: "#000",
        shadowOffset: {width: 10, height: 10},
        elevation: 10,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    divFormTitle: {
        fontWeight: "200",
        fontSize: 16,
        color: "#000",
        top: 0,
        backgroundColor: "cyan",
        width: "100%",
        height: 25,
        textAlign: "center"
    }
});