import React, { useState } from "react";
import { InputForm } from "../UI/InputForm";
import { StyleSheet, View ,Text } from "react-native";
import { Title } from "../UI/Tittle";
import { Colors } from "../../util/Colors";

interface Props {
  style?:{},
};

export function ForgotPassword({style}:Props) {
  const [enteredEmail, setEnteredEmail] = useState<string>("");
 

  function updateInputEmailHandler(enteredValue: string) {
    setEnteredEmail(enteredValue);
  }
 
  return (
    <View style={style}>
      <Title style={styles.tittle} >Forgot Password</Title>
      
      <View style={styles.formContainer}>
        <Text style={styles.textMessage}>Please, enter your email address. You will receive a link to create a new password via email.</Text>
        <InputForm
          label="Email"
          onUpdateValue={updateInputEmailHandler}
          value={enteredEmail}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
 
  tittle:{
    paddingBottom:60,
  },
  formContainer: {
    gap: 10,
  },
  textMessage:{
    fontFamily:'Roboto-Medium',
    fontSize:14,
    width:344,
    color:Colors.textDark
  }

});
