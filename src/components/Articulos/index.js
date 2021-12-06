import { Articulo } from "../Articulo";
import {useRef, useEffect, useState } from 'react';
//import styles from './estilos'
import { UseContext } from "../Contextcreate";
import {Container, Search} from './styles'


export const Articulos = (props) => {
    const agregarAlCarro = props.agregarAlCarro


    const [productos, setProductos] = useState(props.data.articulos)
    
    const searchP = useRef(null)

    useEffect(()=>{
        
    }, [productos])

    const handleSearch = () => {
        let busquedaProducto = searchP.current.value
        let product = [...productos].find((prod) => prod.nombre === busquedaProducto)
        if(!product){
            alert("No se encontró producto")
            setProductos([...props.data.articulos])
            return
        }
        setProductos([product])
    }

    return (
        <Search>
            <input type={"search"} name='buscador' ref={searchP}/>
            <button onClick={handleSearch}>Buscador </button>
                <Container>
                        
                        {
                            
                            productos.map(prod => 
                                // <Articulo nombre={prod.nombre} precio={prod.precio} imagen={prod.imagen} />
                                <Articulo key={prod.id} prod={prod} agregarAlCarro={agregarAlCarro} />
                            )
                        }
                </Container>
        </Search>
    )
}