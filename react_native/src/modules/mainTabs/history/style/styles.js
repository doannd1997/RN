import {StyleSheet} from "react-native";

export default StyleSheet.create({
    sectionListItem: {
        height: 40,
        paddingLeft: 10,
        margin: 5,
        alignItems: "center",
        flexDirection: "row",
        borderRadius: 10
    },
    itemBoadring: {
        backgroundColor: "#00c206",
    },
    itemGetOff: {
        backgroundColor: "orange",
    },
    sectionListHeader: {
        backgroundColor: "#fff",
        height: 28,
        marginTop: 10,
        marginLeft: 5,
        alignItems: "flex-start",
        justifyContent: "center",
        borderTopWidth :1,
        borderTopColor: 'grey',
    },
    headerText: {
        fontWeight: "300",
        fontFamily: "arial",
        fontSize: 20,
    },
    itemText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16
    }
})