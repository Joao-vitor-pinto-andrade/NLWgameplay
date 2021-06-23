import React from "react";
import { View, Text } from "react-native";
import { styles } from "./Profile.style";

export function Profile() {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>olá</Text>
          <Text style={styles.username}>João</Text>
        </View>{" "}
        style={styles.message}
        <Text>Hojé é dia de vitória</Text>
      </View>
    </View>
  );
}
