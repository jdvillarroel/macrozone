import { ScrollView, StyleSheet, Text } from "react-native";

// Components
import HomeHeader from "@/components/HomeHeader";

// Global styles
import MacroGrid from "@/components/MacroGrid";
import { globalStyles } from "@/styles/global";

export default function Index() {
  return (
    <ScrollView style={globalStyles.container}>
      <Text style={globalStyles.title}>MacroZone</Text>
      <HomeHeader />
      <MacroGrid />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  link: {
    color: "#4f72c2",
    margin: 20,
  },
});
