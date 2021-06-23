import React from "react";
import { View, Text } from "react-native";
import { Avatar } from "../Avatar/Avatar";
import { styles } from "./Profile.style";

export function Profile() {
  return (
    <View style={styles.container}>
      <Avatar urlImage="https://github.com/Joao-vitor-pinto-andrade.png" />
      <View>
        <View style={styles.user}>
          <Text style={styles.greeting}>olá</Text>
          <Text style={styles.username}>João</Text>
        </View>
        <Text style={styles.message}>Hojé é dia de vitória</Text>
      </View>
    </View>
  );
}
