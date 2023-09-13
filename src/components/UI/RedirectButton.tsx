import { Pressable, StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Colors } from "../../util/Colors";

interface Props {
  children: string;
  rowReverse?: boolean;
  onPress: any;
  style?: {};
}

export function RedirectButton({
  children,
  rowReverse = false,
  onPress,
  style,
}: Props): JSX.Element {
  return (
    <View style={style}>
      <Pressable
        style={[
          styles.container,
          rowReverse && { flexDirection: "row-reverse" }
        ]}
        onPress={onPress}
      >
        <Text style={styles.text}>{children}</Text>
        <Icon
          name="arrow-forward"
          size={15}
          color={Colors.buttonPrimary}
          style={rowReverse && { transform: [{ rotate: "180deg" }] }}
        />
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontFamily: "Roboto-Medium",
    color: Colors.textDark,
    fontSize: 16,
  },
});
