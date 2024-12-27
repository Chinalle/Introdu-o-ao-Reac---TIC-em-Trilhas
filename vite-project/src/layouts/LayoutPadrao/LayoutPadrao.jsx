import { Outlet } from "react-router-dom"
import { Cabecalho, Conteudo, RodaPe } from "../../components"
import { useAppContext } from "../../hooks"


const LayoutPadrao = () => {
    const {criadorProjeto} = useAppContext()
    return(
        <>
        <Cabecalho nomeUsuario="Joana"/>
        <Conteudo>
            <Outlet/>
            {/* <Inicial/> */}
        </Conteudo>
        <RodaPe criadorProjeto={criadorProjeto}/>
        </>
    )
}

export{LayoutPadrao}