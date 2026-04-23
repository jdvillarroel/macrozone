import { StyleSheet, View } from "react-native";

// Components
import { Meal } from "@/storage/meals";
import MacroCard from "./MacroCard";

interface MacroGridProps {
  meals: Meal[];
}

export default function MacroGrid({ meals }: MacroGridProps) {
  const totalMacros = meals.reduce(
    (acc, current) => ({
      calories: acc.calories + current.calories,
      protein: acc.protein + current.protein,
      carbs: acc.carbs + current.carbs,
      fat: acc.fat + current.fat,
    }),
    { calories: 0, protein: 0, carbs: 0, fat: 0 },
  );

  return (
    <View style={styles.grid}>
      <MacroCard
        label="Calories"
        value={totalMacros.calories.toString()}
        goal="2000"
        color="#ff6b6b"
      />
      <MacroCard
        label="Protein"
        value={totalMacros.protein.toString()}
        goal="150"
        color="#4ecdc4"
      />
      <MacroCard
        label="Carbs"
        value={totalMacros.carbs.toString()}
        goal="250g"
        color="#ffd93d"
      />
      <MacroCard
        label="Fat"
        value={totalMacros.fat.toString()}
        goal="65g"
        color="#6bcb77"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
});
