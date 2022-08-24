import React from "react";

import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const MoviePreview = ({ movie, onPress }) => {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <ImageBackground source={{ uri: movie.Poster }} style={styles.image}>
          <Text>{movie.Title}</Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default MoviePreview;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    marginVertical: 10,
  },

  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    height: 140,
    width: 240,
    resizeMode: "cover",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
});
