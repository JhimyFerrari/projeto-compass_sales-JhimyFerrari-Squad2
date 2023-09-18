import { StatusBar, StyleSheet, View } from "react-native";

import { ForgotPassword } from "../components/Auth/ForgotPassword";
import { Colors } from "../util/Colors";

interface Props {
  navigation: any;
}

export function ForgotPasswordScreen({ navigation }: Props): JSX.Element {
  return (
    <>
      <StatusBar
        backgroundColor={Colors.backgroundLight}
        barStyle={"dark-content"}
      />
    <View style={styles.container}>
      <ForgotPassword navigation={navigation} />
    </View>
     </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: Colors.backgroundLight,
  },
});
