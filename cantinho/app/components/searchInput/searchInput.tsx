import { View, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { styles } from "./searchInput-styles";
import { Ionicons } from '@expo/vector-icons'; 
import Filter from "../filter/filter";

const filters = ['Matemática', 'Português', 'Ciências', 'História', 'Geografia', 'Artes', 'Ed. Física', 'Ensino Religioso', 'Pré-Escola', 'Fundamental I', 'Fundamental II',];

export default function SearchInput(){
    const [text, setText] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.inputWrapper}>
                <TextInput
                    placeholder="Pesquisar"
                    placeholderTextColor="#7D669E"
                    onChangeText={setText} 
                    style={styles.textInput}
                    underlineColorAndroid="transparent"
                />

                <TouchableOpacity style={styles.searchIcon}>
                    <Ionicons 
                        name="search" 
                        size={22} 
                        color="#473469" 
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.filterView}>
                {filters.map((filter, index) => (
                    <Filter key={index} filterName={filter} />
                ))}
            </View>
        </View>
    );
}