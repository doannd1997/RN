import React, {Component} from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useIsFocused } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Provider } from "react-redux";
import store from '../redux/Redux';

const colors = require("../../../color/Colors").default;
const styles = require("../style/styles").default;

const HomeComponent = require("../../mainTabs/home/screen/HomeTab").default;
const HistoryComponent = require("../../mainTabs/history/screen/History").default;
const MailComponent = require("../../mainTabs/mail/screen/Mail").default;
const AccountComponent = require("../../mainTabs/account/screen/ScreenAccount").default;

function Home(props) {
  // const isFocused = useIsFocused();
  // console.log(">>>> " + JSON.stringify(props))
  // console.log(">>pp " + isFocused);
  // for(var m in props.navigation) {
  //   if(typeof props.navigation[m] == "function") {
  //       console.log(m + " //");
  //   }
  // }

  // for(var m in props.route) {
  //   if(typeof props.navigation[m] == "function") {
  //       console.log(m + " \\");
  //   }
  // }
  
  return (
    <HomeComponent {...props} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    </HomeComponent>
  );
}

function History() {
  return (
    <HistoryComponent style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    </HistoryComponent>
  );
}

function Mail() {
  return (
    <MailComponent style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    </MailComponent>
  );
}

function Account() {
    return (
      <AccountComponent style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      </AccountComponent>
    );
  }

const Tab = createBottomTabNavigator();

export default class HomeScreen extends Component {
    render(){
      const tab_name_home = global.localization.getLang("lang_tab_home")
      const tab_name_history = global.localization.getLang("lang_tab_history")
      const tab_name_mail = global.localization.getLang("lang_tab_mail")
      const tab_name_account = global.localization.getLang("lang_tab_account")

      var params = this.props.route.params;
      if (typeof params == 'object'){
        if (params.logedIn === true){
          store.dispatch({type: "LOG_IN"});
        }
        if (params.logedIn === false){
          store.dispatch({type: "LOG_OUT"});
        };
        delete this.props.route.params;
      }

      return (
        <Provider store={store}>
          <View
          style={{
            width: '100%',
            height: '100%',
          }}>
          <Tab.Navigator
            initialRouteName="Home"
            tabBarOptions={{
              activeTintColor: colors.theme2,
              allowFontScaling: true,
              labelStyle: styles.tabLbl,
              style: styles.tabBar
            }}
            >
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                tabBarLabel: global.localization.getLang("lang_tab_home"),
                tabBarIcon: ({color, size}) => (
                  <Icon name="home" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="History"
              component={History}
              options={{
                tabBarLabel: global.localization.getLang("lang_tab_history"),
                tabBarIcon: ({color, size}) => (
                  <Icon name="list" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Mail"
              component={Mail}
              options={{
                tabBarLabel: global.localization.getLang("lang_tab_mail"),
                tabBarIcon: ({color, size}) => (
                  <Icon name="inbox" size={size} color={color} />
                ),
              }}
            />
            <Tab.Screen
              name="Account"
              component={Account}
              options={{
                tabBarLabel: global.localization.getLang("lang_tab_account"),
                tabBarIcon: ({color, size}) => (
                  <Icon name="user" size={size} color={color} />
                ),
              }}
            />
          </Tab.Navigator>
        </View>
        </Provider>
      );
    }

    
}

