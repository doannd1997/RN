import {StyleSheet} from "react-native";
const colors = require("../../../../color/Colors").default;

export default StyleSheet.create({
    sectionListHeader: {
        backgroundColor: "#fff",
        height: 28,
        marginTop: 10,
        marginLeft: 5,
        alignItems: "flex-start",
        justifyContent: "center",
    },
    itemBoadring: {
        backgroundColor: "#00c206",
    },
    itemGetOff: {
        backgroundColor: "orange",
    },
    headerText: {
        fontWeight: "300",
        fontFamily: "arial",
        fontSize: 20,
        color: "#fff",
        backgroundColor: "#aaaaaa",
        width: 120,
        borderRadius: 10,
        textAlign: "center",
        fontSize: 14,
        fontWeight: "bold"
    },
    sectionListItem: {
        height: 45,
        // paddingLeft: 10,
        marginLeft: 12,
        marginRight: 12,
        marginTop: 3,
        marginBottom: 3,
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 1,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {width: 5, height: 5},
        elevation: 2,
        borderRadius: 3
    },
    itemActionType: {
        height: "100%",
        fontWeight: "bold",
        fontSize: 16,
        flex: 1.2,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 3
    },
    itemTime: {
        height: "100%",
        // textAlign: "center",
        flex: 2.5,
        // color: "#000",
        justifyContent: 'center',
        alignItems: "center"
        // fontWeight: "bold",
        // fontSize: 18,
        // backgroundColor: "#efefef",
        // fontFamily: "tahoma",
        // paddingTop: 7
    },
    itemTimeText:{
        color:"#fff",
        fontSize: 16
    },  
    itemPlace: {
        height: "100%",
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        flex: 4,
        color: "#000",
        fontWeight: "normal",
        fontSize: 15,
        padding: 2,
        fontFamily: "normal",
    },
    toolBar: {
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 5,
        paddingRight: 5,
        flexDirection: "row"
    },
    btnPickDate: {
        width: 100,
        height: 35,
        backgroundColor: colors.toolBarBtn,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        paddingLeft: 3,
        paddingRight: 3
    },
    infoDiv: {
        flex: 1,
        height: 35,
        // backgroundColor: "cyan",
        justifyContent: "center"
    },
    dateTimePicker: {
        position: "absolute",
        alignSelf: "center"
    }
})