import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  Platform,
} from 'react-native';
import {Button} from '../../components/button';
import {SkillCard} from '../../components/skillCard';
import {SkillData} from './types';

export function Home() {
  const [newSkill, setNewSkills] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState('');

  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill,
    };
    setMySkills(oldState => [...oldState, data]);
    console.log('New Skill', data);
  }

  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(value => value.id !== id));
  }
  useEffect(() => {
    const currentTime = new Date().getHours();
    if (currentTime < 12) {
      setGreeting('Good morning');
    } else if (currentTime >= 12 && currentTime < 18) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good night');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome, Alexandre</Text>
      <Text style={styles.greetings}>{greeting} </Text>
      <TextInput
        placeholder="New Skill"
        placeholderTextColor="#555"
        style={styles.input}
        onChangeText={setNewSkills}
      />
      <Button title="Add" onPress={handleAddNewSkill} />
      <Text style={[styles.title, {marginTop: 30}]}>My Skills</Text>
      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <SkillCard
            value={item.name}
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 70,
    backgroundColor: '#121015',
  },

  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: '900',
  },
  input: {
    backgroundColor: '#1F1E25',
    marginTop: 30,
    borderRadius: 20,
    padding: Platform.OS === 'ios' ? 10 : 15,
    color: '#FFF',
  },
  greetings: {
    color: '#FFF',
  },
});
