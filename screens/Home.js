import React, { useCallback, useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import MoviePreview from "../components/MoviePreview";

const URL = "https://www.omdbapi.com/?s=Marvel&apikey=eeefc96f&page=1";

const Home = () => {
  const [moviesData, setMoviesData] = useState();

  const handleFetchMovies = useCallback(async () => {
    const result = await fetch(URL);

    if (result.ok) {
      const movies = await result.json();

      setMoviesData(movies.Search);
    }
  }, []);

  useEffect(() => {
    handleFetchMovies();
  }, []);

  return (
    <FlatList
      //   style={styles.list}
      data={moviesData}
      keyExtractor={(item) => item.imdbID}
      renderItem={({ item }) => (
        <MoviePreview
          onPress={() => navigation.push("MoviePreview", item)}
          movie={item}
        />
      )}
      //   refreshControl={
      //     <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
      //   }
    />
  );
};

export default Home;
