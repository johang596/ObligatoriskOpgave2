import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryTasksScreen from '../screens/CategoryTasksScreen';
import AddTaskScreen from '../screens/AddTaskScreen';
import TaskDetailScreen from '../screens/TaskDetailScreen';

const Stack = createNativeStackNavigator();

// Ny stack i iteration 2 under fanen "Kategorier":
// kategorier -> opgaver i én kategori -> tilføj / detaljer
export default function CategoryStackNavigation() {
  return (
    <Stack.Navigator initialRouteName="Kategorioversigt">
      <Stack.Screen name="Kategorioversigt" component={CategoriesScreen} />
      <Stack.Screen
        name="Kategori"
        component={CategoryTasksScreen}
        // Viser kategoriens navn som titel i toppen
        options={({ route }) => ({ title: route.params.categoryName })}
      />
      <Stack.Screen name="Tilføj opgave" component={AddTaskScreen} />
      <Stack.Screen name="Opgavedetaljer" component={TaskDetailScreen} />
    </Stack.Navigator>
  );
}
