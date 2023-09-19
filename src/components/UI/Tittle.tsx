import { Text, StyleSheet, View } from "react-native";
import { Colors } from "../../util/Colors";

interface Props {
  children: string;
  style?: {};
}

export function Title({ children, style }: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, style]}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    paddingBottom: 50,
  },
  text: {
    fontFamily: "Roboto-Bold",
    fontSize: 34,
    color: Colors.textDark,
  },
});
