import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "./src/navigation";
import { Provider } from "react-redux";
import store from "./src/redux/app/store";

const App = () => {
  return (
    <Provider store={store} >
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  )
}

export default App;
