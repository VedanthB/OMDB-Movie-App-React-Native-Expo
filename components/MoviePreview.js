import React from "react";
import { View, Text } from "react-native";

const MoviePreview = ({ movie, onPress }) => {
  return (
    <View>
      <Text>{movie.Title}</Text>
    </View>
  );
};

export default MoviePreview;
