import { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Alert } from 'react-native';

import { TaskContext } from '../context/TaskContext';
import ButtonComponent from '../components/ButtonComponent';
import { GlobalStyle } from '../styles/GlobalStyle';

export default function TaskDetailScreen({ route, navigation }) {
  const { taskId } = route.params;
  const { tasks, categories, toggleTask, deleteTask } = useContext(TaskContext);

  const task = tasks.find((t) => t.id === taskId);

  if (!task) {
    return (
      <View style={GlobalStyle.container}>
        <Text style={GlobalStyle.emptyText}>Opgaven findes ikke længere.</Text>
      </View>
    );
  }

  const category = categories.find((c) => c.id === task.categoryId);

  // Spørg brugeren, før opgaven slettes (brugerne savnede bekræftelse i første runde)
  function handleDelete() {
    Alert.alert('Slet opgave?', `Vil du slette "${task.title}"?`, [
      { text: 'Annuller', style: 'cancel' },
      {
        text: 'Slet',
        style: 'destructive',
        onPress: () => {
          deleteTask(task.id);
          navigation.goBack();
        },
      },
    ]);
  }

  return (
    <View style={GlobalStyle.container}>
      <View style={GlobalStyle.detailContainer}>
        <Text style={GlobalStyle.detailTitle}>{task.title}</Text>
        <Text style={GlobalStyle.detailStatus}>
          Status: {task.completed ? 'Fuldført ✅' : 'Ikke fuldført'}
        </Text>
        <Text style={GlobalStyle.detailStatus}>
          Kategori: {category ? category.name : 'Ingen'}
        </Text>

        <ButtonComponent
          title={task.completed ? 'Marker som ikke fuldført' : 'Marker som fuldført'}
          type="secondary"
          onPress={() => toggleTask(task.id)}
        />
        <View style={GlobalStyle.detailButtonSpacing} />
        <ButtonComponent title="Slet opgave" type="danger" onPress={handleDelete} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
