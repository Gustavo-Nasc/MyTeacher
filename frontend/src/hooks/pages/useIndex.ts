import { clear } from "console";
import { useEffect, useState } from "react";
import { Teacher } from "../../@types/teacher";
import { ApiService } from "../../services/ApiService";

export function useIndex() {
    const [teachersList, setTeachersList] = useState<Teacher[]>([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    // Para pegarmos os dados do professor, criaremos um estado para pegar os seus dados
    const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

    const [message, setMessage] = useState('');

    // Agora utilizaremos o 'useEffect'. Com ele, nós executaremos a requisição ao backend uma única vez. E isso permitirá que a lista de professores fique populada
    useEffect(() => {
        // Aqui é onde a requisição é realizada e o resultado é passado para 'teachersList'

        // Como o nosso ApiService é uma nova instância do Axios, nós podemos utilizar as funções do Axios.

        // Para fazer uma requisição 'GET'. basta utilizarmos a função 'get()' do Axios
        // Como o nosso caminho de base (http://localhost:8000) já foi configurado no nosso 'ApiService', passamos apenas a rota
        ApiService.get('/teachers').then((response) => {
            setTeachersList(response.data)
        })
    }, []);
    // Note que colocamos como segundo parâmetro do 'useEffect' um array vazio

    useEffect(() => {
        clearForm();
    }, [selectedTeacher])

    function classroomMark() {
        if (selectedTeacher !== null) {
            if (validateClassroomData()) {
                ApiService.post('/teachers/' + selectedTeacher.id + '/classrooms', {
                    name,
                    email
                }).then(() => {
                    setSelectedTeacher(null)
                    setMessage('Cadastrado com sucesso!')
                }).catch((error) => {
                    setMessage(error.response?.data.message)
                })
            } else {
                setMessage('Preencha os dados corretamente')
            }
        }
    }

    function validateClassroomData() {
        return name.length > 0 && email.length > 0;
    }

    function clearForm() {
        setName('');
        setEmail('');
    }

    return {
        teachersList,
        name,
        setName,
        email,
        setEmail,
        selectedTeacher,
        setSelectedTeacher,
        classroomMark,
        message,
        setMessage
    }
}