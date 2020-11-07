import React from 'react'
import { View, Linking } from 'react-native'

import Button from '../../components/core/Button'
import Title from '../../components/core/Title'
import BodyText from '../../components/core/BodyText'

import styles from './DonacionStyles';

const DonacionView = () => {
    return (
        <View style={styles.container}>
            <Title >¿Para Qué Queremos Donaciones?</Title>
            <BodyText style={styles.description}>
                Buscamos alianzas con empresas u organizaciones que quieran sumarse
                a la causa para apoyar a familias en situación vulnerable, impactando
                a dichas comunidades mediante  la donación de kits o materia prima
                para su elaboración.
            </BodyText>
            <View style={styles.donate_btn_container}>
                <Button onPress={() => {Linking.openURL('https://www.moneypool.mx/')}}>Ir a donar</Button>
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
