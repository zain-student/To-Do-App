import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  Alert,
  useColorScheme,
} from "react-native";
import Task from "../components/Task";

const HomeScreen = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const colorScheme = useColorScheme();

  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { key: Math.random().toString(), value: task }]);
      setTask("");
    }
  };

  const handleDeleteTask = (taskKey) => {
    Alert.alert("Delete Task", "Are you sure you want to delete this task?", [
      {
        text: "No",
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => {
          setTasks((currentTasks) => {
            return currentTasks.filter((task) => task.key !== taskKey);
          });
        },
      },
    ]);
  };
  return (
    <View
      style={[
        styles.container,
        colorScheme === "light"
          ? { backgroundColor: "#fff" }
          : { backgroundColor: "#333333" },
      ]}>
      <Text
        style={[
          styles.title,
          colorScheme === "light" ? { color: "black" } : { color: "white" },
        ]}>
        Add To-Do
      </Text>
      <TextInput
        style={[
          styles.input,
          colorScheme === "light"
            ? { color: "black", borderColor: "grey" }
            : { color: "white", borderColor: "white" },
        ]}
        placeholder="Add New Task...."
        value={task}
        onChangeText={setTask}
      />
      <Text
        style={[
          styles.title,
          colorScheme === "light" ? { color: "black" } : { color: "white" },
        ]}>
        Your To-Do's
      </Text>
      <FlatList
        style={[
          styles.list,
          colorScheme === "light"
            ? { color: "black", backgroundColor: "grey" }
            : { color: "white", backgroundColor: "grey" },
        ]}
        data={tasks}
        renderItem={({ item }) => (
          <Task
            style={{ borderColor: "white", borderWidth: 4 }}
            title={item.value}
            onDelete={() => handleDeleteTask(item.key)}
          />
        )}
      />
      <Button title="Add Task" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    backgroundColor: "grey",
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
    color: "black",
  },
  input: {
    height: 40,
    borderColor: "black",
    borderWidth: 2,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
  list: {
    borderColor: "black",
    borderWidth: 2,
    marginBottom: 30,
    paddingHorizontal: 8,
    backgroundColor: "white",
  },
});

export default HomeScreen;
