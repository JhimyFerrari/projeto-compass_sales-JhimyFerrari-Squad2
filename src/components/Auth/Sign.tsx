import React from "react";
import { InputForm } from "../UI/InputForm";
import { StyleSheet, View, Text } from "react-native";
import { Title } from "../UI/Tittle";
import { RedirectButton } from "../UI/RedirectButton";
import { PrimaryButton } from "../UI/PrimaryButton";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Colors } from "../../util/Colors";


interface Props {
  navigation: any;
  style?: {};
}
const schema = yup.object({
  username: yup.string().required("Inform an username"),
  email: yup
    .string()
    .email("Not a valid email address. Should be your@email.com")
    .required("Inform an Email"),
  password: yup
    .string()
    .min(4, "The password has to be more than 4 characteres")
    .required("Inform a password"),
});

export function Sign({ navigation, style }: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const errosStyles = {
    username: {
      borderWidth: errors.username && 1,
      borderColor: errors.username && Colors.error,
    },
    email: {
      borderWidth: errors.email && 1,
      borderColor: errors.email && Colors.error,
    },
    password: {
      borderWidth: errors.password && 1,
      borderColor: errors.password && Colors.error,
    },
  };


  function handleSign(data:{}){
    console.log(data);
  }

  return (
    <View style={style}>
      <Title style={styles.tittle}>Sign Up</Title>
      <View style={styles.container}>
        <View style={styles.formContainer}>
          <Controller
            control={control}
            name="username"
            render={({ field: { onChange, value } }) => (
              <InputForm
                style={errosStyles.username}
                label="User Name"
                onChangeText={onChange}
                value={value}
              />
            )}
          />
            {errors.username && <Text style={styles.labelError}>{errors.username?.message}</Text>}
          
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
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, value } }) => (
              <InputForm
                style={errosStyles.password}
                label="Password"
                onChangeText={onChange}
                value={value}
                secureTextEntry={true}
              />
            )}
          />
            {errors.password && <Text style={styles.labelError}>{errors.password?.message}</Text>}
        </View>

        <RedirectButton
          style={styles.redirectContainer}
          onPress={() => navigation.navigate("Login")}
        >
          Already have an account?
        </RedirectButton>

        <PrimaryButton onPress={handleSubmit(handleSign)}>SIGN UP</PrimaryButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
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
  labelError:{
    alignSelf:'flex-start',
    color:Colors.buttonPrimary,
    marginBottom:8,

  }
});
