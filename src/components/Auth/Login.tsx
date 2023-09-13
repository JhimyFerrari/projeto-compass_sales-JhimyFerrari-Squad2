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

export function Login({ navigation, style }: Props) {
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
      <Title>Login</Title>
      <View style={styles.container}>
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

        <RedirectButton
          style={styles.redirectContainer}
          onPress={() => navigation.navigate("ForgotPasswordScreen")}
        >
          Forgot your password?
        </RedirectButton>

      <PrimaryButton>LOGIN</PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    alignItems:'center'
  },
  formContainer: {
    gap: 10,
    paddingBottom:16,
  },
  redirectContainer: {
    width: "80%",
    alignItems: "flex-end",
    paddingBottom: 32,
  },
});
