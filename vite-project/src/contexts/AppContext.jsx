import {createContext, useEffect, useState } from "react";
import { api } from "../services";

// Usado para criar o contexto
export const AppContext = createContext({})

// Componente que vai passar o contexto para aplicação
export const AppContextProvider = (props) => {
    const {children} = props

    const [criadorProjeto, setCriadorProjeto] = useState('Octavio')
    const [Tarefas, setTarefas] = useState([])

    const [loadingCarregar, setLoadingCarregar] = useState(false)
    const [loadingCriar, setLoadingCriar] = useState(false)
    const [loadingEditar, setLoadingEditar] = useState(null)
    const [loadingDeletar, setLoadingDeletar] = useState(null)
    

    // Como essa função vai interagir com o back-end
    //O ideal é torna-la assincrona (async), já que vai ser necessário
    //espera uma resposta para carregar as tarefas
    const carregarTarefas = async () => {
        setLoadingCarregar(true)

        const {data = []} = await api.get('/Tarefas')

        setTarefas([
            ...data,
        ])
        setLoadingCarregar(false)
    }

        const adicionarTarefas = async (nomeTarefa) => {
            setLoadingCriar(true)
            const {data: Tarefa} = await api.post('/Tarefas',{
                nome: nomeTarefa,
            })
            setTarefas(estadoAtual => {
                
                return[
                    ...estadoAtual,
                    Tarefa,
                ]
            })
            setLoadingCriar(false)
        }

        const removerTarefa = async (idTarefa) => {
            setLoadingDeletar(idTarefa)
            await api.delete(`Tarefas/${idTarefa}`)
            setTarefas(estadoAtual => {
                const tarefasAtualizadas = estadoAtual.filter(Tarefas => Tarefas.id != idTarefa)
                return [
                    ...tarefasAtualizadas,
                ]
            })
            setLoadingDeletar(null)
        }

        const editarTarefa = async (idTarefa, nomeTarefa) => {
            setLoadingEditar(idTarefa)
            const {data: tarefaAtualizada } = await api.put(`Tarefas/${idTarefa}`, {
                nome: nomeTarefa,
            })

            setTarefas(estadoAtual => {
                const tarefasAtualizadas =  estadoAtual.map(Tarefa => {
                    return Tarefa.id == idTarefa ? {
                        ...Tarefa,
                        nome: tarefaAtualizada.nome,
                    } : Tarefa
                })

                return[
                    ...tarefasAtualizadas,
                ]


            })
            setLoadingEditar(null)
        }

    useEffect(() => {
        carregarTarefas()
    }, [])
        
    return(
        <AppContext.Provider value={{
            criadorProjeto,
            Tarefas,
            adicionarTarefas,
            removerTarefa,
            editarTarefa,
            loadingCarregar,
            loadingCriar,
            loadingEditar,
            loadingDeletar,
        }}>
            {children}
        </AppContext.Provider>
    )
}

