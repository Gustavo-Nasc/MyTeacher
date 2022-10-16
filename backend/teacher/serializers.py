from rest_framework import serializers
from django.forms import ValidationError

from teacher.models import Teacher, Classroom


class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        # Isso representa que queremos no nosso Serializer todos os campos (fields) da tabela (model) Professor
        fields = '__all__'

# Para as Aulas, nós teremos o tipo de Requisição POST
# POST /teacher/:teacher-id:/classrooms

# E esse método POST irá enviar um JSON, conforme exemplo:
# {
#   "name": "Peter Pool"
#   "email": "peterpool@email.com",
# }

# Quando essas informações chegarem ao servidor, elas precisam ser transformadas em uma Classroom, nos registros do Banco de Dados e relacionar a aula com o professor de determinado ID
# Portanto, um ModelSerializer não tem tudo o que necessitamos. Por esse motivo, precisamos utilizar um Serializer padrão e criar o Model manualmente.


class RegisterClassroomSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=255)
    name = serializers.CharField(max_length=100)

    # Cria-se uma validação customizada para evitar que nomes curtos demais sejam inseridos
    def validate_name(self, value):
        if len(value) < 4:
            raise ValidationError("O Nome deve ter ao menos 4 caracteres")

        return value

# Esse Serializer criado acima é o de Cadastro, ou seja, no cadastro, o JSON é enviado
# Porém, quando o cadastro for realizado, é preciso que os dados da Classroom criada sejam retornados. Ou seja, teremos outro Serializer só para a Reposta


class ClassroomSerializer(serializers.ModelSerializer):
    class Meta:
        model = Classroom
        fields = '__all__'
