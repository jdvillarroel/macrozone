import { useCallback, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity } from "react-native";

// Globals styles
import { globalStyles } from "@/styles/global";

// Services
import { Meal, clearAllMeals, getMeals } from "@/storage/meals";
import { useFocusEffect } from "expo-router";

// Components
import MealItem from "@/components/MealItem";

export default function MealsScreen() {
  const [meals, setMeals] = useState<Meal[]>([]);

  const loadMeals = async () => {
    const data = await getMeals();

    setMeals(data);
  };

  const handleClearAllMeals = async () => {
    await clearAllMeals();

    loadMeals();
  };

  useFocusEffect(
    useCallback(() => {
      loadMeals();
    }, []),
  );

  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>All Meals</Text>

      <TouchableOpacity onPress={handleClearAllMeals}>
        <Text style={styles.clearButton}>Clear All</Text>
      </TouchableOpacity>

      {meals.length === 0 ? (
        <Text style={globalStyles.empty}>
          Theres nothing to show here. Add some meals to start tracking your
          progress.
        </Text>
      ) : (
        meals.map((meal) => (
          <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            calories={meal.calories}
            protein={meal.protein}
            carbs={meal.carbs}
            fat={meal.fat}
            onDelete={loadMeals}
          />
        ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  clearButton: {
    color: "red",
    fontSize: 16,
    marginVertical: 10,
  },
});
