import { StyleSheet } from 'react-native';

export const GlobalStyle = StyleSheet.create({
    // Container
    container: {
        flex: 1,
        backgroundColor: '#F2F6FF',
        alignItems: 'center',
    },

    // TaskListScreen
    listHeaderContainer: {
        width: '100%',
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 8,
    },
    listContainer: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 16,
    },
    emptyText: {
        marginTop: 40,
        fontSize: 16,
        color: 'gray',
        textAlign: 'center',
    },
    searchInput: {
        height: 44,
        width: '100%',
        borderColor: 'lightgray',
        backgroundColor: 'white',
        borderRadius: 10,
        paddingLeft: 14,
        borderWidth: 1,
        marginTop: 12,
    },
    progressText: {
        fontSize: 14,
        color: '#3366FF',
        fontWeight: '600',
        marginTop: 12,
        textAlign: 'center',
    },
    hintText: {
        fontSize: 12,
        color: 'gray',
        marginTop: 4,
        textAlign: 'center',
    },

    // TaskItemComponent
    taskItemWrapper: {
        marginBottom: 10,
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#FF3B30',
    },
    taskItemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 14,
    },
    checkbox: {
        width: 26,
        height: 26,
        borderRadius: 13,
        borderWidth: 2,
        borderColor: '#3366FF',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    checkboxChecked: {
        backgroundColor: '#3366FF',
    },
    taskTextContainer: {
        flex: 1,
    },
    taskTitle: {
        fontSize: 16,
        color: '#222',
    },
    taskTitleCompleted: {
        textDecorationLine: 'line-through',
        color: 'gray',
    },
    taskCategory: {
        fontSize: 13,
        color: 'gray',
        marginTop: 2,
    },
    swipeDeleteButton: {
        width: 80,
        backgroundColor: '#FF3B30',
        justifyContent: 'center',
        alignItems: 'center',
    },
    swipeDeleteText: {
        color: 'white',
        fontSize: 15,
        fontWeight: '600',
    },

    // Buttons (ButtonComponent)
    primaryBtn: {
        pressedColor: '#274BCC',
        defaultColor: '#3366FF',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    primaryBtnText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
    },
    secondaryBtn: {
        pressedColor: '#E5ECFF',
        defaultColor: 'white',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#3366FF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    secondaryBtnText: {
        color: '#3366FF',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
    },
    dangerBtn: {
        pressedColor: '#B32B22',
        defaultColor: '#FF3B30',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dangerBtnText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '600',
    },

    // TextInputComponent
    inpLabel: {
        fontSize: 14,
        color: 'gray',
        marginBottom: 6,
        alignSelf: 'flex-start',
    },
    textInput: {
        height: 48,
        width: '100%',
        borderColor: 'lightgray',
        backgroundColor: 'white',
        borderRadius: 10,
        paddingLeft: 14,
        borderWidth: 1,
        marginBottom: 20,
    },

    // AddTaskScreen
    formContainer: {
        width: '100%',
        paddingHorizontal: 24,
        paddingTop: 24,
        alignItems: 'center',
    },
    categoryOptions: {
        width: '100%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 20,
    },
    categoryOption: {
        paddingHorizontal: 14,
        paddingVertical: 8,
        borderRadius: 18,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'lightgray',
        marginRight: 8,
        marginBottom: 8,
    },
    categoryOptionSelected: {
        backgroundColor: '#3366FF',
        borderColor: '#3366FF',
    },
    categoryOptionText: {
        fontSize: 14,
        color: '#222',
    },
    categoryOptionTextSelected: {
        color: 'white',
        fontWeight: '600',
    },

    // TaskDetailScreen
    detailContainer: {
        width: '100%',
        paddingHorizontal: 24,
        paddingTop: 32,
        alignItems: 'center',
    },
    detailTitle: {
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 8,
        textAlign: 'center',
    },
    detailStatus: {
        fontSize: 15,
        color: 'gray',
        marginBottom: 10,
    },
    detailButtonSpacing: {
        height: 14,
    },

    // CategoriesScreen
    categoryRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 16,
        marginBottom: 10,
    },
    categoryName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#222',
    },
    categoryCount: {
        fontSize: 14,
        color: 'gray',
    },

    // SettingsScreen
    settingsContainer: {
        width: '100%',
        paddingHorizontal: 24,
        paddingTop: 80,
        alignItems: 'center',
    },
    settingsTitle: {
        fontSize: 20,
        fontWeight: '700',
        marginBottom: 6,
    },
    settingsText: {
        fontSize: 14,
        color: 'gray',
        marginTop: 12,
        marginBottom: 30,
        textAlign: 'center',
    },
});
