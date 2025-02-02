import { colors, fontSize } from "@/constants/token";
import { StyleSheet } from "react-native";

export const defaultStyles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  text: { fontSize: fontSize.base, color: colors.text, fontFamily: "Regular" },
});

export const utilStyles = StyleSheet.create({});
