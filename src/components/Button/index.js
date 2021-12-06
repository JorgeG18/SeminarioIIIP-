//import styles from './estilos'
import { Buttons } from './styles'

export const Button = ({children, agregarAlCarro, prod}) => {
    return (
        <Buttons onClick={() => agregarAlCarro(prod)}>{children}</Buttons>
    )
}
