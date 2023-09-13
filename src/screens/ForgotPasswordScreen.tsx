import { StyleSheet, View } from "react-native";

import { ForgotPassword } from "../components/Auth/ForgotPassword";
import { Colors } from "../util/Colors";

interface Props {
  navigation: any;
}

export function ForgotPasswordScreen({ navigation }: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <ForgotPassword />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: Colors.backgroundLight,
  },
});
