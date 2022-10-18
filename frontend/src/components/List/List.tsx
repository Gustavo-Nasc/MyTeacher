import { Button } from "@mui/material";
import { Teacher } from "../../@types/teacher";
import { FormatService } from "../../services/FormatService";
import { EmptyList, ItemDescription, ItemInformations, ItemList, ItemName, ItemPhoto, ItemValue, ListStyled } from "./List.style";

interface ListProps {
    teachers: Teacher[],
    onSelect: (teacher: Teacher) => void
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
                                    {FormatService.monetaryValue(teacher.value_hour)} por hora
                                </ItemValue>

                                <ItemDescription>
                                    {FormatService.limitDescription(teacher.description, 125)}
                                </ItemDescription>
                                <Button onClick={() => props.onSelect(teacher)} sx={{ width: '70%' }} >
                                    Marcar Aula com {FormatService.limitNameButton(teacher.name)}
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