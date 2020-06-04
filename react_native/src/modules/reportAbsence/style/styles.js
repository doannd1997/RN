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
        margin: 5
    },
    btnCluster: {
        backgroundColor: "grey",
        flex: 9,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
    },
    pickDateCluster: {
        flexDirection: "row",
        width: "100%",
        flex: 4,
        justifyContent: "space-around",
        alignItems: "center"
    },
    inputFieldItem: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
    },
    inputFieldFirstColumn: {
        height: "100%",
        width: 50,
        marginLeft: 10,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center"
    },
    inputFieldSecondColumn: {
        // width: 220,
        flex: 4,
        height: "80%",
        margin: 3,
        // alignSelf: "center",
        backgroundColor: "#fff",
        alignItems: "flex-start",
        justifyContent: "center",
        borderRadius: 3,
        marginLeft: 20
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
    formInputCluster: {
        flex: 9.2,
        width: "100%",
        flexDirection: "column",
    },
    btnConfirmContainer: {
        width: "100%",
        flex: 2
    },
    pickDateItem: {
        width: "48%",
        height: "96%",
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {width: 1, height: 2},
        elevation: 5,
        shadowOpacity: 0.3,
        backgroundColor: "#fff",
        paddingBottom: 15,
        borderRadius: 12
    },
    btnPickerDateItem: {
        width: "100%",
        height: "100%",
        flexDirection: "column-reverse",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "10%"
    },
    pickDateHeader: {
        textAlign: "center",
        textAlignVertical: "center",
        color: "#444",
        fontWeight: "bold"
    },
    pickDateTime: {
        width: "100%",
        height: 45,
        // backgroundColor: "red",
        fontSize: 24,
        textAlign: "center",
        textAlignVertical: "center",
        fontWeight: "bold",
        color: "#eee"
    },
    
    btnConfirm: {
        backgroundColor: colors.theme2,
        width: "100%",
        height: "100%",
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
    },
    defaultInfo: {
        flex: 4,
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "cyan",
        width: "100%",
        paddingBottom: 10
    },
    avatar: {
        marginTop: 10,
        marginBottom: 5,
        flex: 4,
        width: "100%",
    },
    childName: {
        color: "#666",
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
        textAlignVertical: "center",
        flex: 1
    },
})