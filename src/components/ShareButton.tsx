import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

// Global styles
import { Meal } from "@/storage/meals";
import { colors } from "@/styles/global";

interface ShareButtonProps {
  meals: Meal[];
}

export default function ShareButton({ meals }: ShareButtonProps) {
  return (
    <TouchableOpacity>
      <Ionicons name="share-outline" size={24} color={colors.primary} />
    </TouchableOpacity>
  );
}
