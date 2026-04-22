import { ScrollView, Text } from "react-native";

// Components
import HomeHeader from "@/components/HomeHeader";

// Global styles
import { globalStyles } from "@/styles/global";
import { Link } from "expo-router";

export default function Index() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>MacroZone</Text>
      <HomeHeader />

      <Link href="/meals">Go to meals</Link>
    </ScrollView>
  );
}
