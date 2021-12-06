import { Carro } from '../Carro'
import { Nav } from './styles'

export const Navbar = ({ cantidad, productos }) => {
    return (
        <Nav>
            <p>Logo</p>
            <Carro cantidad={cantidad} productos={productos} />
        </Nav>
    )
}