import React, { useState } from "react";
import { InputForm } from "../UI/InputForm";
import { StyleSheet, View } from "react-native";
import { Title } from "../UI/Tittle";
import { RedirectButton } from "../UI/RedirectButton";
import { PrimaryButton } from "../UI/PrimaryButton";

interface Props {
  navigation: any;
  style?: {};
}

export function Sign({ navigation, style }: Props) {
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
      <Title style={styles.tittle}>Sign Up</Title>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <InputForm
            label="Name"
            onUpdateValue={updateInputEmailHandler}
            value={enteredEmail}
          />
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

        <RedirectButton
          style={styles.redirectContainer}
          onPress={() => navigation.navigate("Login")}
        >
          Already have an account?
        </RedirectButton>

        <PrimaryButton>SIGN UP</PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center',
  },
  tittle: {
    paddingBottom: 60,
  },
  formContainer: {
    gap: 10,
    paddingBottom: 16,
  },
  redirectContainer: {
    width: "80%",
    alignItems: "flex-end",
    paddingBottom: 32,
  },
});
