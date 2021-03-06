import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Constant from '../utils/Constant';
const Header = props => {
  return (
    <View style={styles.header}>
        <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    paddingTop: 36,
    backgroundColor: Constant.PRIMARY_COLORS,
    alignItems: 'center',
    justifyContent: 'center'
  }, 
  headerTitle: {
    color: Constant.COLOR_BLACK,
    fontSize: 18,

  }
})

export default Header
