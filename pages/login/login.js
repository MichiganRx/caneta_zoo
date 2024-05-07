import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, ImageBackground, Image, Alert } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation(); 

    const loginUser = async () => {
        if (!username || !password) {
            Alert.alert("Erro", "Por favor, preencha todos os campos.");
            return;
        }

        try {
            const response = await fetch('http://172.16.42.98/api-caneta-zoo/login/?login=' + username + '&senha=' + password);
            const data = await response.json();

            if (data.length > 0) {
                console.log('Usuário autenticado:', data);
                await AsyncStorage.setItem('username', username);
                navigation.navigate('Products');
            } else {
                Alert.alert('Erro', 'Nome de usuário ou senha incorretos.');
            }
        } catch (error) {
            console.error('Erro ao tentar fazer login:', error);
            Alert.alert('Erro', 'Ocorreu um erro ao tentar fazer login.');
        }
    };

    const goToForgotPassword = () => {
        navigation.navigate('PasswordReset');
    };

    const goToSignUp = () => {
        navigation.navigate('UserRegistration');
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
                <TouchableOpacity style={styles.button} onPress={loginUser}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <View  style={styles.containerLink}>
                    <TouchableOpacity onPress={goToSignUp}>
                        <Text style={styles.link}>Criar conta</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={goToForgotPassword}>
                        <Text style={styles.link}>Esqueci a senha</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

export default Login;
