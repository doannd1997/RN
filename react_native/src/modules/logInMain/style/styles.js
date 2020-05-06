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
    }
})