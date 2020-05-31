import {StyleSheet} from "react-native";
import { Dimensions } from 'react-native';
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
    divForm: {
        backgroundColor: "grey",
        height: 480
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
        flex: 1.05,
        marginBottom: 5,

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
        // backgroundColor: "red",
        width: "100%",
        // height: 200
    },
    childName: {
        color: "#666",
        fontWeight: "bold",
        fontSize: 18,
        // backgroundColor: "blue",
        textAlign: "center",
        textAlignVertical: "center",
        flex: 1
    },
    itemYearPicker: {
        flex: 1,
        height: "100%",
        alignSelf: "center",
        color: "#fff",
        fontWeight: "bold",
        textAlign: "center",
        textAlignVertical: "center",
        paddingTop: 10,
        // fontStyle: "italic"
    },
    viewDivForm: {
        width: "100%",
        flex: 12,
        // backgroundColor: "red",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },

    pageViewContainer: {
        flex: 10,
        width: "100%",
    },  

    page: {
        flex: 1
    },

    pickHome: {
        width: "100%",
        flex: 4,
        // backgroundColor: "cyan",
        flexDirection: "column"
    },
    pickPlace: {
        width: "100%",
        flex: 4,
        // backgroundColor: "grey"
    },
    btnContainer: {
        width: "100%",
        flex: 1.6,
        // backgroundColor:"cyan"
    },
    pickItem: {
        // backgroundColor: "blue",
        flex: 0.4,
        width: "100%",
        flexDirection: "row",
    },
    pickSubItem: {
        flex: 0.4,
        width: "100%",
        flexDirection: "row"
    },
    pickCell0: {
        height: "100%",
        flex: 0.6,
        // backgroundColor: "cyan",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: 10
    },
    checkbox: {
        alignSelf: "center",
        marginLeft: 10,
        backgroundColor: "red"
    },
    pickCell1: {
        height: "100%",
        flex: 4,
        // backgroundColor: "cyan",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row",
        // backgroundColor: "#ff0f0f"
    },
    txtPick: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 18,
        // fontStyle: "italic"
    },
    txtHomeAddress: {
        color: "#ccc",
        fontSize: 15,
        fontStyle: "italic",
        marginLeft: 10,
        height: "100%",
        flex: 4,
        // backgroundColor: "cyan",
        // lines: 2
    },
    btnChangeAddress: {
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        // backgroundColor: "blue",
        height: "100%",
        flex: 8,
        marginRight: 6,
        marginLeft: 6,
        marginBottom: 15
    },
    txtBtn: {
        color: "#c4dbff",
        fontWeight: "bold",
        textDecorationLine: "underline",
        fontStyle: "italic"
    },
    PlacePickerContainer: {
        width: Dimensions.get('window').width-20,
        height: "100%",
        // backgroundColor: "cyan",
        position: "absolute",
        alignSelf: "center",
        flexDirection: "column",
        paddingTop: 10
    },
    txtContainer: {
        width: "100%",
        height: 60,
        alignItems: "center",
        // justifyContent: "center"
    },
    placeSearchPanel: {
        backgroundColor: "#333",
        opacity: 0.8,
        width: "100%",
        height: "100%",
        position: "absolute",
        borderRadius: 10
    },
    txtPlace: {
        width: "100%",
        height: "100%",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "#aaa",
        fontSize: 18,
        color: "#fff",
        paddingLeft: 20,
        paddingRight: 20
    },
    flatListContainer: {
        width: "100%",
        marginTop: 10,
        borderRadius: 10
    },
    flatListPanel: {
        backgroundColor: "#fff",
        width: "100%",
        height: "100%",
        opacity: 0.8,
        position: "absolute",
        borderRadius: 10
    },
    placeItemContainer: {
        width: "100%",
        height: 40,
        alignItems: "center",
    },
    placeItem: {
        flex: 1,
        // backgroundColor: "cyan",
        width: "100%",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row"
    },
    txtPlaceItem: {
        color: "grey",
        fontWeight: "bold"
    },
    selectPlaceContainer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        height: 60
    }
})