import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Constant from "../utils/Constant";
const NumberContainer = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numbers}>{props.children}</Text>
    </View>
  );
};

export default NumberContainer;

const styles = StyleSheet.create({
  container : {
    borderWidth: 2,
    borderColor: Constant.PRIMARY_COLORS,
    padding: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  numbers : {
    color: Constant.ACCENT_COLORS,
    fontSize: 22,
  }
});
