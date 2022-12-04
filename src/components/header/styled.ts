import styled from 'styled-components';

export const Container = styled.div`
    color: white;
`;

// FAIXA

export const faixa = styled.div`
    background-color: #D02020;
    width: 100%;
    height: 50px;
`;

export const position = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    img {
        margin-left: 15px;
    }
`;

// FAIXA

// AREA

export const area = styled.div`
    background-color: #A60F0F;
    width: 100%;
    height: 130px;

    div > .line {
        margin: 0px 10px;
        width: 2px;
        border-radius: 99px;
        background-color: white;
    }

    div > .carrinhoadd {
        position: absolute;
        padding-left: 115px;
    }

    @media (max-width: 798px) {
        height: 100px;
    }

    @media (max-width: 698px) {
        height: 120px;
    }
`;

export const positionarea = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    padding: 0px 50px;

    flex-wrap: wrap;

    margin: 0px calc((100% - 1200px)/2);

    @media (max-width: 1198px) {
        margin: inherit;
        padding: 0px 20px;
    }
`;

// Inclementos

export const inputDimension = styled.div`
    width: 400px;
`;

export const imgposition = styled.div`
    @media (max-width: 798px) {
        img {
            height: 50px;
        }
    }
`;



export const inputSearch = styled.div`
        display: flex;

        input {
            outline: 0;
            border: 0;
            width: 999px;
            padding-left: 17px;
            font-size: 14px;
            font-family: Rubik;
            background-color: transparent;
            color: black;
        }
    `;

export const bgInput = styled.div`
        display: flex;
        align-items: center;
        border-radius: 99px;
        width: 400px;
        background-color: white;
        box-shadow: 4px 4px 7px #00000054;

        input {
            outline: 0;
            border: 0;
            width: 999px;
            padding-left: 17px;
            font-size: 14px;
            font-family: Rubik;
            background-color: transparent;
            color: black;
        }

        @media (max-width: 798px) {
            width: 350px;
        }

        @media (max-width: 698px) {
            width: 100%;

            input {
                width: 100%!important;
            }
            
        }
`;

export const Lupa = styled.div`

        button {
            margin: 2.0px;
            height: 38px;
            border: 0;
            outline: 0;
            background-color: #D02020;
            border-radius: 99px;
            width: 60px;
            cursor: pointer;
            transition: background 0.3s ease;
        }

        button:hover {
            background-color #BB1C1C;
        }

        button > img {
            margin-top: 3px;
        }
    `;
// Inclementos

// AREA

// CATEGORIA

export const categoria = styled.div`
    background-color: #D02020;

    ul > li {
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    ul {
        margin: 0px calc((100% - 1000px)/2);
    }

    li {
        text-align: center;
    }

    @media (max-width: 1198px) {
        ul {
            margin: inherit;
        }
    }
`;

// CATEGORIA