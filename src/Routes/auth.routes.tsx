import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { theme } from "../global/styles/theme";

import { Home } from "../Screens/Home/Home";
import { SigIn } from "../Screens/Sigin";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator>
      <Screen name="SigIn" component={SigIn} />
      <Screen name="Home" component={Home} />
    </Navigator>
  );
}
