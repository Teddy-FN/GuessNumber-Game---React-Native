import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constant from "../utils/Constant";
const Cards = (props) => {
  console.log(props);
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    shadowColor: Constant.COLOR_BLACK,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: Constant.COLOR_WHITE,
    padding: 10,
    borderRadius: 15,
  },
});

export default Cards;
