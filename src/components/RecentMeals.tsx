import { Text, View } from "react-native";

// Global Styles
import { globalStyles } from "@/styles/global";

// Components
import MealItem from "./MealItem";

import { Meal } from "@/storage/meals";

interface RecentMealsProps {
  meals: Meal[];
  onDelete: () => void;
}

export default function RecentMeals({ meals, onDelete }: RecentMealsProps) {
  return (
    <View style={{ marginTop: 30 }}>
      <Text style={globalStyles.sectionTitle}>Recent Meals</Text>

      {meals.length === 0 ? (
        <Text style={globalStyles.empty}>
          Theres nothing to show here. Add some meals to start tracking your
          progress.
        </Text>
      ) : (
        meals
          .slice(0, 5)
          .map((meal) => (
            <MealItem
              key={meal.id}
              id={meal.id}
              name={meal.name}
              calories={meal.calories}
              protein={meal.protein}
              carbs={meal.carbs}
              fat={meal.fat}
              onDelete={onDelete}
            />
          ))
      )}
    </View>
  );
}
