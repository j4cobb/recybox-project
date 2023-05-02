import * as React from "react";
import {useState, useEffect } from 'react-native';
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import HomeScreen from "./screens/HomeScreen";
import ScanQrScreen from "./screens/ScanQrScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import LocationScreen from "./screens/LocationScreen";
import StatsScreen from "./screens/StatsScreen";
import ProfileScreen from "./screens/ProfileScreen";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{ headerShown: false, headerLeftLabelVisible: false }}
        />
        <Stack.Screen
          name="register"
          component={RegisterScreen}
          options={{ headerShown: false, headerLeftLabelVisible: false }}
        />
        <Stack.Screen
          name="main"
          component={MyTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MyTabs() {
  
  

  return (
    <Tab.Navigator
      labeled={false}
      shifting={false}
      activeColor="red"
      inactiveColor="white"
      labelStyle={{ fontSize: 12 }}
      barStyle= {{backgroundColor: '#000'}}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: "neviem",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="wallet" size={26} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ScanQr"
        component={ScanQrScreen}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="recycle"
              size={30}
              color={color}
              
            />
          ),
        }}
      />
      <Tab.Screen
        name="Location"
        component={LocationScreen}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="map-marker"
              size={30}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Stats"
        component={StatsScreen}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="chart-box"
              size={30}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="account"
              size={30}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
