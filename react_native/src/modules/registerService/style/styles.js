import {StyleSheet} from "react-native";
const colors = require("../../../color/Colors").default;

export default styles = StyleSheet.create({

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
    },
    content: {
        backgroundColor: "cyan",
        flex: 1,
        width: "100%"
    },
    map: {
        // position: "absolute",
        flex: 1,
        width: "100%",
        height: "100%"
    },
    YearPickerContainer: {
        width: 200,
        height: 30
    },
    itemYearPicker: {
        flex: 1,
        height: "100%",
        height: "100%",
        alignSelf: "center",
        color: "#aaa",
        fontWeight: "bold",
        textAlign: "center",
        textAlignVertical: "center",
        paddingTop: 10,
        fontStyle: "italic"
    }
})