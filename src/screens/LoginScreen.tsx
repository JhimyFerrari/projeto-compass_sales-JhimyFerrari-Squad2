import { StyleSheet, View } from "react-native";
import { PrimaryButton } from "../components/UI/PrimaryButton";

import { Login } from "../components/Auth/Login";
import { Colors } from "../util/Colors";
import { RedirectButton } from "../components/UI/RedirectButton";

interface Props {
  navigation: any;
}

export function LoginScreen({ navigation }: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <Login style={styles.formContainer} />

      <RedirectButton
        style={styles.redirectContainer}
        onPress={() => navigation.navigate("ForgotPasswordScreen")}
      >
        Forgot your password?
      </RedirectButton>

      <PrimaryButton>LOGIN</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Colors.backgroundLight,
  },
  formContainer: {
    marginTop: 40,
    paddingBottom: 40,
  },
  redirectContainer: {
    width: "80%",
    alignItems: "flex-end",
    paddingBottom: 30,
  },
});
