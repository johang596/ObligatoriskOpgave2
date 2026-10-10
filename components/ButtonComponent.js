import { Text, Pressable } from 'react-native';
import { GlobalStyle } from '../styles/GlobalStyle';

// type kan være 'primary', 'secondary' eller 'danger'
export default function ButtonComponent({ title, onPress, type = 'primary' }) {
  const styleKey =
    type === 'primary' ? 'primaryBtn' : type === 'danger' ? 'dangerBtn' : 'secondaryBtn';
  const textStyleKey =
    type === 'primary'
      ? 'primaryBtnText'
      : type === 'danger'
      ? 'dangerBtnText'
      : 'secondaryBtnText';

  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed
            ? GlobalStyle[styleKey].pressedColor
            : GlobalStyle[styleKey].defaultColor,
          width: '100%',
          height: 48,
        },
        GlobalStyle[styleKey],
      ]}
      onPress={onPress}
    >
      <Text style={GlobalStyle[textStyleKey]}>{title}</Text>
    </Pressable>
  );
}
