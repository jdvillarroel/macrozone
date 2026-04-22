import { ScrollView, Text } from "react-native";

// Globals styles
import { globalStyles } from "@/styles/global";
import { Link } from "expo-router";

export default function MealsScreen() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>All Meals</Text>

      <Link href="/">Home Screen</Link>
    </ScrollView>
  );
}
