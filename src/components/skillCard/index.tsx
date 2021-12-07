import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {SkillCardProps} from './types';

export function SkillCard({value, ...props}: SkillCardProps) {
  return (
    <TouchableOpacity style={styles.buttonSkills} {...props}>
      <Text style={styles.skills}>{value}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  skills: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '900',
  },
  buttonSkills: {
    borderRadius: 20,
    padding: 15,
    backgroundColor: '#1F1E25',
    alignItems: 'center',
    marginTop: 15,
  },
});
