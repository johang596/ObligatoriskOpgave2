import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TaskListScreen from '../screens/TaskListScreen';
import AddTaskScreen from '../screens/AddTaskScreen';
import TaskDetailScreen from '../screens/TaskDetailScreen';

const Stack = createNativeStackNavigator();

// Stack under fanen "Opgaver": liste -> tilføj / detaljer
export default function TaskStackNavigation() {
  return (
    <Stack.Navigator initialRouteName="Opgaveliste">
      <Stack.Screen name="Opgaveliste" component={TaskListScreen} />
      <Stack.Screen name="Tilføj opgave" component={AddTaskScreen} />
      <Stack.Screen name="Opgavedetaljer" component={TaskDetailScreen} />
    </Stack.Navigator>
  );
}
