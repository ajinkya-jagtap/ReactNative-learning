import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import CatagoriesScreen from "../Screens/CatagoriesScreen";
import FavoritesScreen from "../Screens/FavoritesScreen";
import FiltersScreen from "../Screens/FiltersScreen";
import MealDetailsScreen from "../Screens/MealDetailsScreen";
import MealsScreen from "../Screens/MealsScreen";
import React from "react";

const stack = createStackNavigator();

const MealsNavigator = () => {
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
          name="Catagories"
          component={CatagoriesScreen}
        ></stack.Screen>
        <stack.Screen
          name="MealDetails"
          component={MealDetailsScreen}
        ></stack.Screen>
        <stack.Screen name="MealsScreen" component={MealsScreen}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default MealsNavigator;
