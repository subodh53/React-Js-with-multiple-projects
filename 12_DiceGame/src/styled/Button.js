import styled from "styled-components"

export const Button = styled.button`
    padding: 10px 18px;
    background: #000000;
    border-radius: 5px;
    color: white;
    min-width: 220px;
    height: 44px;
    border: none;
    font-size: 16px;
    cursor: pointer;
    transition: 0.3s background ease-in;

    &:hover{
        background-color: white;
        border: 1px solid black;
        color: black;
        transition: 0.3s background ease-in;
    }
`