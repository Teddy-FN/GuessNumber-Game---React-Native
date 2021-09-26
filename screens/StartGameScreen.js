import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
// IMPORT COLOS FROM UTILS
import Constant from "../utils/Constant";
// IMPORT COMPONENTS
import Cards from "../components/Cards";
import Input from "../components/Input";
import NumberContainer from "../components/NumberContainer";

const StartGameScreen = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumbers, setSelectedNumbers] = useState();
  const handlerInputNumbers = (e) => {
    console.log("INI E", e);
    setEnteredValue(e.replace(/[^0-9]/g, ""));
  };

  const handlerReset = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  const handlerInput = () => {
    const choosenNumbers = parseInt(enteredValue);
    if (isNaN(choosenNumbers) || choosenNumbers <= 0 || choosenNumbers > 99) {
      Alert.alert(
        "Invalid Numbers",
        "Number has to be a number between 1 and 99.",
        [{ text: "okay", style: "destructive", onPress: handlerReset }]
      );
      return;
    }
    setConfirmed(true);
    setSelectedNumbers(choosenNumbers);
    setEnteredValue("");
    Keyboard.dismiss();
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <Cards style={styles.summaryContainer}>
        <Text>You selected</Text>
        <NumberContainer>{selectedNumbers}</NumberContainer>
        <Button title="Start game" />
      </Cards>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screens}>
        <Text style={styles.title}>Start a New game!</Text>
        <Cards style={styles.inputContainer}>
          <Text>Select a Number</Text>
          <Input
            style={styles.inputs}
            blurOnSubmit
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="numeric"
            maxLength={2}
            onChangeText={handlerInputNumbers}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <View styles={styles.button}>
              <Button
                title="Reset"
                onPress={handlerReset}
                color={Constant.PRIMARY_COLORS}
              />
            </View>
            <View styles={styles.button}>
              <Button
                title="Confirm"
                onPress={handlerInput}
                color={Constant.ACCENT_COLORS}
              />
            </View>
          </View>
        </Cards>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screens: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  button: {
    width: 120,
  },
  inputs: {
    width: 50,
    textAlign: "center",
  },
  summaryContainer : {
    marginTop: 20,
    alignItems: 'center'
  }
});

export default StartGameScreen;
