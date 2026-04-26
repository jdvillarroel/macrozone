import { Ionicons } from "@expo/vector-icons";
import { Share, TouchableOpacity } from "react-native";

// Global styles
import { Meal } from "@/storage/meals";
import { colors } from "@/styles/global";

interface ShareButtonProps {
  meals: Meal[];
}

export default function ShareButton({ meals }: ShareButtonProps) {
  const handleShare = async () => {
    const totals = meals.reduce(
      (acc, current) => ({
        calories: acc.calories + current.calories,
        protein: acc.protein + current.protein,
        carbs: acc.carbs + current.carbs,
        fat: acc.fat + current.fat,
      }),
      { calories: 0, protein: 0, carbs: 0, fat: 0 },
    );

    await Share.share({
      message: `MacroZone Daily Summary\n\nCalories: ${totals.calories}\nProtein: ${totals.protein}g\nCarbs: ${totals.carbs}g\nFat: ${totals.fat}g\n\nMeals: ${meals.length} logged today`,
    });
  };

  return (
    <TouchableOpacity onPress={handleShare}>
      <Ionicons name="share-outline" size={24} color={colors.primary} />
    </TouchableOpacity>
  );
}
