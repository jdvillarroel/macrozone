import { Text, View } from "react-native";

// Global Styles
import { globalStyles } from "@/styles/global";

export default function AddMealScreen() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Add Meal</Text>
    </View>
  );
}
