import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Theme = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.themeButton} onPress={onPress}>
      <Text style={styles.themeText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  themeButton: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#2A9D8F',
    alignItems: 'center',
    marginTop: 10,
  },
  themeText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Theme;
