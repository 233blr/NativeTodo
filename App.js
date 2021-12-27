import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, FlatList } from 'react-native';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState([
    { id: 0, importance: 0, text: 'Bue coffe', date: '11 Dec 2021 15:05', status: true, },
    { id: 1, importance: 2, text: 'Learn JS', date: '16 Dec 2021 16:00', status: false, },
    { id: 2, importance: 3, text: 'Call someone', date: '25 Dec 2021 19:05', status: true, },
    { id: 3, importance: 3, text: 'Buy milk', date: '30 Dec 2021 20:45', status: true, },
  ]);

  const deleteHandler = (id) => {
    setTodos((prevTodos) => prevTodos.filter(todo => (
      todo.id !== id
    )));
  };

  // let date = new Date().toUTCString().slice(5, -7);

  // colors
  // #FCFCFC
  // #83FFE6
  // #FF5F5F
  // #2C2C2C

  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <View>
        <Header />
        <View style={styles.content}>
          {/* To form */}
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem
                  props={item}
                  pressHandler={deleteHandler}
                />
              )}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCFCFC',
  },
  content: {
    // padding: 40,
  },
  list: {
    marginTop: 30,
  },
});
