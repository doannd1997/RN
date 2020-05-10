import * as React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Provider } from "react-redux";

const store = require("../redux/Redux").default;
const colors = require("../../../color/Colors").default;

const HomeComponent = require("../../mainTabs/home/home").default;
const HistoryComponent = require("../../mainTabs/history/History").default;

function Home(props) {
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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Mail!</Text>
    </View>
  );
}

function Account() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Account!</Text>
      </View>
    );
  }

const Tab = createBottomTabNavigator();

function MyTabs() {
    const tab_name_home = global.localization.getLang("lang_tab_home")
    const tab_name_history = global.localization.getLang("lang_tab_history")
    const tab_name_mail = global.localization.getLang("lang_tab_mail")
    const tab_name_account = global.localization.getLang("lang_tab_account")

    return (
      <Provider store={store}>
        <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
            activeTintColor: '#ffffff',
            activeBackgroundColor: colors.theme
        }}
        >
        <Tab.Screen
            name="Home"
            component={Home}
            options={{
            tabBarLabel: tab_name_home,
            tabBarIcon: ({ color, size }) => (
                // <MaterialCommunityIcons name="home" color={color} size={size} />
                <Icon name="home" size={size} color={color} />
            ),
            }}
        />
        <Tab.Screen
            name="History"
            component={History}
            options={{
            tabBarLabel: tab_name_history,
            tabBarIcon: ({ color, size }) => (
                <Icon name="list" size={size} color={color} />
            ),
            }}
        />
        <Tab.Screen
            name="Mail"
            component={Mail}
            options={{
            tabBarLabel: tab_name_mail,
            tabBarIcon: ({ color, size }) => (
                <Icon name="inbox" size={size} color={color} />
            ),
            }}
        />
        <Tab.Screen
            name="Account"
            component={Account}
            options={{
            tabBarLabel: tab_name_account,
            tabBarIcon: ({ color, size }) => (
                <Icon name="user" size={size} color={color} />
            ),
            }}
        />
        </Tab.Navigator>
      </Provider>
    );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
