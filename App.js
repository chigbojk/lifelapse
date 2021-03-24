import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import LoadingScreen from "./screens/LoadingScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

import NotificationScreen from "./screens/NotificationScreen";
import MessageScreen from "./screens/MessageScreen";
import ProfileScreen from "./screens/ProfileScreen";
import * as firebase from "firebase";
import {Ionicons} from '@expo/vector-icons'
import { createBottomTabNavigator } from "react-navigation-tabs";
import React from "react";
import Recorder from "./components/Recorder";
import LoadingRecordScreen from "./screens/LoadingRecordScreen";
import RecordScreen from './screens/RecordScreen'

var firebaseConfig = {
  apiKey: "AIzaSyASN3IW4uXwnrR7Up2WzgOhrgTVKM26bM4",
  authDomain: "lifelapse-2ae1f.firebaseapp.com",
  projectId: "lifelapse-2ae1f",
  storageBucket: "lifelapse-2ae1f.appspot.com",
  messagingSenderId: "663145789395",
  appId: "1:663145789395:web:aa3aba866674d685406126",
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();


const AppTabNavigator = createBottomTabNavigator(
  {Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-home" size={24} color={tintColor}></Ionicons>
      ),
    },
  },
  Message: {
    screen: MessageScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-people-outline" size={24} color={tintColor}></Ionicons>
      ),
    },
  },
  Record: {
    screen: RecordScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-videocam" size={48} color={tintColor} style={{shadowColor: "#E9446A", shadowOffset: {width: 0, height: 0}, shadowRadius: 10, shadowOpacity: 0.3}}></Ionicons>
      ),
    },
  },
  Notification: {
    screen: NotificationScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Ionicons
          name="ios-notifications"
          size={24}
          color={tintColor}
        ></Ionicons>
      ),
    },
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Ionicons name="ios-person" size={24} color={tintColor}></Ionicons>
      ),
    },
  }},
  {
    tabBarOptions: {
    activeTintColor: "#161F3D",
    inactiveTintColor: "#B8BBC4",
    showLabel: false
  }}
);

const RecordStack = createStackNavigator({
  Rec: RecordScreen
})

const AuthStack = createStackNavigator({
  Register: RegisterScreen,
  Login: LoginScreen
});


export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppTabNavigator,
      Record: RecordStack,
      Auth: AuthStack
    },

    {
      initialRouteName: "Loading",
    }
  )
);
