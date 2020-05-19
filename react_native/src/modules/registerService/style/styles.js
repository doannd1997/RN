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
        alignItems: "center",
        justifyContent: "center"
    },
    inputFieldFirstColumn: {
        height: 70,
        width: 70,
        margin: 3,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center"
    },
    inputFieldSecondColumn: {
        width: 220,
        height: 50,
        margin: 3,
        // alignSelf: "center",
        backgroundColor: "#fff",
        alignItems: "flex-start",
        justifyContent: "center",
        borderRadius: 3,
        padding: 4,
    },
    inputFieldSecondColumnWithShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        elevation: 5,
        shadowOpacity: 0.3,
    },
    pickerItem: {
        color: "#000",
        fontSize: 18,
        textAlign: "center",
        textAlignVertical: "center"
    },
    childName: {
        fontStyle: "italic",
        textAlignVertical: "center",
        textAlign: "center",
        // alignSelf: "center",
        justifyContent: "center",
        alignItems: "center"
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
        shadowColor: "#000",
        shadowOffset: {width: 1, height: 2},
        elevation: 5,
        shadowOpacity: 0.3,
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
        shadowColor: "#000",
        shadowOffset: {width: 1, height: 2},
        elevation: 5,
        shadowOpacity: 0.3,
    },
    txtOk: {
        color: "#fff",
        fontSize: 18
    }
})