import { StyleSheet, View } from "react-native";
import { PrimaryButton } from "../components/UI/PrimaryButton";
 
import { Colors } from "../util/Colors";
import { RedirectButton } from "../components/UI/RedirectButton";
import { Sign } from "../components/Auth/Sign";

interface Props {
  navigation: any;
}

export function SignScreen({ navigation }: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <Sign style={styles.formContainer} />

      <RedirectButton
        style={styles.redirectContainer}
         
        onPress={() => navigation.navigate("Login")}
      >
        Already have an account?
      </RedirectButton>

      <PrimaryButton>SIGN UP</PrimaryButton>
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
