import { useContext, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Pressable, Alert } from 'react-native';

import { TaskContext } from '../context/TaskContext';
import TextInputComponent from '../components/TextInputComponent';
import ButtonComponent from '../components/ButtonComponent';
import { GlobalStyle } from '../styles/GlobalStyle';

export default function AddTaskScreen({ route, navigation }) {
  const { addTask, categories } = useContext(TaskContext);
  const [title, setTitle] = useState('');

  // Kommer man fra en kategori, er den kategori valgt på forhånd
  const startCategory = route.params ? route.params.categoryId : null;
  const [categoryId, setCategoryId] = useState(startCategory);

  function handleSave() {
    // I første version skete der ingenting ved tom titel. Nu får brugeren besked.
    if (title.trim().length === 0) {
      Alert.alert('Mangler titel', 'Skriv en titel, før du gemmer opgaven.');
      return;
    }
    addTask(title.trim(), categoryId);
    navigation.goBack();
  }

  return (
    <View style={GlobalStyle.container}>
      <View style={GlobalStyle.formContainer}>
        <TextInputComponent
          label="Opgavetitel"
          hint="Fx 'Handle ind til weekenden'"
          value={title}
          onChangeText={setTitle}
        />

        {/* Valg af kategori (nyt i iteration 2) */}
        <Text style={GlobalStyle.inpLabel}>Kategori</Text>
        <View style={GlobalStyle.categoryOptions}>
          <Pressable
            style={[GlobalStyle.categoryOption, categoryId === null && GlobalStyle.categoryOptionSelected]}
            onPress={() => setCategoryId(null)}
          >
            <Text style={[GlobalStyle.categoryOptionText, categoryId === null && GlobalStyle.categoryOptionTextSelected]}>
              Ingen
            </Text>
          </Pressable>

          {categories.map((category) => (
            <Pressable
              key={category.id}
              style={[GlobalStyle.categoryOption, categoryId === category.id && GlobalStyle.categoryOptionSelected]}
              onPress={() => setCategoryId(category.id)}
            >
              <Text style={[GlobalStyle.categoryOptionText, categoryId === category.id && GlobalStyle.categoryOptionTextSelected]}>
                {category.name}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Knap med funktion: gemmer opgaven og navigerer tilbage */}
        <ButtonComponent title="Gem opgave" type="primary" onPress={handleSave} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
