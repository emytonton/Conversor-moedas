import { View } from "react-native";
import { Picker } from "@react-native-picker/picker";

export default function PickerItem(){
    return(
       <Picker>
        <Picker.Item value = 'BTC' key = {0} label = 'BTC' />
       </Picker>
    )
}