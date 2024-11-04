import { useEffect } from "react";

import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const App = () => {
  return (
    <SafeAreaProvider>
      <RootLayout />

      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
};

function RootLayout() {
  const [loaded] = useFonts({
    Regular: require("../assets/fonts/Arima-Regular.ttf"),
    Medium: require("../assets/fonts/Arima-Medium.ttf"),
    Semibold: require("../assets/fonts/Arima-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}

export default App;
