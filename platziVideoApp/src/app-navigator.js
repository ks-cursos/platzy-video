import React from "react";
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator, createDrawerNavigator } from "react-navigation";
import Home from "./screens/containers/home";
import Movie from "./screens/containers/movie";
import Category from "./screens/containers/category";
import Header from "./sections/components/header";
import About from "./screens/containers/about";
import Profile from "./screens/containers/profile";
import Login from "./screens/containers/login";
import IconApp from "./sections/components/icon";
import Drawer from "./sections/components/drawer";
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
        mode: "modal",
        defaultNavigationOptions: {
            gesturesEnabled: true,
        }
    }
);

const DrawwerNav = createDrawerNavigator(
    {
        Main: {
            screen: WithModal,

            navigationOptions: {
                title: "Inicio",
                drawerIcon: <IconApp name="check" size={34} color="#990000" />
            }
        },
        SObre: {
            screen: About
        }
    },
    {
        drawerWidth: 200,
        drawerBackgroundColor: "white",
        contentComponent: Drawer,
        contentOptions: {
            activeBackgroundColor: "#c6c6c6",
            activeTintColor: "white",
            inactiveTintColor: "#828282",
            inactiveBackgroundColor: "white",
            itemStyle: {
                borderBottomWidth: .5,
                borderBottomColor: 'rgba(0,0,0,.5)'
            },
            labelStyle: {
                marginHorizontal: 0,

            },
            iconContainerStyle: {
                marginHorizontal: 5,
            }

        },
    }

)

const SwitchNav = createSwitchNavigator(
    {
        App: DrawwerNav,
        Login: Login,
        Loading: Loading,
    },
    {
        initialRouteName: 'Loading'
    });

export default DrawwerNav;