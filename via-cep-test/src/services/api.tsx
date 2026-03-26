import axios from "axios";

const api = axios.create({
    baseURL: "https://viacep.com.br/ws/",
    timeout: 5000,
});

const validateCep = (cep: string) => {
  const regex = /^\d{5}-\d{3}$/;
  return regex.test(cep);
}


export const getCep = async (cep: string) => {
    if(cep.length == 0){
        throw new Error("CEP é obrigatório.")
    }

    if(!validateCep(cep)) {
        throw new Error("CEP inválido. O formato esperado é 00000-000.");
    }

    cep = cep.replace('-', '');
    try {
    const response = await api.get(`${cep}/json/`);
    
        if(response.data.erro) {
            throw new Error("CEP não encontrado na base de dados.");
        }

        return response.data;
        
    } catch (error: any) {
        throw error;
    }
};