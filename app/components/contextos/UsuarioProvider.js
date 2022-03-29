import { createContext, useState, useContext } from "react";

/* Creamos un contexto para manejar la pagina que está activa */
const UsuarioContext = createContext();

/* Creamos un Hook personalizado para manejar el contexto */
const useUsuarioContext = () => {
    return useContext(UsuarioContext)
}

/* Creamos el provider incluyendo ya el context.provider */
const UsuarioProvider = ({children}) => {
    
    /* Creamos el estado con el que vamos a manejar la página que está activa */
    const [isLogged, setIsLogged] = useState(null)

    return (
        <UsuarioContext.Provider value={{isLogged, setIsLogged}}>
            {children}
        </UsuarioContext.Provider>
    )
}

/* Exportamos el provider y el contexto */
export {UsuarioProvider, useUsuarioContext}
