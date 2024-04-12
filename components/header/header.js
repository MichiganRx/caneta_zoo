import React, { useState } from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import styles from "./styles";

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={toggleMenu} style={styles.containerMenuIcon}>
        <Image 
          style={styles.menuIcon}
          source={require("../.././assets/menu.png")}
        />
      </TouchableOpacity>
      {/* <Image 
        style={{height:35, width:35}}
        source={require(".././assets/floco-de-neve.png")}
      /> */}
      <Text style={styles.nameApp}>Caneta Zoo</Text>
      {menuVisible && (
        <View style={styles.menuContainer}>
          <View style={styles.menu}>
            <TouchableOpacity onPress={toggleMenu} style={styles.containerClose}>
              <Image 
                style={styles.close}
                source={require("../.././assets/fechar.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Link 1 clicado')}>
              <Text style={styles.menuItem}>Link 1</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log('Link 2 clicado')}>
              <Text style={styles.menuItem}>Link 2</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}
