import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Task = ({ title, onDelete }) => {
  return (
    <View style={styles.taskContainer}>
      <Text style={styles.taskText}>{title}</Text>
      <Button title="Delete" onPress={onDelete} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginVertical: 8,
    borderColor: "blue",
    borderWidth: 2,
    borderRadius: 5,
  },
  taskText: {
    fontSize: 18,
  },
});

export default Task;
