import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./screens/containers/home";
import Movie from "./screens/containers/movie";
const Main = createStackNavigator(
    {
        Home,
        Movie
    }
);
const AppContainer = createAppContainer(Main);
export default AppContainer;