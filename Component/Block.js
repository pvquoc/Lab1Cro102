import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Block = ({ title, children }) => {
  return (
    <View style={styles.block}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  block: {
    margin: 10,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2A9D8F', // Màu thương hiệu
    marginBottom: 10,
  },
  content: {
    padding: 10,
  },
});

export default Block;
