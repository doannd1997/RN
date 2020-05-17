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
        // flex: 1.5,
        width: "100%",
        height: 320
    },
    btnCluster: {
        backgroundColor: "#fff",
        height: 50,
        width: 320,
        justifyContent: "center",
        alignItems: "center"
    },
    inputFieldItem: {
        height: 75,
        margin: 2,
        flexDirection: "row",
        marginTop: 5,
        // borderBottomWidth: 1,
        // marginBottom: 10,
        // borderBottomColor: "#ddd",
        // backgroundColor: "cyan"
    },
    inputFieldFirstColumn: {
        height: 70,
        width: 70,
        margin: 3,
        alignSelf: "center",
        // backgroundColor: "cyan",
        alignItems: "center",
        justifyContent: "center"
    },
    inputFieldSecondColumn: {
        width: 200,
        height: 50,
        margin: 3,
        alignSelf: "center",
    },
    pickerItem: {
        color: "#000",
        fontSize: 18,
        textAlign: "center",
        textAlignVertical: "center"
    },
    childName: {
        fontStyle: "italic"
    },
    pickDateCluster: {
        // backgroundColor: "cyan",
        flex: 1,
        padding: 3,
        flexDirection: "row"
    },
    pickDateItem: {
        flex: 1,
        backgroundColor: "#fff",
        margin: 1,
        shadowColor: "#00f",
        shadowOffset: {width: 5, height: 5},
        elevation: 5,
        backgroundColor: "#fff",
        paddingBottom: 15,
    },
    btnPickerDateItem: {
        width: "100%",
        height: "100%",
        flexDirection: "column-reverse",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    pickDateHeader: {
        textAlign: "center",
        textAlignVertical: "center",
        color: "grey"
    },
    pickDateTime: {
        width: "100%",
        height: 45,
        // backgroundColor: "red",
        fontSize: 24,
        textAlign: "center",
        textAlignVertical: "center"
    },
    btnConfirm: {
        backgroundColor: colors.theme2,
        width: 310,
        height: 40,
        // flex: 1,
        borderRadius: 2,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        elevation: 5
    },
    txtOk: {
        color: "#fff",
        fontSize: 18
    }
})