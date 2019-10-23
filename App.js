import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './component/Home'
import {createStackNavigator} from "react-navigation-stack";
import About from "./component/About";
import {createAppContainer} from "react-navigation";


const NaviInterface = createStackNavigator({
  Home:  {screen: Home},
  About: {screen: About}
});

const Navigation = createAppContainer(NaviInterface);


export default function App () {

  return (
        <Home/>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    marginBottom: 15
  },
  colorSelector: {
    marginTop: 200
  }
});

