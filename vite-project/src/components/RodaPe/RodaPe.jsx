//Importanto o estilo
import style from './RodaPe.module.css'

//props -> propriedade
const RodaPe = (props) => {
    const { criadorProjeto } = props
    const anoAtual = (new Date()).getFullYear()
    return(
        <div className={style.RodaPe}>
            <p>React Básico - {anoAtual} - {criadorProjeto}</p>
        </div>
    )
}

export { RodaPe }