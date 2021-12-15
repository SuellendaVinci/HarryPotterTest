import styled from 'styled-components'


export const Container = styled.div`
    border: 1px solid black;
    width: 350px;
    padding: 10px;
    font-style: italic;
    background-color: #243db82b;
    font-size: 15px;
    border-radius: 5px;
    margin-top: 10px;
    :hover{
        background-color: #0d207f61;
        cursor: pointer;
        transition: all 0.3s linear;
    }
    
`;

export const TitleStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5px;
    font-size: 18px;
    color: #b7b5b5;
`;

export const ImageStyled = styled.img`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-itens: center;
    width: 100px;
    margin-bottom: 5px;
    border: 2px solid #b7b5b5;


`
