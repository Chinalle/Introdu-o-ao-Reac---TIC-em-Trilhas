//Importanto o estilo
import style from './Cabecalho.module.css'

import { Link } from 'react-router-dom'

//props -> propriedade
const Cabecalho = (props) => {
    //const { nomeUsuario } = props
    return(
        <div className={style.Cabecalho}>
            <Link to="/">
                <h1>
                    <span>ToDo </span>
                    List
                </h1>
            </Link>
            
            {/* <h1><span>ToDo </span>List</h1> */}
            {/* Adicionando a propriedade nome usuario no HTML FIXO */}
            {/* Bem vindo, {nomeUsuario} */}
            <Link to="/sobre-nos">SobreNós</Link>
        </div>
    )
}
// Exportando o Cabecalho para o arquivo app
// O sufixo default é uma palavra chave que significa que vai
// exportar por padrão o componente Cabecalho

//export default Cabecalho

// export nomeado
export { Cabecalho }