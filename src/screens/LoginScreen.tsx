import { StatusBar, StyleSheet, View } from "react-native";


import { Login } from "../components/Auth/Login";
import { Colors } from "../util/Colors";
import { SocialAuth } from "../components/Auth/SocialAuth";

interface Props {
  navigation: any;
}

export function LoginScreen({ navigation }: Props): JSX.Element {
  return (
    <>
      <StatusBar
        backgroundColor={Colors.backgroundLight}
        barStyle={"dark-content"}
      />
    <View style={styles.container}>
      <Login navigation={navigation} />
      <SocialAuth style={styles.socialContainer}>Or login with social account</SocialAuth>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'space-between',
    backgroundColor: Colors.backgroundLight,
  },
  socialContainer:{
    marginBottom:20

  }
});
