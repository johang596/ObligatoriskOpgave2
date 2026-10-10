import { useContext } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, Alert } from 'react-native';

import { TaskContext } from '../context/TaskContext';
import ButtonComponent from '../components/ButtonComponent';
import { GlobalStyle } from '../styles/GlobalStyle';

export default function SettingsScreen() {
  const { clearCompleted } = useContext(TaskContext);

  // Spørg brugeren, før de fuldførte opgaver slettes
  function handleClear() {
    Alert.alert('Ryd fuldførte opgaver?', 'De fuldførte opgaver bliver slettet.', [
      { text: 'Annuller', style: 'cancel' },
      { text: 'Ryd', style: 'destructive', onPress: clearCompleted },
    ]);
  }

  return (
    <View style={GlobalStyle.container}>
      <View style={GlobalStyle.settingsContainer}>
        <Text style={GlobalStyle.settingsTitle}>Opgaveliste</Text>
        <Text style={GlobalStyle.settingsText}>
          Lavet som en del af de obligatoriske opgaver i INNT. Dine opgaver gemmes på
          telefonen, så de er der stadig, når du åbner appen igen.
        </Text>

        <ButtonComponent title="Ryd fuldførte opgaver" type="danger" onPress={handleClear} />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
