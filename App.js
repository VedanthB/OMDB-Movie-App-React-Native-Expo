import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";
import { createStackNavigator } from "@react-navigation/stack";
import MovieDetails from "./screens/MovieDetails";
import MoviePreview from "./components/MoviePreview";

const RootStack = createStackNavigator();
const MainStack = createStackNavigator();

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen
        name="MoviePreview"
        component={MoviePreview}
        options={({ route }) => ({ title: route.params.Title })}
      />
    </MainStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ presentation: "modal" }}>
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen name="MovieDetails" component={MovieDetails} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
