import axios from "axios";

// Criamos uma função responsável por uma nova instância do axios
export const ApiService = axios.create({
    // Note que a 'baseURL' que passamos é a mesma na qual o 'backend' da Aplicação está rodando
    baseURL: 'http://localhost:8000',
    headers: {
        // O Content Type é aquilo que vamos enviar ou receber a partir do 'backend'. No nosso caso, estaremos enviando e recebendo JSON
        'Content-Type': 'application/json'
    }
});