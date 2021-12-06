import { useEffect, useState } from 'react'
import { Burbuja } from '../Burbuja'

//import styles from './estilos'
import { CarroContenedor, Carrito, ListaArticulos, Ul, Li, DeleteButton } from './styles'

export const Carro = ({ cantidad, productos }) => {
    
    const [mostrarCarro, setMostrarCarro] = useState(false)

    const [renderizar, setRenderizar] = useState(false)
    const [datos, setDatos] = useState(productos)

    
    let subTotal = productos.reduce((acum, prod) => (prod.cantidad * prod.precio) + acum, 0)
    let impto = subTotal * 0.15
    let totalPagar = subTotal + impto

    useEffect(() => {

    }, [renderizar])

    const handleBorrarProduct = (x) =>{

        productos.map((prod, index, obj) => {
            
            if(prod.id === x.id){
                obj.splice(index, 1)
                alert('Confirmar') //Recordatorio: Agregar la confirmación

            }
            return prod
        })
        setRenderizar(!renderizar)
    }

    const handleMostrarCarro = _ => setMostrarCarro(!mostrarCarro)

    return (
        <CarroContenedor>
            {cantidad > 0 && <Burbuja cantidad={cantidad} />}
            <Carrito onClick={handleMostrarCarro}>
                Carro
            </Carrito>
            {
                (cantidad > 0 && mostrarCarro) && 
                <ListaArticulos>
                        <Ul>
                            {
                                productos.map(x => {
                                    return (
                                        <Li>
                                            <img height={25} alt={x.nombre} src={x.imagen} />
                                            
                                            <span><DeleteButton  onClick={() => handleBorrarProduct(x)} >X</DeleteButton> {x.nombre}</span>
                                            
                                            <span>
                                                ({x.cantidad} x {x.precio.toLocaleString()}) = <strong>{(x.cantidad * x.precio).toLocaleString()}</strong>
                                            </span>
                                        </Li>
                                    )
                                })
                            }
                            <Li>
                                <strong>Sub total</strong>
                                <strong>{subTotal.toLocaleString()}</strong>
                            </Li>
                            <Li>
                                <strong>Impuesto</strong>
                                <strong>{impto.toLocaleString()}</strong>
                            </Li>
                            <Li>
                                <strong>Total a pagar</strong>
                                <strong>{totalPagar.toLocaleString()}</strong>
                            </Li>
                        </Ul>
                </ListaArticulos>
                    
            }
        </CarroContenedor>

    )
}