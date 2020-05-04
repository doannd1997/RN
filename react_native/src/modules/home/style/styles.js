import {StyleSheet} from "react-native";

export default styles = StyleSheet.create({
    btnLogin: {
        borderRadius: 12,
        borderWidth: 2,
        borderColor: "#ffffff",
        height: 35,
        width: 100,
        alignContent: "center",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "#de5a2a",
        right: 7
    },
    toolBarUser: {
        alignContent: "center",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        flex: 1,
        width: "100%",
        height: "100%",
        padding: 5
    },
    avatar: {
        width: 30, 
        height: 30, 
        borderRadius: 15, 
        borderWidth: 1, 
        borderColor: "grey",
        margin: 5
    }
})