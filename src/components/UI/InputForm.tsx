import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Colors } from "../../util/Colors";

interface Props {
  label: (string),
  value:any, 
  onUpdateValue:any,
  
};

export function InputForm({ label,value, onUpdateValue, }: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <TextInput
          style={styles.userText}
          placeholder={label}
          onChange={onUpdateValue}
          value={value }
        ></TextInput>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.textField,
    width: 344,
    height: 66,
    borderRadius: 4,
  },
  textContainer:{
    paddingLeft:10,
  },
  userText: {
    fontFamily: "Roboto-Medium",
    color: Colors.textDark,
    fontSize: 16,
    marginTop:10,
  },
});
