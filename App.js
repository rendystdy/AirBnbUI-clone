import React from 'react';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { Image } from 'react-native';
import Explore from './src/screens/Explore';
import Inbox from './src/screens/Inbox';
import Saved from './src/screens/Saved';
import Trips from './src/screens/Trips';
import Profile from './src/screens/Profile';

const App = () => {
  return (
    <AppContainer />
  );
};

export default App;

const AppsStackNavigator = createBottomTabNavigator({
  Explore: {
    screen: Explore,
    navigationOptions: {
      tabBarLabel:"EXPLORE",
      tabBarIcon: ({tintColor}) => (
      <Image source={require('./assets/loupe.png')} style={{height: 20, width: 20, tintColor: tintColor }} />
      )
    }
  },
  Inbox: {
    screen: Inbox,
    navigationOptions: {
      tabBarLabel: 'INBOX',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./assets/like.png')} style={{height: 20, width: 20, tintColor: tintColor }} />
      )
    }
  },
  Saved: {
    screen: Saved,
    navigationOptions: {
      tabBarLabel: 'SAVED',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./assets/airbnb.png')} style={{height: 20, width: 20, tintColor: tintColor }} />
      )
    }
  },
  Trips: {
    screen: Trips,
    navigationOptions: {
      tabBarLabel: 'TRIPS',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./assets/text-box.png')} style={{height: 20, width: 20, tintColor: tintColor }} />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'PROFILE',
      tabBarIcon: ({ tintColor }) => (
        <Image source={require('./assets/profile.png')} style={{height: 20, width: 20, tintColor: tintColor}} />
      )
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: 'red',
    inactiveTintColor: 'grey',
    style: {
      backgroundColor: 'white',
      borderTopWidth: 0,
      shadowOffset: { width: 20, height: 12},
      shadowColor: 'black',
      shadowOpacity: 0.5,
      elevation: 5
    }
  }
})

const AppContainer = createAppContainer(AppsStackNavigator);
