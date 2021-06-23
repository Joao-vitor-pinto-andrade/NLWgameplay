import React from "react";
import { View } from "react-native";
import { Profile } from "../../components/Profile/Profile";
import { styles } from "./Home.style";

export function Home() {
  return (
    <View>
      <View style={styles.Header}>
        <Profile />
      </View>
    </View>
  );
}
