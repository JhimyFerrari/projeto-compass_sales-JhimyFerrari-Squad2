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
      <Sign navigation={navigation}   />

     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: Colors.backgroundLight,
  },
 
 
});
