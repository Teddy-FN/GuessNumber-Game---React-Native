import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

const Input = props => {
  console.log('INI PROPS INPUT', props)
  return (
      <TextInput {...props} style={{
        ...styles.Input, ...props.style
      }} />
  );
};

const styles = StyleSheet.create({
  Input: {
     height: 30,
     borderBottomColor: 'grey',
     borderBottomWidth: 1,
     marginVertical: 10
  }
});

export default Input;