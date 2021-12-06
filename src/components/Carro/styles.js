import styled from "styled-components";

export const CarroContenedor = styled.div`
    position: relative;
`

export const Carrito = styled.button`
    background-color: #118002;
    border: none;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    width: 60px;
    height: 40px;
`

export const ListaArticulos = styled.div`
    border-radius: 5px;
    background-color: white;
    color: #000;
    padding: 10px;
    position: absolute;
    right: 0;
    top: 50px;
    width: 400px;

`

export const Ul = styled.ul`
    list-style-type: none;
    margin: 0%;
    padding: 0;
    
`

export const Li = styled.li`
    align-items: center;
    border-bottom: 1px dashed #ccc;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    padding-bottom: 5px;


`

export const DeleteButton = styled.button`
    border: none;
    background-color: #fb0207;
    color: #fff;
    cursor: pointer;
    font-size: 0.6rem;
    padding: 2px 5px;


`