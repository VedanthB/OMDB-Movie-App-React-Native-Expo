import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import MoviePreview from "../components/MoviePreview";

const Home = ({ navigation }) => {
  const [moviesData, setMoviesData] = useState();
  const [page, setPage] = useState(1);

  const handleFetchMovies = async () => {
    const result = await fetch(
      "https://www.omdbapi.com/?s=Marvel&apikey=eeefc96f&page=" + page,
    );

    if (result.ok) {
      const movies = await result.json();

      setMoviesData(movies.Search);
    }
  };

  useEffect(() => {
    handleFetchMovies();
  }, [page]);

  return (
    <>
      <View style={styles.pagination}>
        <TouchableOpacity onPress={() => setPage((page) => page - 1)}>
          <Text style={[styles.buttonText, styles.button]}>Prev</Text>
        </TouchableOpacity>

        <Text style={styles.buttonText}>{page}</Text>

        <TouchableOpacity onPress={() => setPage((page) => page + 1)}>
          <Text style={[styles.buttonText, styles.button]}>Next</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={{ flexDirection: "column" }}
        data={moviesData}
        keyExtractor={(item) => item.imdbID}
        renderItem={({ item }) => (
          <MoviePreview
            onPress={() => navigation.push("MovieDetails", item)}
            movie={item}
          />
        )}
        //   refreshControl={
        //     <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        //   }
      />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "teal",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    textAlign: "center",
    height: 40,
    width: 80,
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 40,
    paddingVertical: 10,
  },
});
