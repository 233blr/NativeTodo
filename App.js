import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  const [todos, setTodo] = useState([
    { id: 0, rating: 0, text: 'Bue coffe', date: '11 Dec 2021 15:05', status: true, },
    { id: 1, rating: 2, text: 'Learn JS', date: '16 Dec 2021 16:00', status: false, },
    { id: 2, rating: 5, text: 'Call someone', date: '25 Dec 2021 19:05', status: true, },
  ]);

  // let date = new Date().toUTCString().slice(5, -7);

  return (
    <View style={styles.container}>
      <View>
        {/* Header */}
        <View style={styles.content}>
          {/* To form */}
          <View style={styles.list}>
            {/*  */}
            <FlatList
              data={todos}
              renderItem={({ item }) => (<Text>{item.text}</Text>)}
            />
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
  },
  list: {
    margin: 20,
  },
});
