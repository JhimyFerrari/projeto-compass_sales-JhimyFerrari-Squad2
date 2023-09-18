import { StatusBar, StyleSheet, View } from "react-native";
import { PrimaryButton } from "../components/UI/PrimaryButton";
 
import { Colors } from "../util/Colors";
import { Sign } from "../components/Auth/Sign";
import { SocialAuth } from "../components/Auth/SocialAuth";

interface Props {
  navigation: any;
}

export function SignScreen({ navigation }: Props): JSX.Element {
  return (
    <>
    <StatusBar
        backgroundColor={Colors.backgroundLight}
        barStyle={"dark-content"}
      />
    <View style={styles.container}>
      <Sign navigation={navigation}   />
      <SocialAuth style={styles.socialContainer}>Or sign up with social account</SocialAuth>
    </View>
    </>
  );
};

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
