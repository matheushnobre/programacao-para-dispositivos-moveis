import { View, Text, TouchableOpacity, Image } from "react-native";
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "./cardPost-styles";

interface CardPostProps {
    username: string;
    title: string;
    imageSource: any;
}

export default function CardPost({username, title, imageSource} : CardPostProps){
    
    const [liked, setLiked] = useState(false);

    const handleLike = () => {
        setLiked(!liked);
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={imageSource} style={styles.image}/>
            </View>
            <Text style={styles.username}>@{username}</Text>
            <Text style={styles.title}>{title}</Text>
            
            <View style={styles.interactionArea}>
                <TouchableOpacity style={styles.readButton}>
                    <Text style={styles.readText}>Ler</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleLike}>
                    <Ionicons 
                        name={liked ? "heart" : "heart-outline"} 
                        size={40} 
                        color={'#473469'} 
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}