import { Text, View, TextInput } from 'react-native';
import { GlobalStyle } from '../styles/GlobalStyle';

export default function TextInputComponent({ label, hint, value, onChangeText }) {
  return (
    <View style={{ width: '100%' }}>
      <Text style={GlobalStyle.inpLabel}>{label}</Text>
      <TextInput
        style={GlobalStyle.textInput}
        placeholder={hint}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}
