import { ListaTarefasItem } from "./ListaTarefasItem"

import style from './ListaTarefas.module.css'
import { useAppContext } from "../../hooks"
import { Loading } from "../Loading"


const ListaTarefas = (props) => {
    const {Tarefas, loadingCarregar} = useAppContext()
    return(
        <ul className={style.ListarTarefas}>
            {loadingCarregar &&(
                <p>
                    Carregando... 
                    <Loading/>
                </p>
            )}
            {!loadingCarregar && !Tarefas.length &&(
                <p>Não há tarefas cadastradas</p>
            )}
            {Tarefas.map(item => (
                <ListaTarefasItem 
                    key={item.id} 
                    id={item.id} 
                    nome={item.nome}
                />
                ))}

        </ul>
    )
}

export {ListaTarefas}