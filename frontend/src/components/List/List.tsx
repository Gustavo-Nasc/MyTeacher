import { Button } from "@mui/material";
import { Teacher } from "../../@types/teacher";
import { EmptyList, ItemDescription, ItemInformations, ItemList, ItemName, ItemPhoto, ItemValue, ListStyled } from "./List.style";

interface ListProps {
    teachers: Teacher[],
}

const List = (props: ListProps) => {
    return (
        <div>
            {props.teachers.length > 0 ? (
                <ListStyled>
                    {props.teachers.map(teacher => (
                        <ItemList key={teacher.id}>
                            <ItemPhoto src={teacher.photo} />

                            <ItemInformations>
                                <ItemName>
                                    {teacher.name}
                                </ItemName>

                                <ItemValue>
                                    {teacher.valueHour.toLocaleString('pt-BR', { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' })} por hora
                                </ItemValue>

                                <ItemDescription>
                                    {teacher.description}
                                </ItemDescription>
                                <Button sx={{ width: '70%' }}>
                                    Marcar Aula com {teacher.name}
                                </Button>
                            </ItemInformations>
                        </ItemList>
                    ))}
                </ListStyled>
            ) : (
                <EmptyList>
                    Nenhum professor encontrado
                </EmptyList>
            )}
        </div>
    )
}


export default List;