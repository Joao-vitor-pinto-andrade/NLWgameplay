import React, { useState } from "react";
import { View, Text, Image, StatusBar, Button } from "react-native";
import { ButtonIcon } from "../../components/ButtonIcon/Button";
import IllustrationImage from "../../assets/illustration.png";
import { styles } from "./index.style";

export function SigIn() {
  return (
    /*Inserção da imagem */
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Image
        source={IllustrationImage}
        style={styles.image}
        resizeMode="stretch"
      />
      <View style={styles.content}>
        <Text style={styles.title}>
          Organize {`\n`}
          suas jogatinas{`\n`}
          facilmente
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar com seus games{`\n`}
          favoritos com seus amigos
        </Text>
        <ButtonIcon title={"Entrar com discord"} activeOpacity={0.7} />
      </View>
    </View>
  );
}
