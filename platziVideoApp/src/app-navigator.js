import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./screens/containers/home";
import Movie from "./screens/containers/movie";
import Category from "./screens/containers/category";
import Header from "./sections/components/header";
const Main = createStackNavigator(
    {
        Home,
        Movie,
        Category
    },
    {
        defaultNavigationOptions:{
            header: Header
        }
    }
);
const AppContainer = createAppContainer(Main);
export default AppContainer;