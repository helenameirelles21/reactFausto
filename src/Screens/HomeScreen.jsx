import { Button, Text, View } from "react-native"
import { styles } from "../lib/styles";

 export const HomeScreen = ({navigation}) =>{
    return(
        <View style={styles.container}>
            <Text>OI sou a HOME SCREEN</Text>
            <Button title="ir para sobre" onPress={() => navigation.navigate("Sobre")} />
        </View>
    );
};