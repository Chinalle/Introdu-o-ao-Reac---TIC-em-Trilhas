import { BrowserRouter } from 'react-router-dom'
import {Router} from './Router'
import { Cabecalho, Conteudo, RodaPe } from './components'
import { Inicial } from './pages'

import './App.css'
import { AppContextProvider } from './contexts'

const App = () => {

  return (
    <AppContextProvider>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </AppContextProvider>
    // <>
      // {/* <h1>Hello World</h1> */}
      // {/* Importando o cabecalho */}
      // {/* Passando o valor da propriedade nomeUsuario */}
      // {/* <Cabecalho nomeUsuario="Joana"/>
      // <Conteudo>
      //   <Inicial/>
      //   <h1>Titulo</h1>
      //   <p>Texto, Texto, Texto</p>
      // </Conteudo>
      // <footer><RodaPe criadorProjeto="Octavio"/></footer> */}
    //</>
          
  )
}

export { App }
