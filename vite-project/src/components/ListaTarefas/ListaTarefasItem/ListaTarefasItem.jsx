import { useState } from 'react'
import { useAppContext } from '../../../hooks'
import { Botao, TIPO_BOTAO, CampoTexto, Loading } from '../../../components'
import style from './ListaTarefasItem.module.css'


const ListaTarefasItem = (props) => {
    const {id, nome} = props

    const [estaEditando, setEstaEditando] = useState(false)

    const {loadingEditar, loadingDeletar, editarTarefa, removerTarefa} = useAppContext()

    const onBlurTarefa = (event) =>{
        const nomeTarefa = event.currentTarget.value
        editarTarefa(id, nomeTarefa)
        setEstaEditando(false)
    }

    const loadingestaEditando = loadingEditar == id
    const loadingestaDeletando = loadingDeletar == id

    return(
        <li className={style.ListaTarefasItem}>
            {(loadingestaEditando || estaEditando) && (
                <CampoTexto
                defaultValue={nome}
                onBlur={() => onBlurTarefa}
                autoFocus
                />
            )}
            {!loadingestaEditando && !estaEditando && (
                <span onDoubleClick={() => setEstaEditando(true)}>{nome}</span>
            )}

            {loadingestaEditando &&(
                <Loading/>
            )}

            <Botao 
            texto={loadingestaDeletando ? <Loading/>: '-'}
            tipo={TIPO_BOTAO.SECUNDARIO}
            onClick={() => removerTarefa(id)}
            />
        </li>
    )
}

export {ListaTarefasItem}
