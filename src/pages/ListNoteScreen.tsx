
import { FAB } from "@rneui/themed";
import { Text, TouchableOpacity, View } from "react-native"
import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { useSelector } from "react-redux";
import { subtitleColor } from "./style/color";
import Icon from 'react-native-vector-icons/MaterialIcons'
import ReactNativeBiometrics from "react-native-biometrics";

const ListNoteScreen = (props: { navigation: any }) => {
    const notesReducers = useSelector((store: any) => store.notesReducer);
    const authReducer = useSelector((store: any) => store.authReducer);
    const openNotes = (item: any) => {

        const rnBiometric = new ReactNativeBiometrics();

        rnBiometric.biometricKeysExist().then((res) => {
            const { keysExist } = res;

            if (authReducer.biometric_key != null) {
                props.navigation.navigate('NoteForm', { title: item.title, note: item.text, id: item.id })
            }

        })
    }

    return (
        <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <FlatList
                data={notesReducers}
                style={{ paddingHorizontal: 20, paddingVertical: 16, flex: 1 }}
                ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
                ListEmptyComponent={() => (
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingVertical: 100 }}>
                        <Icon name="folder-delete" size={50} color={subtitleColor} />
                        <Text style={{ fontSize: 25, fontWeight: "400" }}>Notes Empty</Text>
                        <Text style={{ fontSize: 14, fontWeight: "400", color: subtitleColor }}>Create note first</Text>
                    </View>
                )}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => openNotes(item)}>
                        <View style={{ padding: 16, backgroundColor: 'white', borderRadius: 8, flexDirection: 'column', }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                                <Icon name="edit-note" size={32} color={subtitleColor} />
                                <Text style={{ paddingLeft: 8, marginRight: 16, fontSize: 32, fontWeight: '600' }} numberOfLines={1}>{item == undefined ? '' : item.title}</Text>
                            </View>
                            <Text style={{ fontSize: 12, color: subtitleColor, paddingLeft: 40 }}>{item == undefined ? '' : item.text}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
            <View style={{ position: 'absolute', flex: 1, alignSelf: 'flex-end', paddingVertical: 20, paddingHorizontal: 16 }}>
                <FAB onPress={() => props.navigation.navigate('NoteForm')} icon={{ name: 'add', color: 'white' }} />
            </View>
        </View>
    )
}

export default ListNoteScreen;