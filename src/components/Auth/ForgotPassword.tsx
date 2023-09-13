import React, { useState } from "react";
import { InputForm } from "../UI/InputForm";
import { StyleSheet, View, Text } from "react-native";
import { Title } from "../UI/Tittle";
import { Colors } from "../../util/Colors";
import { PrimaryButton } from "../UI/PrimaryButton";

interface Props {
  style?: {};
}

export function ForgotPassword({ style }: Props) {
  const [enteredEmail, setEnteredEmail] = useState<string>("");

  function updateInputEmailHandler(enteredValue: string) {
    setEnteredEmail(enteredValue);
  }

  return (
    <View style={style}>
      <Title>Forgot Password</Title>

      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.textMessage}>
            Please, enter your email address. You will receive a link to create
            a new password via email.
          </Text>
          <InputForm
            label="Email"
            onUpdateValue={updateInputEmailHandler}
            value={enteredEmail}
          />
        </View>
        <PrimaryButton>SEND</PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  formContainer: {
    paddingBottom: 44,
  },
  textMessage: {
    fontFamily: "Roboto-Medium",
    fontSize: 14,
    width: 344,
    paddingBottom: 20,
    color: Colors.textDark,
  },
});
