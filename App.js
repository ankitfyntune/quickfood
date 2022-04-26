import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import CategoryScreen from "./screens/CategoryScreen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FoodScreen from './screens/FoodScreen';
import MealScreen from './screens/MealScreen';
export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="CategoryList" options={{title: "Cuisine"}} component={CategoryScreen} />
          <Stack.Screen name="Food" component={FoodScreen} />
          <Stack.Screen name="MealDetails" component={MealScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
