import React from 'react'
import { View, Text, ScrollView, Linking, Image } from 'react-native'

import styles from './HomeStyles';
import Button from '../../components/core/Button';
import Title from '../../components/core/Title';
import Bullet from '../../components/core/Bullet';
const HomeView = (props) => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* <Image style={styles.img} resizeMode={"contain"} source={require('../../../assets/images/home.jpg')} /> */}
            <Title >¿Quiénes Somos?</Title>
            <Bullet icon='rxn' >Impartimos talleres de química de productos y herramientas útiles para promover el emprendimiento.</Bullet>
            <Bullet icon='rxn' >Promovemos la divulgación científica y el conocimiento mediante publicaciones y conferencias para todo público</Bullet>
            <Bullet icon='rxn'>Repartimos productos de higiene personal y limpieza general a las personas que más lo necesitan.</Bullet>
            <Title >Contacto</Title>
            <Bullet icon='phone' link={true} click={() => Linking.openURL(`tel:${+528112421360}`)}>(+52) 8112421360</Bullet>
            <Bullet icon='whatsapp' link={true} click={() => Linking.openURL('whatsapp://send?text=hola!&phone=528117949143')}>(+52) 8117949143</Bullet>
            <Bullet icon='envelope' link={true} click={() => Linking.openURL('mailto: INFO@TALLERRXN.ORG')}>INFO@TALLERRXN.ORG</Bullet>
            <Bullet icon='instagram' link={true} click={() => Linking.openURL('https://www.instagram.com/tallerrxn')}>@TALLERRXN</Bullet>
            <Bullet icon='facebook' link={true} click={() => Linking.openURL('https://www.facebook.com/tallerrxn/')}>TALLERREACCION</Bullet>
        
            <Title >Ayúdanos como voluntario en el próximo evento!</Title>
            <Button onPress={() => {
                props.navigation.navigate({
                    routeName: 'Calendario',
                })
            }}>Ver Eventos Disponibles</Button>

        </ScrollView>
    )
}

HomeView.navigationOptions = navData => {
    return {
        headerTitle: 'Home',
    }
}

export default HomeView
