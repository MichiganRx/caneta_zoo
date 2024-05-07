import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, ImageBackground, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const UserRegistration = () => {
    const [image, setImage] = useState(null);
    const [username, setUsername] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const navigation = useNavigation();

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        if (!result.cancelled) {
            const imageUri = result.assets[0].uri;
            setImage(imageUri);
            await AsyncStorage.setItem('userImage', imageUri);
        }
    };

    const saveData = async () => {
        if (!username || !login || !password) {
            Alert.alert("Erro", "Por favor, preencha todos os campos.");
            return;
        }

        fetch('http://172.16.42.98/api-caneta-zoo/cadastro-usuario/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nome: username,
                login: login,
                senha: password,
            }),
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                Alert.alert('Sucesso', data.message);
                navigation.navigate('Login');
            } else {
                Alert.alert('Erro', data.message);
            }
        })
        .catch(error => {
            Alert.alert('Erro', 'Ocorreu um erro ao cadastrar usuário');
        });
    };

    return (
        <ImageBackground source={require('../../assets/bg.png')} style={styles.container}>
            <View style={styles.containerLogin}>
                <View style={styles.containerLogo}>
                    <Text style={styles.title}>Criar um conta</Text>
                </View>
                <View style={styles.containerImage}>
                    <Image source={image ? { uri: image } : require('../../assets/user.png')} style={styles.image} />
                    <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
                        <Text style={styles.imageButtonText}>Editar Foto</Text>
                    </TouchableOpacity>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Nome de Usuário"
                    value={username}
                    onChangeText={setUsername}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Login"
                    value={login}
                    onChangeText={setLogin}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword} 
                />
                <TextInput
                    style={styles.input}
                    placeholder="Confirmar senha"
                    secureTextEntry={true}
                    value={passwordConfirm}
                    onChangeText={setPasswordConfirm} 
                />
                <TouchableOpacity style={styles.button} onPress={saveData}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

export default UserRegistration;
