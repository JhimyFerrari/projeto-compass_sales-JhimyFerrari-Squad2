import { StyleSheet, View } from "react-native";
import { PrimaryButton } from "../components/UI/PrimaryButton";
 
import { Colors } from "../util/Colors";
import { ForgotPassword } from "../components/Auth/ForgotPassword";

interface Props {
  navigation: any;
}

export function ForgotPasswordScreen({ navigation }: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <ForgotPassword/>
      <PrimaryButton>SEND</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Colors.backgroundLight,
  },
 
  
 
});
