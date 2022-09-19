import React from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";

export default function InputWithLabel({
  labelText,
  keyboardType,
  onChange,
  value,
  secureTextEntry = false,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{labelText}</Text>
      <TextInput
        style={styles.textInput}
        keyboardType={keyboardType}
        onChangeText={onChange}
        value={value}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  label: {
    fontSize: 16,
  },
  textInput: {
    backgroundColor: "#EEE3CB",
    width: 350,
    height: 50,
    fontSize: 16,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
});
