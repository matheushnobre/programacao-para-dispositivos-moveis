import { Button, Text } from '@react-navigation/elements';
import { useState } from 'react';
import { TextInput } from 'react-native';
import { StyleSheet, View } from 'react-native';
import { getCep } from '../../services/api';

interface Address {
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export function Home() {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState<Address | null>(null);
  const [numero, setNumero] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setLoading(true);
    setError('');

    try {
      const data = await getCep(cep);
      setAddress({
        logradouro: data.logradouro,
        bairro: data.bairro,
        localidade: data.localidade,
        uf: data.uf,
      });
    } catch(error: any) {
      setError(error.message);
      setAddress(null);
    } finally {
      setLoading(false);
    }
    
  }

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <Text>CEP: </Text>
        <TextInput
          value={cep}
          onChangeText={setCep}
          onBlur={handleSearch}
          placeholder="00000-000"
          placeholderTextColor="#a9a6a6"
          style = {styles.textInput}
        />
      </View>

      <View style={styles.input}>
        <Text>Rua: </Text>
        <TextInput
          value={address?.logradouro || ''}
          editable={false}
          placeholder="Rua X"
          placeholderTextColor="#a9a6a6"
          style = {styles.textInput}
        />
      </View>

      <View style={styles.input}>
        <Text>Número: </Text>
        <TextInput
          value={numero}
          onChangeText={setNumero}
          editable={true}
          placeholder="1234"
          placeholderTextColor="#a9a6a6"
          style = {styles.textInput}
        />
      </View>

      <View style={styles.input}>
        <Text>Bairro: </Text>
        <TextInput
          value={address?.bairro || ''}
          editable={false}
          placeholder="Bairro Y"
          placeholderTextColor="#a9a6a6"
          style = {styles.textInput}
        />
      </View>

      <View style={styles.input}>
        <Text>Cidade: </Text>
        <TextInput
          value={address?.localidade || ''}
          editable={false}
          placeholder="Cidade Z"
          placeholderTextColor="#a9a6a6"
          style = {styles.textInput}
        />
      </View>

      <View style={styles.input}>
        <Text>UF: </Text>
        <TextInput
          value={address?.uf || ''}
          editable={false}
          placeholder="UF"
          placeholderTextColor="#a9a6a6"
          style = {styles.textInput}
        />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 20,
    padding: 10,
    color: "#ffffff"
  },

  input: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
});
