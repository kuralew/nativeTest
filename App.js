import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createSwitchNavigator, DrawerActions, createStackNavigator, createBottomTabNavigator, NavigationActions, createDrawerNavigator } from 'react-navigation'; // Version can be specified in package.json

import Ionicons from 'react-native-vector-icons/Ionicons';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignContent: 'center', marginTop: 60}}>
        <SwitchNav />
      </View>
    );
  }
}

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Ionicons name='md-add-circle' size = {25} color = {tintColor}/>
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Notifications')}
        title="notifications button"
      />
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications 333',
    drawerIcon: ({ tintColor }) => (
      <Ionicons name='md-add-circle' size = {25} color = {tintColor}/>
    )
  };

  render() {
    return (
      <View>
      <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
      />
      <Button onPress = {() => this.props.navigation.dispatch(DrawerActions.openDrawer())} title='Open' />
      </View>
    );
  }
}

const DrawerNav = createDrawerNavigator({
  Notifications: {
    screen: MyNotificationsScreen,
  },Home: {
    screen: MyHomeScreen,
  },
 
},  {
  navigationOptions: ({ navigation }) => ({
    drawerLabel: 'Dashboard',
    drawerWidth: 300,
    contentComponent: (<View>
                          <Text>One </Text>
                          <Text>Two</Text>
                      </View>)
  })
});

const stack = createStackNavigator({
  Home: {
    screen: MyHomeScreen,
  },
   Notifcations: {
     screen: MyNotificationsScreen
   },
    initialRouteName: 'Home'
});

const SwitchNav = createSwitchNavigator({
  stack: stack,
  drawer: DrawerNav
},
{
  navigationOptions: ({ navigation }) => ({
  initialRouteName: 'stack'
  })
});