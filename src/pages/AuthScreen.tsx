import { Text, View, TouchableOpacity, TouchableHighlight, Alert } from "react-native"
import ReactNativeBiometrics from "react-native-biometrics";
import { blueHighlight, bluePrimary, subtitleColor } from "./style/color";
import { Divider } from "@rneui/base";
import CustomTextInput from "./component/CustomTextInput";
import { useState } from "react";
import { MainButton } from "./component/MainButton";
import { useDispatch, useSelector } from "react-redux";
import { StoreKey } from "../redux/actions/AuthActions";


const AuthScreen = (props: { navigation: any }) => {
    const dispatch = useDispatch();

    const [password, setPassword] = useState('');
    const rnBiometric = new ReactNativeBiometrics();

    const loginBiometric = async () => {
        const { available } = await rnBiometric.isSensorAvailable();

        if (!available) return;

        rnBiometric.simplePrompt({ promptMessage: 'Confirm fingerprint' }).then((result) => {
            const { success } = result;

            if (success) {
                rnBiometric.createKeys().then((res) => {
                    const { publicKey } = res
                    dispatch(StoreKey(publicKey))
                })

                rnBiometric.biometricKeysExist().then((res) => {
                    const { keysExist } = res
                    if (keysExist) {
                        props.navigation.replace('ListNotes')
                    }
                })
                return;
            }
        }).catch(() => {
            console.log('biometric failed');

            rnBiometric.createKeys().then((res) => {
                const { publicKey } = res
                dispatch(StoreKey(publicKey))
            })

            rnBiometric.biometricKeysExist().then((res) => {
                const { keysExist } = res
                if (keysExist) {
                    props.navigation.replace('ListNotes')
                }
            })
        })
    }

    const loginPassword = async () => {
        if (password === '') return;
        props.navigation.replace('ListNotes')
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignContent: 'stretch', paddingHorizontal: 20.0 }}>
            <MainButton
                onPress={loginBiometric} title={"Login with Biometri"}
                icon="fingerprint"
            />

            <View style={{ paddingVertical: 8 }}>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
                    <Divider style={{ flex: 1 }} width={1} />
                    <Text style={{ marginHorizontal: 8, color: subtitleColor, fontWeight: "600" }}>Or</Text>
                    <Divider style={{ flex: 1 }} width={1} />
                </View>

                <View style={{ height: 20 }} />

                <CustomTextInput value={password} onChangeText={(text) => {
                    setPassword(text)
                }} placeholder={"Password"} />

                <View style={{ height: 20 }} />
                <MainButton onPress={loginPassword} title="Login" disabled={password == ''} />
            </View>

        </View>
    )
}

export default AuthScreen;