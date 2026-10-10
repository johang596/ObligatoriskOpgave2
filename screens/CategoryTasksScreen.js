import { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList } from 'react-native';

import { TaskContext } from '../context/TaskContext';
import TaskItemComponent from '../components/TaskItemComponent';
import ButtonComponent from '../components/ButtonComponent';
import { GlobalStyle } from '../styles/GlobalStyle';

// NY SCREEN i iteration 2: viser kun opgaverne i én kategori
export default function CategoryTasksScreen({ route, navigation }) {
  const { categoryId } = route.params;
  const { tasks, toggleTask, deleteTask } = useContext(TaskContext);

  const categoryTasks = tasks.filter((task) => task.categoryId === categoryId);
  const completedCount = categoryTasks.filter((task) => task.completed).length;

  return (
    <View style={GlobalStyle.container}>
      <View style={GlobalStyle.listHeaderContainer}>
        {/* Ny knap: åbner formularen med kategorien valgt på forhånd */}
        <ButtonComponent
          title="+ Tilføj opgave i kategorien"
          type="primary"
          onPress={() => navigation.navigate('Tilføj opgave', { categoryId })}
        />
        <Text style={GlobalStyle.progressText}>
          {completedCount} af {categoryTasks.length} opgaver er fuldført
        </Text>
      </View>

      <View style={GlobalStyle.listContainer}>
        <FlatList
          data={categoryTasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TaskItemComponent
              task={item}
              onToggle={() => toggleTask(item.id)}
              onDelete={() => deleteTask(item.id)}
              onPress={() => navigation.navigate('Opgavedetaljer', { taskId: item.id })}
            />
          )}
          ListEmptyComponent={
            <Text style={GlobalStyle.emptyText}>Ingen opgaver i denne kategori endnu</Text>
          }
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
