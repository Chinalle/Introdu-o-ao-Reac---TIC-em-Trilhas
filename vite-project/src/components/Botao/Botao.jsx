import style from './Botao.module.css'
import {TIPO_BOTAO} from './constants'
const Botao = (props) => {
    const {texto, tipo = TIPO_BOTAO.PRIMARIO, ...outrasProps} = props
    return(
        <button 
        tipo={tipo} 
        className={style.Botao} 
        {...outrasProps}>
            {texto}
        </button>
    )
}

export {Botao}

