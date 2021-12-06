import { useRef, useState } from "react";
import { Carro } from '../Carro'
import { Nav, Button } from './styles'

export const Navbar = ({ cantidad, productos }) => {
    const [buscar, setBuscar] = useState('')
    const reference = useRef(null)

    const handleSearch = () => {
        setBuscar(reference.current.value)
    }

    const handleBuscador = () =>{
        console.log(reference.current.value)
        setBuscar('')
    }
    return (
        
        <Nav>
            <input type='text' name='buscador' value={buscar} onChange={handleSearch} ref={reference}/>
            <Button onClick={handleBuscador}> Buscador </Button>

            <Carro cantidad={cantidad} productos={productos} />
        </Nav>
    )
}