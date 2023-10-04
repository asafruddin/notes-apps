import { TextInput } from "react-native";
import { borderColor, subtitleColor } from "../style/color";

const CustomTextInput = (props: {
    value: string,
    onChangeText: ((text: string) => void),
    placeholder: string,
    numberOfLines?: number
    multiline?: boolean
}) => {
    return (<TextInput
        style={{
            borderWidth: 1,
            borderColor: borderColor,
            borderRadius: 8,
            paddingHorizontal: 10,
            paddingTop: 12,
            paddingBottom: 12,
            textAlignVertical: 'top',
        }}
        value={props.value}
        onChangeText={props.onChangeText}
        placeholderTextColor={subtitleColor}
        placeholder={props.placeholder}
        numberOfLines={props.numberOfLines}
        multiline={props.multiline}
    />)
}

export default CustomTextInput;