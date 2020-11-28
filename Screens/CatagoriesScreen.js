import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { CATEGORIES } from "../data/dummy-data";

const CatagoriesScreen = (props) => {
  const renderGridItem = (itemData) => {
    return (
      <TouchableOpacity onPress={() => {
        props.navigation.navigate('MealsScreen');
      }} style={styles.gridItem}>
        <View>
          <Text>{itemData.item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    ></FlatList>
  );
};

export default CatagoriesScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "red",
    borderWidth: 2,
  },
  Txt: {
    borderWidth: 1,
    borderColor: "blue",
    margin: 10,
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
});
