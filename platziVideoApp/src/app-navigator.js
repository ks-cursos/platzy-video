import { createStackNavigator, createAppContainer } from "react-navigation";
import Splash from "./sections/components/splash"
const Main = createStackNavigator(
    {
        Splash
    },
    {
        initialRouteName: "Splash",
        mode: "modal"
    }
);
const AppContainer = createAppContainer(Main);
export default AppContainer;