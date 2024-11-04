import TracksList from "@/components/TracksList";
import { defaultStyles } from "@/styles";
import { View, ScrollView } from "react-native";

const SongsScreen = () => {
  return (
    <View style={defaultStyles.container}>
      <ScrollView>
        <TracksList />
      </ScrollView>
    </View>
  );
};

export default SongsScreen;
