import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Text, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
    const [image, setImage] = useState(null);
    const [username, setUsername] = useState('');
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
        try {
            await AsyncStorage.setItem('username', username);
            console.log("Username stored in AsyncStorage");
            navigation.navigate('Products'); 
        } catch (error) {
            console.log('Error storing username:', error);
        }
    };

    console.log("Rendering login screen...");

    return (
        <View style={styles.container}>
            <Image source={image ? { uri: image } : require('../../assets/user.png')} style={styles.image} />
            <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
                <Text style={styles.imageButtonText}>Adicionar Foto</Text>
            </TouchableOpacity>
            <TextInput
                style={styles.input}
                placeholder="Nome de Usuário"
                value={username}
                onChangeText={setUsername}
            />
            <TouchableOpacity style={styles.button} onPress={saveData}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Login;
