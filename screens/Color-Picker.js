import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState(randomColor());
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 50, fontFamily: "" }}>Color Picker</Text>
      <Button
        title="Pick a Color"
        onPress={() => {
          setColor(randomColor());
          alert(color);
        }}
      />

      <View
        style={{ backgroundColor: color, height: 100, width: 100, marginTop: 20 }}
      ></View>
    </View>
  );
};

export default ColorPicker;

const randomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginVertical: 35,
  },
});
