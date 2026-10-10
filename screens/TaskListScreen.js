import { useContext, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, FlatList, Text, TextInput } from 'react-native';

import { TaskContext } from '../context/TaskContext';
import TaskItemComponent from '../components/TaskItemComponent';
import ButtonComponent from '../components/ButtonComponent';
import { GlobalStyle } from '../styles/GlobalStyle';

export default function TaskListScreen({ navigation }) {
  const { tasks, categories, toggleTask, deleteTask } = useContext(TaskContext);

  // Ny funktionalitet: søgefelt (efterspurgt af Bertram i første interviewrunde)
  const [searchText, setSearchText] = useState('');

  // Vis kun de opgaver, hvis titel indeholder søgeteksten
  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchText.toLowerCase())
  );

  // Tæller til feedback øverst på skærmen
  const completedCount = tasks.filter((task) => task.completed).length;

  // Finder navnet på en kategori ud fra dens id
  function getCategoryName(categoryId) {
    const category = categories.find((c) => c.id === categoryId);
    return category ? category.name : null;
  }

  return (
    <View style={GlobalStyle.container}>
      <View style={GlobalStyle.listHeaderContainer}>
        {/* Knap med funktion: navigerer til AddTaskScreen */}
        <ButtonComponent
          title="+ Tilføj opgave"
          type="primary"
          onPress={() => navigation.navigate('Tilføj opgave')}
        />

        <TextInput
          style={GlobalStyle.searchInput}
          placeholder="Søg i opgaver"
          value={searchText}
          onChangeText={setSearchText}
        />

        <Text style={GlobalStyle.progressText}>
          Du har fuldført {completedCount} af {tasks.length} opgaver
        </Text>
        <Text style={GlobalStyle.hintText}>Swipe en opgave til venstre for at slette den</Text>
      </View>

      <View style={GlobalStyle.listContainer}>
        <FlatList
          data={filteredTasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskItemComponent
              task={item}
              categoryName={getCategoryName(item.categoryId)}
              onToggle={() => toggleTask(item.id)}
              onDelete={() => deleteTask(item.id)}
              onPress={() => navigation.navigate('Opgavedetaljer', { taskId: item.id })}
            />
          )}
          ListEmptyComponent={
            <Text style={GlobalStyle.emptyText}>Ingen opgaver fundet</Text>
          }
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
