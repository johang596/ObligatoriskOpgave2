import { useContext, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, Pressable, Alert } from 'react-native';

import { TaskContext } from '../context/TaskContext';
import TextInputComponent from '../components/TextInputComponent';
import ButtonComponent from '../components/ButtonComponent';
import { GlobalStyle } from '../styles/GlobalStyle';

// NY SCREEN i iteration 2: oversigt over kategorier.
// Bertram ville gerne kunne holde fx skole og fritid adskilt.
export default function CategoriesScreen({ navigation }) {
  const { categories, tasks, addCategory } = useContext(TaskContext);
  const [name, setName] = useState('');

  // Ny knap: opretter en kategori
  function handleAdd() {
    if (name.trim().length === 0) {
      Alert.alert('Mangler navn', 'Skriv et navn til kategorien.');
      return;
    }
    addCategory(name.trim());
    setName(''); // tøm feltet igen
  }

  // Tæller hvor mange opgaver der er i en kategori
  function countTasks(categoryId) {
    return tasks.filter((task) => task.categoryId === categoryId).length;
  }

  return (
    <View style={GlobalStyle.container}>
      <View style={GlobalStyle.listHeaderContainer}>
        <TextInputComponent
          label="Ny kategori"
          hint="Fx 'Træning'"
          value={name}
          onChangeText={setName}
        />
        <ButtonComponent title="Tilføj kategori" type="secondary" onPress={handleAdd} />
      </View>

      <View style={GlobalStyle.listContainer}>
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable
              style={GlobalStyle.categoryRow}
              onPress={() =>
                navigation.navigate('Kategori', {
                  categoryId: item.id,
                  categoryName: item.name,
                })
              }
            >
              <Text style={GlobalStyle.categoryName}>{item.name}</Text>
              <Text style={GlobalStyle.categoryCount}>{countTasks(item.id)} opgaver</Text>
            </Pressable>
          )}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
