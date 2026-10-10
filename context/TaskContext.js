import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { INITIAL_TASKS, INITIAL_CATEGORIES } from '../data/const';

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [categories, setCategories] = useState(INITIAL_CATEGORIES);
  // Bruges til at vente med at gemme, til de gemte data er hentet
  const [isLoaded, setIsLoaded] = useState(false);

  // Hent gemte opgaver og kategorier, når appen starter
  useEffect(() => {
    async function loadData() {
      try {
        const savedTasks = await AsyncStorage.getItem('tasks');
        const savedCategories = await AsyncStorage.getItem('categories');

        // Findes der gemte data, bruger vi dem i stedet for standarddata
        if (savedTasks !== null) {
          setTasks(JSON.parse(savedTasks));
        }
        if (savedCategories !== null) {
          setCategories(JSON.parse(savedCategories));
        }
      } catch (error) {
        console.log('Kunne ikke hente data:', error);
      }
      setIsLoaded(true);
    }
    loadData();
  }, []);

  // Gem opgaverne, hver gang de ændrer sig
  useEffect(() => {
    if (isLoaded) {
      AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks, isLoaded]);

  // Gem kategorierne, hver gang de ændrer sig
  useEffect(() => {
    if (isLoaded) {
      AsyncStorage.setItem('categories', JSON.stringify(categories));
    }
  }, [categories, isLoaded]);

  function addTask(title, categoryId) {
    const newTask = {
      id: Date.now().toString(),
      title,
      completed: false,
      categoryId,
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  function toggleTask(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function deleteTask(id) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }

  function clearCompleted() {
    setTasks((prevTasks) => prevTasks.filter((task) => !task.completed));
  }

  function addCategory(name) {
    const newCategory = {
      id: Date.now().toString(),
      name,
    };
    setCategories((prevCategories) => [...prevCategories, newCategory]);
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        categories,
        addTask,
        toggleTask,
        deleteTask,
        clearCompleted,
        addCategory,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
