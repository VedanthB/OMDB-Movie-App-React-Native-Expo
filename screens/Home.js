import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
  RefreshControl,
} from "react-native";
import MoviePreview from "../components/MoviePreview";

const Home = ({ navigation }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
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

  const updatePage = (direction) => {
    if (direction === "Prev") {
      if (page === 1) {
        Alert.alert("min page number reached");
        return;
      }
      setPage((page) => page - 1);
    } else {
      if (page === 10) {
        Alert.alert("max page number reached");
        return;
      }
      setPage((page) => page + 1);
    }
  };

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await handleFetchMovies();
    setIsRefreshing(false);
  });

  setTimeout(() => {
    setIsRefreshing(false);
  }, 1000);

  return (
    <>
      <View style={styles.pagination}>
        <TouchableOpacity onPress={() => updatePage("Prev")}>
          <Text style={[styles.buttonText, styles.button]}>Prev</Text>
        </TouchableOpacity>

        <Text style={styles.buttonText}>{page}</Text>

        <TouchableOpacity onPress={() => updatePage("Next")}>
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
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
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
