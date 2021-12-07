import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {ButtonProps} from './types';

export function Button({title, ...props}: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.7} {...props}>
      <Text style={styles.textButton}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 15,
    backgroundColor: '#A100FF',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 20,
  },
  textButton: {
    color: '#FFF',
    fontWeight: '900',
    fontSize: 17,
  },
});
