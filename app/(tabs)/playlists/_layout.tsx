import { StackScreenWithSearchbar } from "@/constants/layout";
import { colors, fontSize } from "@/constants/token";
import { defaultStyles } from "@/styles";
import { Stack } from "expo-router";
import { Text, View } from "react-native";

const PlaylistsScreenLayout = () => {
  return (
    <View style={defaultStyles.container}>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            ...StackScreenWithSearchbar,
            headerTitle: () => (
              <View>
                <View style={{ rowGap: 4 }}>
                  <Text
                    style={[
                      defaultStyles.text,
                      { fontSize: fontSize.xl, fontFamily: "Medium" },
                    ]}
                  >
                    Unleash your creativity
                  </Text>
                  <Text
                    style={[
                      defaultStyles.text,
                      {
                        fontSize: fontSize.sm,
                        color: colors.textMuted,
                        lineHeight: 20,
                        marginRight: 20,
                        fontFamily: "Medium",
                      },
                    ]}
                  >
                    Feel the rhythm, own the beat with{" "}
                    <Text style={{ color: colors.primary }}>beatbox</Text> ~
                    your ultimate music experience.
                  </Text>
                </View>
                <Text
                  style={{
                    height: 1,
                    width: "100%",
                    backgroundColor: "white",
                    opacity: 0.2,
                    marginTop: 20,
                    marginBottom: 7,
                  }}
                />
                <Text
                  style={[
                    defaultStyles.text,
                    {
                      fontSize: 27,
                    },
                  ]}
                >
                  Playlists
                </Text>
              </View>
            ),
          }}
        />
      </Stack>
    </View>
  );
};

export default PlaylistsScreenLayout;
