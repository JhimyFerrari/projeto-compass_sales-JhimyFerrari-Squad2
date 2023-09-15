import React from "react";
import { InputForm } from "../UI/InputForm";
import { StyleSheet, View, Text } from "react-native";
import { Title } from "../UI/Tittle";
import { Colors } from "../../util/Colors";
import { PrimaryButton } from "../UI/PrimaryButton";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { passwordReset } from "../../util/Auth";
interface Props {
  style?: {};
}
const schema = yup.object({
  email: yup
    .string()
    .email("Not a valid email address. Should be your@email.com")
    .required("Inform an Email"),
});
export function ForgotPassword({ style }: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleSend(data: {email:string}) {
    passwordReset(data.email,navigation)
  }
  const errosStyles = {
    email: {
      borderWidth: errors.email && 1,
      borderColor: errors.email && Colors.error,
    },
  };
  return (
    <View style={style}>
      <Title>Forgot Password</Title>

      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Text style={styles.textMessage}>
            Please, enter your email address. You will receive a link to create
            a new password via email.
          </Text>
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <InputForm
              style={errosStyles.email}
                label="Email"
                onChangeText={onChange}
                value={value}
              />
            )}
          />
            {errors.email && <Text style={styles.labelError}>{errors.email?.message}</Text>}
        </View>
        <PrimaryButton onPress={handleSubmit(handleSend)}>SEND</PrimaryButton>
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
  labelError:{
    alignSelf:'flex-start',
    color:Colors.buttonPrimary,
    marginBottom:8,

  }
});
