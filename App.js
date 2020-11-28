import { StatusBar } from "expo-status-bar";
import React from 'react';
import { StyleSheet, Text, View } from "react-native";
import MealsNavigator from './Navigation/MealsNavigator';

export default function App() {
  return <MealsNavigator></MealsNavigator>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
