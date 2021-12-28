import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddToto';

export default function App() {
  const [todos, setTodos] = useState([
    { id: 0, importance: 0, text: 'Bue coffe', date: '11 Dec 2021 15:05', status: true, },
    { id: 1, importance: 2, text: 'Learn JS', date: '16 Dec 2021 16:00', status: false, },
    { id: 2, importance: 3, text: 'Buy milk', date: '30 Dec 2021 20:45', status: true, },
    { id: 3, importance: 3, text: 'Buy tea', date: '30 Dec 2021 20:45', status: true, },
    { id: 4, importance: 3, text: 'Buy bye', date: '30 Dec 2021 20:45', status: true, },
  ]);

  const deleteHandler = (id) => {
    setTodos((prevTodos) => prevTodos.filter(todo => (
      todo.id !== id
    )));
  };

  const addTodoHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return ([
          {
            id: prevTodos.length + 1,
            importance: 0,
            text: text,
            date: new Date().toUTCString().slice(5, -7),
            status: false,
          },
          ...prevTodos,
        ]);
      });
    } else {
      Alert.alert('Oops, the text must be longer!');
    }
  }

  // colors
  // #FCFCFC
  // #83FFE6
  // #FF5F5F
  // #2C2C2C

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <StatusBar style='light' />
        <View>
          <Header />
          <View style={styles.content}>
            <AddTodo addTodoHandler={addTodoHandler} />
            <View style={styles.list}>
              <FlatList
                data={todos}
                renderItem={({ item }) => (
                  <TodoItem
                    key={item.id}
                    props={item}
                    pressHandler={deleteHandler}
                  />
                )}
              />
            </View>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
  // content: {},
  list: {
    marginTop: 30,
  },
});
