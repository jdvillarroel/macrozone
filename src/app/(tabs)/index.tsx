import { useFocusEffect } from "expo-router";
import { useCallback, useState } from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

// Components
import CopyButton from "@/components/CopyButton";
import HomeHeader from "@/components/HomeHeader";
import MacroGrid from "@/components/MacroGrid";
import RecentMeals from "@/components/RecentMeals";
import ShareButton from "@/components/ShareButton";

// Global styles
import { globalStyles } from "@/styles/global";

// Services
import { getMeals, Meal } from "@/storage/meals";

export default function Index() {
  const [meals, setMeals] = useState<Meal[]>([]);

  const loadMeals = async () => {
    const data = await getMeals();

    setMeals(data);

    console.log("Meals loaded", data);
  };

  useFocusEffect(
    useCallback(() => {
      loadMeals();
    }, []),
  );

  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>MacroZone</Text>
      <ShareButton meals={meals} />
      <HomeHeader />
      <MacroGrid meals={meals} />
      <CopyButton meals={meals} />
      <RecentMeals meals={meals} onDelete={loadMeals} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  link: {
    color: "#4f72c2",
    margin: 20,
  },
});
