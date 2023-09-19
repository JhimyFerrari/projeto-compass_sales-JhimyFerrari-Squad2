import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Colors } from "../../util/Colors";

interface Props {
  children: string;
  onPress?: any;
}

export function PrimaryButton({ children, onPress }: Props): JSX.Element {
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={{
          color: Colors.buttonPrimaryRipple,
        }}
        style={[styles.pressableContainer]}
        onPress={onPress}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.buttonPrimary,
    width: 343,
    height: 48,
    borderRadius: 25,
    overflow: "hidden",
  },
  pressableContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: 343,
    height: 48,
    borderRadius: 25,
  },
  text: {
    color: Colors.textLight,
    fontFamily: "Roboto-Medium",
    fontSize: 14,
  },
});
