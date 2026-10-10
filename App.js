import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

import { TaskProvider } from './context/TaskContext';

import TaskStackNavigation from './components/TaskStackComponent';
import CategoryStackNavigation from './components/CategoryStackComponent';
import SettingsScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // GestureHandlerRootView skal ligge yderst, for at swipe-to-delete virker
    <GestureHandlerRootView style={{ flex: 1 }}>
      <TaskProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              headerShown: false,
              tabBarActiveTintColor: '#3366FF',
              tabBarInactiveTintColor: 'gray',
              tabBarIcon: ({ color, size }) => {
                let iconName;
                if (route.name === 'Opgaver') {
                  iconName = 'checkmark-done';
                } else if (route.name === 'Kategorier') {
                  iconName = 'pricetags';
                } else if (route.name === 'Indstillinger') {
                  iconName = 'settings';
                }
                return <Ionicons name={iconName} size={size} color={color} />;
              },
            })}
          >
            <Tab.Screen name="Opgaver" component={TaskStackNavigation} />
            <Tab.Screen name="Kategorier" component={CategoryStackNavigation} />
            <Tab.Screen name="Indstillinger" component={SettingsScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </TaskProvider>
    </GestureHandlerRootView>
  );
}
