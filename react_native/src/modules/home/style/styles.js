import {StyleSheet} from "react-native";

export default (styles = StyleSheet.create({
  btnLogin: {
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#ffffff',
    height: 35,
    width: 100,
    alignContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: "#de5a2a",
    right: 7,
  },
  toolBarUser: {
    alignContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
    width: '100%',
    height: '100%',
    padding: 5,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'grey',
    margin: 5,
  },
  gridView: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "cyan",
    width: '100%',
    padding: 5,
    backgroundColor: "#fff"
  },
  buttonGrid: {
    borderRadius: 4,
    width: '100%',
    height: 160,
    flexDirection: 'row-reverse',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    alignItems: "flex-end"
  },
  buttonGridHeader: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18,
    position: "absolute",
    margin: 15,
    paddingBottom: 10,
    // textShadowColor:'#585858',
    // textShadowOffset:{width: 6, height: 4},
    // textShadowRadius:10,
  },
  imgTheme: {
      width: 180,
      height: "100%",
      borderRadius: 4,
      position: "absolute",
      right: 0
  }
}));