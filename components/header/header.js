import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Image, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "./styles";

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [userImage, setUserImage] = useState(require("../../assets/user.png"));
  const [username, setUsername] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      const storedImage = await AsyncStorage.getItem('userImage');
      const storedUsername = await AsyncStorage.getItem('nome');
      if (storedImage !== null) {
        setUserImage({ uri: storedImage });
      }
      if (storedUsername !== null) {
        setUsername(storedUsername);
      }
    };
    fetchData();
  }, []);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const navigateToCart = () => {
    navigation.navigate('CartScreen');
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem('userImage');
    await AsyncStorage.removeItem('username');
    navigation.navigate('Login');
  };

  return (
    <View style={styles.header}>
      <View style={styles.containerContentHeader}>
        <TouchableOpacity onPress={toggleMenu}>
          <Image 
            style={{height:20, width:20}}
            source={require("../.././assets/menu.png")}
          />
        </TouchableOpacity>
        <View style={styles.containerLogo}>
          <Image 
            style={{height:25, width:80}}
            source={require("../../assets/logo.png")}
          />
          <Image 
            style={{height:25, width:44}}
            source={require("../../assets/logo2.png")}
          />
        </View>
        <TouchableOpacity onPress={navigateToCart}>
          <Image 
            style={{height:25, width:28}}
            source={require("../.././assets/cart.png")}
          />
        </TouchableOpacity>
      </View>
      {menuVisible && (
        <View style={styles.menuContainer}>
          <View style={styles.background}>
            <View style={styles.menu}>
              <TouchableOpacity onPress={toggleMenu} style={styles.containerClose}>
                <Image 
                  style={{height:15, width:15}}
                  source={require("../.././assets/close.png")}
                />
              </TouchableOpacity>
              <View style={styles.containerInfoUser}>
                <Image 
                    style={{height:50, width:50, borderRadius:50,}}
                    source={userImage}
                />
                <Text style={styles.nameUser}>{username}</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('Products')} style={styles.optionsMenu}>
                <Image 
                  style={{height:15, width:15}}
                  source={require("../.././assets/home.png")}
                />
                <Text style={styles.menuItem}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('CartScreen')} style={styles.optionsMenu}>
                <Image 
                    style={{height:15, width:15}}
                    source={require("../.././assets/cart.png")}
                  />
                <Text style={styles.menuItem}>Meu Carrinho</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleLogout} style={styles.optionsMenu}>
                <Image 
                    style={{height:15, width:15}}
                    source={require("../.././assets/exit.png")}
                  />
                <Text style={styles.menuItem}>Sair</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
