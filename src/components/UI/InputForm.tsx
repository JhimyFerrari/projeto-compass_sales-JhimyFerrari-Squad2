import React, { useEffect, useState } from "react";
import { StyleSheet, TextInput, View, Text } from "react-native";
import { Colors } from "../../util/Colors";

interface Props {
  label: string;
  value: string;
  onChangeText: any;
  secureTextEntry?: boolean;
  style?: {};
}

export function InputForm({
  label,
  value,
  onChangeText,
  secureTextEntry = false,
  style,
}: Props): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(value !== "");
  }, [value]);

  return (
    <View style={[styles.container, style]}>
      <View>
        {isVisible && <Text style={[styles.guideText]}>{label}</Text>}

        <TextInput
          style={styles.userText}
          placeholder={label}
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={secureTextEntry}
        ></TextInput>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.textField,
    width: 344,
    height: 66,
    borderRadius: 4,
    elevation: 4,
  },

  guideText: {
    fontFamily: "Roboto-Regular",
    fontSize: 14,
    position: "absolute",
    top: 2,
    left: 4,
  },
  userText: {
    fontFamily: "Roboto-Medium",
    color: Colors.textDark,
    fontSize: 16,
    position: "absolute",
    top: 12,
    left: 2,
  },
});
