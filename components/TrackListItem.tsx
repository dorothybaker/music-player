import { unknownTrackImageUri } from "@/constants/images";
import { colors, fontSize } from "@/constants/token";
import { defaultStyles } from "@/styles";
import { View, Text, TouchableHighlight, StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";

export type TrackListItemProps = {
  track: { title: string; image?: string; artist?: string };
};

export default function TrackListItem({ track }: TrackListItemProps) {
  const isActiveTrack = false;

  return (
    <TouchableHighlight>
      <View>
        <View>
          <FastImage
            source={{
              uri: track.image ?? unknownTrackImageUri,
              priority: FastImage.priority.normal,
            }}
            style={{
              ...styles.trackArtworkImage,
              opacity: isActiveTrack ? 0.6 : 1,
            }}
          />
        </View>
        <View style={{ width: "100%" }}>
          <Text
            numberOfLines={1}
            style={{
              ...styles.trackTitleText,
              color: isActiveTrack ? colors.primary : colors.text,
            }}
          >
            {track.artist}
          </Text>
          {track.artist && (
            <Text numberOfLines={1} style={styles.trackArtistText}>
              {track.artist}
            </Text>
          )}
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  trackArtworkImage: { borderRadius: 8, height: 50, width: 50 },
  trackTitleText: {
    ...defaultStyles.text,
    fontSize: fontSize.lg,
    maxWidth: "90%",
    fontFamily: "Medium",
  },
  trackArtistText: {
    ...defaultStyles.text,
    fontSize: fontSize.sm,
    color: colors.textMuted,
    marginTop: 4,
  },
});
