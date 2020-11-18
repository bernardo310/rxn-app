import React, { useState, useEffect } from 'react'
import { View, Alert, Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native'
import styles from './RegistroStyles';
import Input from '../../components/core/Input';
import Button from '../../components/core/Button';
import postVolunteer from '../../data/volunteer';

const RegistroView = (props) => {
    const eventId = props.navigation.getParam('idEvent');
    
    const [inputName, setInputName] = useState('');
    const [inputEmail, setInputEmail] = useState('');
    const [inputPhoneNumber, setInputPhoneNumber] = useState('');
    const [inputValidation, setInputValidation] = useState(true);

    useEffect(() => {
        if(inputValidation == false){
            Alert.alert('Error en campos', 'Asegurese de utilizar el formato correcto de cada campo', [{text: 'Entendido', style: 'destructive'}]);
            setInputValidation(true);
        }
    });

    const validateInputs = async() => {
         if(inputName == '' || inputEmail == '' || inputPhoneNumber== ''){
             Alert.alert('Campos incompletos', 'Debe completar todos los campos', [{text: 'Entendido', style: 'destructive'}]);
             return;
         }
         validateInputName();
         validateInputPhoneNumber();
         validateInputEmail();
         const name = inputName;
         const email = inputEmail;
         const phoneNumber = inputPhoneNumber;
         if(inputValidation == true){
            const body = {
                eventId,
                name,
                email,
                phoneNumber
            };
            const data = await postVolunteer(body);
            if(data==200){
                Alert.alert('Registro completado', 'Te registraste a este evento con éxito!', [{text: 'Entendido', style: 'destructive'}]);
                setInputName('');
                setInputEmail('');
                setInputPhoneNumber('');
            }
            if(data==428){
                Alert.alert('Registro repetido', 'Ya estas registrado a este evento!', [{text: 'Entendido', style: 'destructive'}]);
                setInputName('');
                setInputEmail('');
                setInputPhoneNumber('');
            }
        }
    };

    const inputNameHandler = inputText => {
        setInputName(inputText);
    };

    const validateInputName = () => {
        const pattern = /^[a-zA-z]+\s[a-zA-z]+$/;
        if(pattern.test(inputName)){
            Keyboard.dismiss();
        }
        else{
            setInputValidation(false);
            setInputName('');
        }
    };

    const inputEmailHandler = inputText => {
        setInputEmail(inputText);
    };

    const validateInputEmail = () => {
        const pattern = /[a-z]+@[a-z]+\.[a-z]+$/;
        const lcInputEmail = inputEmail.toLowerCase();
        if(!pattern.test(lcInputEmail)){
            setInputValidation(false);
            setInputEmail('');
        }
    };

    const inputPhoneNumberHandler = inputText => {
        setInputPhoneNumber(inputText);
    };

    const validateInputPhoneNumber = () => {
        const pattern = /[0-9]{10}$/;
        if(!pattern.test(inputPhoneNumber)){
            setInputPhoneNumber('');
            setInputValidation(false);
        }
    };

    return (
        <ScrollView>

        <TouchableWithoutFeedback onPress = {() => {Keyboard.dismiss()}}>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <Input text='Nombre' placeholder={'Ingrese su nombre y apellido'} autoCapitalize="words"  keyboardType="default" onChangeText={inputNameHandler} value={inputName} />
                    <Input text='Email' placeholder={'Ingrese su email'} keyboardType="email-address" onChangeText={inputEmailHandler} value={inputEmail} />
                    <Input text='Número telefónico' placeholder={'Ingrese su número telefónico (10 dígitos)'} keyboardType="phone-pad" onChangeText={inputPhoneNumberHandler} value={inputPhoneNumber} />
                </View>
                <View style={styles.buttonContainer}>
                    <Button onPress={validateInputs}>Confirmar registro</Button>
                </View>
            </View>
        </TouchableWithoutFeedback>
        </ScrollView>
    )
}

RegistroView.navigationOptions = navData => {
    return {
        headerTitle: 'Registro',
    }
}

export default RegistroView
