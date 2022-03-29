import { createContext, useState, useContext } from "react";

/* Creamos un contexto para manejar la pagina que está activa */
const PaginaActivaContext = createContext();

/* Creamos un Hook personalizado para manejar el contexto */
const usePaginaActivaContext = () => {
    return useContext(PaginaActivaContext)
}

/* Creamos el provider incluyendo ya el context.provider */
const PaginaActivaProvider = ({children}) => {
    
    /* Creamos el estado con el que vamos a manejar la página que está activa */
    const [botonActivado, setBotonActivado] = useState("Home")

    return (
        <PaginaActivaContext.Provider value={{botonActivado ,setBotonActivado}}>
            {children}
        </PaginaActivaContext.Provider>
    )
}

/* Exportamos el provider y el contexto */
export {PaginaActivaProvider, usePaginaActivaContext}
