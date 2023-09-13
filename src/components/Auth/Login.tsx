import React, { useState } from "react";
import { InputForm } from "../UI/InputForm";
import { StyleSheet, View } from "react-native";
import { Title } from "../UI/Tittle";

interface props {
  style?:{},
};

export function Login({style}:props) {
  const [enteredEmail, setEnteredEmail] = useState<string>("");
  const [enteredPassword, setEnteredPassword] = useState("");

  function updateInputEmailHandler(enteredValue: string) {
    setEnteredEmail(enteredValue);
  }

  function updateInputPasswordHandler(enteredValue: string) {
    setEnteredPassword(enteredValue);
  }
  return (
    <View style={style}>
      <Title style={styles.tittle} >Login</Title>
      <View style={styles.formContainer}>
        <InputForm
          label="Email"
          onUpdateValue={updateInputEmailHandler}
          value={enteredEmail}
        />
        <InputForm
          label="Password"
          onUpdateValue={updateInputPasswordHandler}
          value={enteredPassword}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  
  },
  tittle:{
    paddingBottom:60,
  },
  formContainer: {
    gap: 10,
  },

});
