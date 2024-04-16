import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, ImageBackground, Image, Alert } from 'react-native'; // Adicione Alert
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const [image, setImage] = useState(null);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation(); 

    useEffect(() => {
        const getStoredData = async () => {
            try {
                const storedImage = await AsyncStorage.getItem('userImage');
                const storedUsername = await AsyncStorage.getItem('username');
                if (storedImage !== null) {
                    setImage(storedImage);
                }
                if (storedUsername !== null) {
                    setUsername(storedUsername);
                }
            } catch (error) {
                console.log('Error retrieving stored data:', error);
            }
        };
        getStoredData();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        console.log("ImagePicker Result:", result);

        if (!result.cancelled) {
            const imageUri = result.assets[0].uri;
            setImage(imageUri);
            try {
                await AsyncStorage.setItem('userImage', imageUri);
                console.log("Image stored in AsyncStorage");
            } catch (error) {
                console.log('Error storing image:', error);
            }
        }
    };

    const saveData = async () => {
        console.log("Saving data...");
        if (!username || !password) {
            console.log("Username or password is empty!");
            Alert.alert("Erro", "Por favor, preencha todos os campos.");
            return;
        }
        try {
            await AsyncStorage.setItem('username', username);
            console.log("Username stored in AsyncStorage");
            navigation.navigate('Products'); 
        } catch (error) {
            console.log('Error storing username:', error);
        }
    };

    return (
        <ImageBackground source={require('../../assets/bg.png')} style={styles.container}>
            <View style={styles.containerLogin}>
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
                <Image source={image ? { uri: image } : require('../../assets/user.png')} style={styles.image} />
                <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
                    <Text style={styles.imageButtonText}>Editar Foto</Text>
                </TouchableOpacity>
                <TextInput
                    style={styles.input}
                    placeholder="Nome de Usuário"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword} 
                />
                <TouchableOpacity style={styles.button} onPress={saveData}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

export default Login;
