import React from 'react';
import { TextInput as RNTextInput, StyleSheet } from 'react-native';

const TextInput = (props) => {
  return <RNTextInput style={styles.input} {...props} />;
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: '#2A9D8F', // Màu thương hiệu
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 15,
  },
});

export default TextInput;
