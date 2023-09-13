import { Text, StyleSheet } from "react-native";
import { Colors } from "../../util/Colors";

interface Props {
  children: string;
  style: {};
}

export function Title({ children, style }: Props): JSX.Element {
  return (<Text style={[styles.text, style]}>{children}</Text>);
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto-Bold",
    fontSize: 34,
    color: Colors.textDark,
  },
});
