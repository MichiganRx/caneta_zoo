import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, ImageBackground, Alert } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const PasswordReset = () => {
    const [username, setUsername] = useState('');
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const navigation = useNavigation();

    const saveData = () => {
        if (!username || !login || !password || !passwordConfirm) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos.');
            return;
        }

        if (password !== passwordConfirm) {
            Alert.alert('Erro', 'As senhas não coincidem.');
            return;
        }

        fetch(`http://172.16.42.98/api-caneta-zoo/resetar-senha/?login=${login}&novaSenha=${password}`)
            .then(response => response.text())
            .then(result => {
                Alert.alert('Status', result);
                if (result === "Senha atualizada com sucesso.") {
                    navigation.navigate('Login');
                }
            })
            .catch(error => {
                Alert.alert('Erro', 'Ocorreu um erro ao conectar-se ao servidor.');
            });
    };

    return (
        <ImageBackground source={require('../../assets/bg.png')} style={styles.container}>
            <View style={styles.containerLogin}>
                <View style={styles.containerLogo}>
                    <Text style={styles.title}>Redefinição de senha</Text>
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
                    placeholder="Nova senha"
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
                    <Text style={styles.buttonText}>Confirmar</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};

export default PasswordReset;
