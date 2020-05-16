import {StyleSheet} from "react-native";
const colors = require("../../../color/Colors").default;

export default styles = StyleSheet.create({
    input: {
        width: 300,
        margin: 5,
    },
    button: {
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.commonButton,
    },
    text: {
        fontSize: 16
    },
    toolBar: {
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 5,
        paddingRight: 5,
        flexDirection: "row"
    },
    itemInfo: {
        width: "100%",
        height: 80,
        backgroundColor: "red",
        margin: 5
    },
    inputField: {
        backgroundColor: "green",
        flex: 1,
        width: "100%"
    },
    btnCluster: {
        backgroundColor: "red",
        flex: 1,
        width: "100%"
    },
    inputFieldItem: {
        flex: 1,
        margin: 2,
        backgroundColor: "cyan",
        flexDirection: "row"
    },
    inputFieldFirstColumn: {
        height: "100%",
        width: 70,
        backgroundColor: "green",
        padding: 3
    },
    inputFieldSecondColumn: {
        width: 200,
        height: 50,
        // backgroundColor: "cyan",
        // height: "100%",
        margin: 3,
        alignSelf: "center",
        borderWidth: 1,
        // borderColor: "#ff000"
    },
    pickerItem: {
        color: "#fff",
        fontSize: 30
    }
})