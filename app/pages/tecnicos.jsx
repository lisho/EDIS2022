import {
  List,
  ListItem,
  Button,
  Heading,
  useDisclosure,
  Text,
  Grid,
  GridItem,
  Flex
} from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import useIsMounted from "react-is-mounted-hook";
import { usePaginaActivaContext } from "../components/contextos/PaginaActivaProvider";

import crearNuevoElementoEnBd from "../helpers/crearNuevoElementoEnBD";
import editarElementoEnBd from "../helpers/editarElementoEnBD";
import borrarElementoEnBd from "../helpers/borrarElementoEnBD";

import FormularioTecnico from "../components/formularios/FormularioTecnico";
import Tecnico from "../components/TecnicoItem";
import { Icon, AddIcon } from "@chakra-ui/icons";

const valoresIniciales = {
  id: null,
  nombre: "",
  categoria: "",
  denominacionT: "",
  telefono: "",
  email: "",
  equipoEdis: "",
  createdAt: "",
  updatedAt: "",
  foto: "",
};

/**
 * Objeto de configuración del componente
 * Modificar los datos para PAGE diferente.
 */

const componetConfig = {
  url: "http://0.0.0.0:3033/api/tecnicos/",
  botonNav: "Tecnicos",
  titulo: "Técnicos EDIS",
  tituloLista: "Listado de todos los técnicos registrados",
  botonNuevo: "Nuevo Técnico"
}

const Tecnicos = () => {
  const [elementos, setElementos] = useState([]); // Array de todas las tareas
  const [elementoParaEditar, setElementoParaEditar] = useState(null); // Se llena cuando hay una tarea para editar

  const { isOpen, onOpen, onClose } = useDisclosure(); // Manejador del modal
  const [formValues, setFormValues] = useState(valoresIniciales);
  const isMounted = useIsMounted();
  const { setBotonActivado } = usePaginaActivaContext();
                            
  useEffect(() => {
    isMounted && setBotonActivado(componetConfig.botonNav);
  }, [isMounted]);

  useEffect(() => {
    fetch(componetConfig.url)
      .then((response) => response.json())
      .then((data) => {
        setElementos(data);
        console.log(data);
      });
  }, []);

  /* Función para AÑADIR una nuevo elemento
   ** @ param: Objeto elemento
   ** Añade el id, vuelve a crear el array elementos incluyendo la nuevo elemento,
   ** actualiza el estado elementos y cierra el modal
   */

  const handleAdd = (elemento) => {
    const nuevoElemento = {
      ...elemento,
    };

    console.log(nuevoElemento);
    
    crearNuevoElementoEnBd(
      componetConfig.url,
      nuevoElemento,
      setElementos,
      elementos
    );
    onClose();
  };

  /* Función para EDITAR una tarea
   ** @ param: Objeto tarea editada
   ** Mapea el array de tareas y comprueba si coincide el id de la tarea editada
   ** si el id coincide devuelve la tareaeditada y si no deja la tarea que ya existe.
   ** Actualiza el estado de las tareas con las tareasCambiadas,
   ** cambia el estado de tareaParaEditar a null y cierra el modal.
   */

  const handleEditar = (elementoEditado) => {
    /*  const tareasCambiadas = tareas.map((tarea) =>
      tarea.id === elementoEditado.id ? elementoEditado : tarea
    );  */
    /* console.log("elementoEditado", elementoEditado); */
    editarElementoEnBd(
      componetConfig.url + elementoEditado.id,
      elementoEditado,
      setElementos
    );

    /* setElementos(tecnicosCambiadas); */
    setElementoParaEditar(null);
    onClose();
  };

  const handleBorrar = (elementoParaBorrar) => {
    borrarElementoEnBd(
      componetConfig.url + elementoParaBorrar.id,
      setElementos
    );
  };

  const abrirModal = () => {
    setFormValues(valoresIniciales);
    onOpen();
  };

  return (
    <>
      <Heading as="h1" m="15px" size="xl">
        {componetConfig.titulo}
      </Heading>
      <Button
        p="10px"
        ml="10px"
        bg="teal.400"
        color="white"
        onClick={() => abrirModal()}
      >
        <Icon as={AddIcon} fontSize="xl" color="white" />
        <Text ml={5} display="flex">
          {componetConfig.botonNuevo}
        </Text>
      </Button>
      <Heading as="h3" m="15px" size="md" textAlign="center">
        {componetConfig.tituloLista}
      </Heading>

      <Flex justifyContent="center" flexWrap="wrap" maxWidth="80%">
        {console.log(elementos)}
        {elementos.map((elemento) => (

            <Flex key={elemento?.id}>
                <Tecnico
                    usuario={elemento}
                    usuarios={elementos}
                    usuarioParaEditar={elementoParaEditar}
                    setUsuarioParaEditar={setElementoParaEditar}
                    handleBorrar={handleBorrar}
                    onOpen={onOpen}
                />
           </Flex>

          /* <ListItem key={elemento?.id}>
            
          </ListItem> */

        ))}
        </Flex>
      <FormularioTecnico
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        handleAdd={handleAdd}
        handleEditar={handleEditar}
        usuarioParaEditar={elementoParaEditar}
        setUsuarioParaEditar={setElementoParaEditar}
        valoresIniciales={valoresIniciales}
        formValues={formValues}
        setFormValues={setFormValues}
      />
    </>
  );
};

export default Tecnicos;
