from ast import Return
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView, Response
from rest_framework.status import HTTP_200_OK, HTTP_201_CREATED, HTTP_400_BAD_REQUEST

from teacher.models import Teacher, Classroom

from teacher.serializers import TeacherSerializer, ClassroomSerializer, RegisterClassroomSerializer


class TeacherAPIView(APIView):
    def get(self, request, format=None):
        teachers = Teacher.objects.all()
        serializer = TeacherSerializer(teachers, many=True)

        return Response(serializer.data, status=HTTP_200_OK)


class RegisterClassroomAPIView(APIView):
    # Na nossa URL, quando formos adicionar a aula a um professor, nós precisamos pegar o ID do professor, para atribuir a ele.
    # Por esse motivo, nos parâmetros do nosso POST, nós passamos o id.
    def post(self, request, id, format=None):
        # Dessa forma, utilizamos o get_object_or_404, do Django para buscar um id que seja equivalente ao id passado como parâmetro. Caso o id não seja encontrado, ele retornará um '404'
        teacher = get_object_or_404(Teacher, id=id)

        # Precisamos serelizar os dados da requisição. Por isso, passamos como 'data', os dados (data) da request
        serializer = RegisterClassroomSerializer(data=request.data)

        # E então, verificamos se os dados estão corretos para cadastro
        if serializer.is_valid():
            # Caso seja válido, os dados são instanciados a um novo objeto e depois, salvos no banco de dados. E também, serelizada uma nova Classroom
            classroom = Classroom(
                name=serializer.validated_data.get('name'),
                email=serializer.validated_data.get('email'),
                teacher=teacher
            )
            classroom.save()

            # Passamos many como False, pois estaremos serializando apenas uma aula
            classroom_serializer = ClassroomSerializer(classroom, many=False)

            # Passamos outro método HTTP de sucesso, o 201, que é o de criação
            return Response(classroom_serializer.data, status=HTTP_201_CREATED)

        # Caso os dados não sejam validos, precisamos passar esses erros de validação, retornando uma BAD REQUEST
        return Response(
            {
                "message": "Houveram erros de validação",
                "erros": serializer.errors
            },
            status=HTTP_400_BAD_REQUEST
        )
