
import { GestureResponderEvent, Text, TouchableHighlight, View } from "react-native";
import { blueHighlight, bluePrimary, borderColor, subtitleColor } from "../style/color";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export const MainButton = (props: {
    onPress: ((event: GestureResponderEvent) => void),
    disabled?: boolean,
    title: string,
    icon?: string
}) => {
    return (
        <TouchableHighlight
            disabled={props.disabled}
            style={{ backgroundColor: props.disabled ? borderColor : bluePrimary, alignItems: 'center', paddingVertical: 16, borderRadius: 8 }}
            onPress={props.onPress}
            underlayColor={blueHighlight}
        >
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {props.icon === undefined ? <View /> : <MaterialIcons name={props.icon} size={20} color="white" />}
                <View style={{ width: 8 }} />
                <Text style={{ color: props.disabled ? 'grey' : 'white', fontWeight: '500', fontSize: 14, }} >{props.title}</Text>
            </View>
        </TouchableHighlight>
    );
}
