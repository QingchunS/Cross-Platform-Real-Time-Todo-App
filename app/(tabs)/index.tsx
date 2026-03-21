import { api } from "@/convex/_generated/api";
import useTheme from "@/hooks/useTheme"
import { useMutation, useQuery } from "convex/react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function Index() {
  const {toggleDarkMode} = useTheme();

  return (
    <View style={styles.container}>
      <Text style={styles.content}>Edit app/index.tsx to edit this screen.</Text>
      <Text>Hi!</Text>
      <TouchableOpacity onPress={toggleDarkMode}><text>toggle the mode</text></TouchableOpacity>
    </View>
  );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  content: {
    fontSize: 52,
  },
});