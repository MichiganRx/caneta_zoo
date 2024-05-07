import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import { RadioButton } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { clearCartAction } from '../../store';
import { useNavigation } from '@react-navigation/native';
import TotalValue from '../../components/totalValue/totalValue';
import Header from '../../components/header/header';
import styles from './styles';

const PurchaseScreen = ({ route }) => {
    const { totalPrice } = route.params;
    const [paymentMethod, setPaymentMethod] = useState(null);
    const [cardNumber, setCardNumber] = useState('');
    const [cvc, setCVC] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [address, setAddress] = useState('');
    const [checked, setChecked] = useState('credit');

    const dispatch = useDispatch();
    const navigation = useNavigation();

    const handlePaymentMethodChange = (method) => {
        setPaymentMethod(method);
        setChecked(method);
    };        

    const handleFinalize = () => {
        if (!paymentMethod || !cardNumber || !cvc || !state || !city || !address) {
            Alert.alert(
                'Campos Incompletos',
                'Por favor, preencha todos os campos antes de finalizar a compra.',
                [{ text: 'OK' }]
            );
            return; 
        }

        dispatch(clearCartAction());
        Alert.alert(
            'Compra Finalizada',
            'Obrigada por sua compra!',
            [{
                text: 'OK',
                onPress: () => {
                    navigation.navigate('Products');
                }
            }]
        );
    };

    const handleCardNumberChange = (text) => {
        const formattedText = text.replace(/\D/g, '');
        setCardNumber(formattedText);
    };

    const handleCVCChange = (text) => {
        const formattedText = text.replace(/\D/g, '');
        setCVC(formattedText);
    };

    return (
        <View style={styles.container}>
            <Header/>
            <View style={{ flex: 1, padding: 20, gap: 20 }}>
                <View style={styles.containerContent}>
                    <Text style={styles.titleContainer}>Forma de Pagamento:</Text>
                    <View style={styles.containerInfo}>
                        <View style={styles.paymentMethodContainer}>
                            <TouchableOpacity>
                                <View style={styles.paymentMethodOption}>
                                    <RadioButton
                                        value="credit"
                                        status={ checked === 'credit' ? 'checked' : 'unchecked' }
                                        onPress={() => handlePaymentMethodChange('credit')}
                                    />
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={require('../../assets/debit-card.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
                                        <Text>Crédito</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={styles.paymentMethodOption}>
                                    <RadioButton
                                        value="debit"
                                        status={ checked === 'debit' ? 'checked' : 'unchecked' }
                                        onPress={() => handlePaymentMethodChange('debit')}
                                    />
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={require('../../assets/credit-card.png')} style={{ width: 20, height: 20, marginRight: 5 }} />
                                        <Text>Débito</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.paymentDetailsContainer}>
                            <TextInput
                                placeholder="Número do Cartão"
                                style={[styles.input, { width: '75%' }]} 
                                value={cardNumber}
                                onChangeText={handleCardNumberChange}
                                keyboardType="numeric" 
                            />
                            <TextInput
                                placeholder="CVC"
                                style={[styles.input, { width: '20%' }]}
                                value={cvc}
                                onChangeText={handleCVCChange}
                                keyboardType="numeric" 
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.containerContent}>
                    <Text style={styles.titleContainer}>Informações de Entrega:</Text>
                    <View style={styles.containerInfo}>
                        <View style={styles.paymentDetailsContainer}>
                            <TextInput
                                placeholder="Estado"
                                style={[styles.input, { width: '20%' }]}
                                value={state}
                                onChangeText={setState}
                            />
                            <TextInput
                                placeholder="Cidade"
                                style={[styles.input, { width: '75%' }]}
                                value={city}
                                onChangeText={setCity}
                            />
                        </View>
                        <TextInput
                            placeholder="Endereço"
                            style={styles.input}
                            value={address}
                            onChangeText={setAddress}
                        />
                    </View>
                </View>
            </View>
            <TotalValue totalPrice={totalPrice} buttonText='Finalizar' onPress={handleFinalize}/>
        </View>
    );
};

export default PurchaseScreen;
