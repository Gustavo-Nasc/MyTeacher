import { styled } from "@mui/material";

export const ListStyled = styled('ul')`
    width: 100%;
    max-width: 56.25rem;
    margin: 0 auto;
    padding: ${({ theme }) => theme.spacing(10, 2, 10, 2)};
    
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing(9)};

    ${({ theme }) => theme.breakpoints.down('sm')} {
        grid-template-columns: 1fr;
        gap: ${({ theme }) => theme.spacing(8)};
    }
`;

export const EmptyList = styled('h2')`
    text-align: center;
    padding: ${({ theme }) => theme.spacing(20, 0)};
`;

export const ItemList = styled('li')`
    list-style: none;
`;

export const ItemPhoto = styled('img')`
    width: 100%;
`;

export const ItemInformations = styled('div')`
`;

export const ItemName = styled('h3')`
    margin: ${({ theme }) => theme.spacing(2, 0, 0, 0)};
    font-weight: 700;
    font-size: 1.25rem;
`;

export const ItemValue = styled('p')`
    margin: 0;
    font-weight: 600;
    color: ${({ theme }) => theme.palette.primary.main};
    font-size: 1rem;
`;

export const ItemDescription = styled('p')`
    word-break: break-word;
`;