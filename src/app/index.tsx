import { Text, View } from "react-native";

// Global styles
import { globalStyles } from "@/styles/global";

export default function Index() {
  const today = new Date();

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>MacroZone</Text>
      <Text style={globalStyles.sectionTitle}>{today.toLocaleString()}</Text>
    </View>
  );
}
