import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function TodoItem({ props, pressHandler }) {
  const { id, importance, text, date, status } = props;

  return (
    <TouchableOpacity style={styles.todo} onPress={() => pressHandler(id)}>
      <Text style={styles.title}>
        {text}
      </Text>
      <Text style={styles.date}>
        {date}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  todo: {
    padding: 15,
    color: '#2C2C2C',
  },
  title: {
    fontSize: 20,
    letterSpacing: 1.5,
  },
  date: {
    fontSize: 10,
  }
})
