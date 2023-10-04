import { SafeAreaView, Text, TextInput, TouchableHighlight, View } from "react-native"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddNotes, UpdateNote } from "../redux/actions/NoteActions";
import CustomTextInput from "./component/CustomTextInput";
import { MainButton } from "./component/MainButton";

const NoteForm = (props: { navigation: any, route: any }) => {
    const dispatch = useDispatch();
    const noteSelector = useSelector((store: any) => store.notesReducer)

    const [notes, setNotes] = useState('');
    const [title, setTitle] = useState('');

    const params = props.route.params;

    useEffect(() => {
        if (params === undefined) return;

        setNotes(params.note);
        setTitle(params.title)
    }, [])

    const onAddNotes = () => {
        const id = noteSelector.length === 0 ? 0 : noteSelector[noteSelector.length - 1].id + 1;


        if (notes == '' && title === '') return;
        dispatch(AddNotes(title, notes, id));
        setNotes('');
        setTitle('');

        props.navigation.goBack();
    }

    const onUpdateNote = () => {
        if (notes == '' && title === '') return;

        dispatch(UpdateNote(title, notes, params.id))

        setNotes('');
        setTitle('');

        props.navigation.goBack();
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, alignItems: 'stretch' }}>
                <View style={{ flex: 1, padding: 20 }}>
                    <CustomTextInput
                        value={title}
                        onChangeText={(text) => {
                            setTitle(text);
                        }}
                        placeholder="Title"
                    />
                    <View style={{ height: 10 }} />
                    <CustomTextInput
                        value={notes}
                        onChangeText={(text) => {
                            setNotes(text);
                        }}
                        placeholder="Input Notes"
                        numberOfLines={10}
                        multiline={true}
                    />


                </View>
                <View style={{ paddingHorizontal: 20, paddingVertical: 20 }}>
                    <MainButton
                        disabled={notes === '' && title === ''}
                        onPress={params === undefined ? onAddNotes : onUpdateNote}
                        title="Simpan"
                    />
                </View>
            </View>

        </SafeAreaView>
    )
}

export default NoteForm;