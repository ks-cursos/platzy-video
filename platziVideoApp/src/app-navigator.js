import React from "react";
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";
import Home from "./screens/containers/home";
import Movie from "./screens/containers/movie";
import Category from "./screens/containers/category";
import Header from "./sections/components/header";
import About from "./screens/containers/about";
import Profile from "./screens/containers/profile";
import IconApp from "./sections/components/icon";
const Main = createStackNavigator(
    {
        Home,
        Movie,
        Category
    },
    {
        defaultNavigationOptions: {
            header: Header
        }
    }
);
const AboutNav = createStackNavigator(
    {
        About,
    },
    {
        defaultNavigationOptions: {
            header: Header
        }
    }
);
const ProfileNav = createStackNavigator(
    {
        Profile,
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
                tabBarIcon:<IconApp name="home" size={34} color="#990000" />
            }
        },
        About: {
            screen: AboutNav,
            navigationOptions: {
                title: "Acerca De",
                tabBarIcon:<IconApp name="key" size={34} color="#990000" />
            }
        },
        Profile: {
            screen: ProfileNav,
            navigationOptions: {
                title: "Perfil",
                tabBarIcon:<IconApp name="user" size={34} color="#990000" />
            }
        }
    },
    {
        tabBarOptions:{
            activeTintColor:"white",
            activeBackgroundColor:"#65a721"
        }
    }
)
export default Tab;