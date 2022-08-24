import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

const MovieDetails = ({ route }) => {
  return (
    <View>
      <ImageBackground
        source={{ uri: route.params.Poster }}
        style={styles.image}
      ></ImageBackground>
      <Text style={styles.title}>{route.params.Title}</Text>

      <Text style={[styles.title, { marginVertical: 3 }]}>
        Year : {route.params.Year}
      </Text>
      <Text style={styles.title}> Type : {route.params.Type}</Text>
    </View>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    backgroundColor: "black",
    paddingVertical: 10,
  },
  image: {
    height: 380,
    width: "100%",
    resizeMode: "cover",
    justifyContent: "flex-end",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
});
