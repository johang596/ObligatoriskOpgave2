import { Text, View, Pressable } from 'react-native';
import ReanimatedSwipeable from 'react-native-gesture-handler/ReanimatedSwipeable';
import { GlobalStyle } from '../styles/GlobalStyle';

// Nyt i iteration 2: man kan swipe en opgave til venstre for at slette den,
// fordi begge brugere i første interviewrunde forventede swipe-to-delete.
export default function TaskItemComponent({ task, categoryName, onToggle, onDelete, onPress }) {
  // Den røde slet-knap, der kommer frem, når man swiper til venstre
  function renderDeleteButton() {
    return (
      <Pressable style={GlobalStyle.swipeDeleteButton} onPress={onDelete}>
        <Text style={GlobalStyle.swipeDeleteText}>Slet</Text>
      </Pressable>
    );
  }

  return (
    <View style={GlobalStyle.taskItemWrapper}>
      <ReanimatedSwipeable renderRightActions={renderDeleteButton} overshootRight={false}>
        <Pressable style={GlobalStyle.taskItemContainer} onPress={onPress}>
          <Pressable
            style={[GlobalStyle.checkbox, task.completed && GlobalStyle.checkboxChecked]}
            onPress={onToggle}
          >
            {task.completed && <Text style={{ color: 'white', fontSize: 14 }}>✓</Text>}
          </Pressable>

          <View style={GlobalStyle.taskTextContainer}>
            <Text
              style={[GlobalStyle.taskTitle, task.completed && GlobalStyle.taskTitleCompleted]}
            >
              {task.title}
            </Text>
            {/* Kategorien vises kun, hvis opgaven har en */}
            {categoryName && <Text style={GlobalStyle.taskCategory}>{categoryName}</Text>}
          </View>
        </Pressable>
      </ReanimatedSwipeable>
    </View>
  );
}
