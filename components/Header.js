import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>
        My todos
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 20,
    height: 80,
    backgroundColor: '#2C2C2C',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#FCFCFC',
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 3,
    textTransform: 'uppercase',
  },
});
