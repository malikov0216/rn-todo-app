import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

export const TodoScreen = ({ goBack, todo }) => {
  return (
    <View>
      <Text>{todo.title}</Text>
      <View style={styles.buttons}>
        <Button title='Назад' onPress={goBack} />
        <Button
          title='Удалить'
          color='#ff0000'
          onPress={() => console.log("To remove")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
