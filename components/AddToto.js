import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

export default function AddTodo({ addTodoHandler }) {
  const [text, setText] = useState('')

  const chengeHandler = (value) => {
    setText(value);
  }

  return (
    <View>
      <TextInput
        value={text}
        style={styles.input}
        placeholder='new text...'
        onChangeText={chengeHandler}
      />
      <Button
        title='ADD TODO'
        color='#2C2C2C'
        onPress={() => addTodoHandler(text)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    margin: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#2C2C2C',
  },
})
