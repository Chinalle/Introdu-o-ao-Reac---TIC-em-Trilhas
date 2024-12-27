import { FormCriarTarefa, ListaTarefas } from "../../components"
import {useAppContext} from '../../hooks'

import style from './Inicial.module.css'
const Inicial = () => {
    const {Tarefas} = useAppContext()

    return(
        <div className={style.Inicial}>
            <FormCriarTarefa/>
            <ListaTarefas/>
        </div>
    )

}

export {Inicial}