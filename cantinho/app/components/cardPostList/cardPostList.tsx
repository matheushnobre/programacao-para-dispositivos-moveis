import { View } from "react-native"
import CardPost from "../cardPost/cardPost"

import { styles } from "./cardPostList-styles";

export default function CardPostList() {
    return (
        <View style={styles.container}>
            <CardPost
                username="profmarle"
                title="Melhores histórias para a pré-escola em 2026"
                imageSource={require('../../../assets/cards/card01.png')}
            />

            <CardPost
                username="doardaprof"
                title="Dinâmica da caixa sensorial com itens amazônicos"
                imageSource={require('../../../assets/cards/card02.png')}
            />

            <CardPost
                username="ayshaprof"
                title="Ritmos da Amazônia: confeccionando instrumentos musicais com material reciclado"
                imageSource={require('../../../assets/cards/card03.png')}
            />
        </View>
    );
}