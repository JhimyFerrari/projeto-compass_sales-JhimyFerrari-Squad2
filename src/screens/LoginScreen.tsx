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
      <Login navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: Colors.backgroundLight,
  },
});
