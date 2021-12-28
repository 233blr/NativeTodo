import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TodoItem({ props, pressHandler }) {
  const { id, importance, text, date } = props;

  return (
    <TouchableOpacity style={styles.todo} onPress={() => pressHandler(id)}>
      <View style={styles.titleItem}>
        <Text style={styles.title}>{text}</Text>
        <MaterialIcons name='delete' size={18} color={'#FF5F5F'} />
      </View>
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
  },
  titleItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  }
})
