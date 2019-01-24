import React from "react";
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from "react-navigation";
import Home from "./screens/containers/home";
import Movie from "./screens/containers/movie";
import Category from "./screens/containers/category";
import Header from "./sections/components/header";
import About from "./screens/containers/about";
import Profile from "./screens/containers/profile";
import Login from "./screens/containers/login";
import IconApp from "./sections/components/icon";
import Loading from "./screens/containers/loading";
const Main = createStackNavigator(
    {
        Home,
        Category
    },
    {
        defaultNavigationOptions: {
            header: Header
        }
    }
);


const AppContainer = createAppContainer(Main);

const Tab = createBottomTabNavigator(
    {
        Home: {
            screen: Main,
            navigationOptions: {
                title: "Inicio",
                tabBarIcon: <IconApp name="home" size={34} color="#990000" />
            }
        },
        About: {
            screen: About,
            navigationOptions: {
                title: "Acerca De",
                tabBarIcon: <IconApp name="check" size={34} color="#990000" />
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: "Perfil",
                tabBarIcon: <IconApp name="user" size={34} color="#990000" />
            }
        }
    },
    {
        tabBarOptions: {
            activeTintColor: "white",
            activeBackgroundColor: "#65a721"
        }
    }
)
const WithModal = createStackNavigator(
    {
        Main: {
            screen: Tab
        },
        Movie
    },
    {
        mode:"modal",
        headerMode:"none",
        defaultNavigationOptions: {
            
        },
        navigationOptions:{
            gesturesEnabled:true,
        }
    }
);
const SwitchNav = createSwitchNavigator(
    {
        App: WithModal,
        Login: Login,
        Loading: Loading,
    },
    {
        initialRouteName: 'Loading'
    });
export default SwitchNav;