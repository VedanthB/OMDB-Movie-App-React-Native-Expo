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
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <ImageBackground source={{ uri: movie.Poster }} style={styles.image}>
          <Text style={styles.title}>{movie.Title}</Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default MoviePreview;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginVertical: 10,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    backgroundColor: "black",
    paddingVertical: 10,
  },
  image: {
    height: 180,
    width: 300,
    resizeMode: "cover",
    justifyContent: "flex-end",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
});
