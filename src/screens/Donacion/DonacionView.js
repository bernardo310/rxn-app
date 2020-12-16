import React from 'react'
import { View, Linking } from 'react-native'

import Button from '../../components/core/Button'
import Title from '../../components/core/Title'
import BodyText from '../../components/core/BodyText'
import Bullet from '../../components/core/Bullet';

import styles from './DonacionStyles';

const DonacionView = () => {
    return (
        <View style={styles.container}>
            <Title >¿Para Qué Queremos Donaciones?</Title>
            <Bullet icon='hand-holding-heart'>Con $200.00 ayudas a una familia por 1 mes a contar con productos de higiene de primera necesidad durante esta contingencia COVID19.</Bullet>
            <Bullet icon='flask'>Taller RXN elabora cada uno de los productos donados para minimizar el costo de los productos, ¡Apóyanos!</Bullet>
            <Bullet icon='handshake'>Si no puedes $200, dona lo que quieras o ayúdanos a compartir para llegar a la meta de 1200 familias.</Bullet>
            <Bullet icon='rxn'>Muchas gracias!</Bullet>

            <View style={styles.donate_btn_container}>
                <Button onPress={() => {Linking.openURL('https://www.moneypool.mx/p/kQJ4Qs8?utm_campaign=original')}}>Ir a donar</Button>
            </View>

        </View>
    )
}

DonacionView.navigationOptions = navData => {
    return {
        headerTitle: 'Donación',
    }
}

export default DonacionView
