import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./filter-styles";
import { useState } from "react";

interface FilterProps {
    filterName: string;
    key: number;
}

export default function Filter({filterName, key}: FilterProps){
    
    const [marked, setMarked] = useState(false);
    
    const handleMark = () => {
        setMarked(!marked);
    }

    return (
        <View>
            <TouchableOpacity 
                style={[styles.touchable, marked && styles.markedTouchable]} 
                onPress={handleMark}
                >
                <Text style = {[styles.label, marked && styles.markedLabel]}>
                    {filterName}
                </Text>
            </TouchableOpacity>
        </View>
    )
}