import { createStackNavigator } from "@react-navigation/stack";
import AuthScreen from "./pages/AuthScreen";
import ListNoteScreen from "./pages/ListNoteScreen";
import NoteForm from "./pages/NoteForm";

const Stack = createStackNavigator();

export const Navigation = () => {
    return (

        <Stack.Navigator>
            <Stack.Screen name="Auth" component={AuthScreen} options={{
                headerShown: false
            }} />
            <Stack.Screen name="ListNotes" options={{ headerTitle: 'Notes' }} component={ListNoteScreen} />
            <Stack.Screen name="NoteForm" options={{ headerTitle: 'Note Form' }} component={NoteForm} />
        </Stack.Navigator>

    )
}