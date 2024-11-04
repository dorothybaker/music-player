import { FlatList } from "react-native";
import library from "@/assets/data/library.json";
import TrackListItem from "./TrackListItem";

export default function TracksList() {
  return (
    <FlatList
      data={library}
      renderItem={({ item: track }) => (
        <TrackListItem track={{ ...track, image: track.artwork }} />
      )}
    />
  );
}
