import { Feather } from '@expo/vector-icons';
import React, { useEffect } from 'react';
import { BackHandler, Text, View } from 'react-native';
export default function Blocked() {
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => true)
        return () =>
            BackHandler.removeEventListener('hardwareBackPress', () => true)
    }, [])

    return (
        <View style={{ height: '100%' }}>

            <View style={{ justifyContent: 'center', alignItems: 'center', height: '90%' }}>

                <Feather name="stop-circle" size={150} color="red" style={{ position: 'absolute' }} />
                <Text style={[{ textAlign: 'center', paddingHorizontal: 40, fontSize: 20, marginTop: 400, width: '100%' }]}>Your account has been blocked</Text>

            </View>
        </View>
    )
}


