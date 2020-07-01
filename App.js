import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import SearchScreen from './Screens/SearchScreen';
import TransactionScreen from './Screens/TransactionScreen';

export default class App extends React.Component {
  render(){
   return (
     <AppContainer/>
   );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const TabNavigator = createBottomTabNavigator({
  Search: {screen: SearchScreen},
  Transaction: {screen: TransactionScreen},
})
const AppContainer = createAppContainer(TabNavigator)