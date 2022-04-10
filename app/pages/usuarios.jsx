import {
  List,
  ListItem,
  Button,
  Heading,
  useDisclosure,
  Text,
  Grid,
  GridItem,
  Flex,
} from "@chakra-ui/react";
import { useEffect, useState, useContext } from "react";
import useIsMounted from "react-is-mounted-hook";
import { usePaginaActivaContext } from "../components/contextos/PaginaActivaProvider";

import crearNuevoElementoEnBd from "../helpers/crearNuevoElementoEnBD";
import editarElementoEnBd from "../helpers/editarElementoEnBD";
import borrarElementoEnBd from "../helpers/borrarElementoEnBD";

import FormularioUsuario from "../components/formularios/FormularioUsuario";
import UserItem from "../components/UserItem";
import { Icon, AddIcon } from "@chakra-ui/icons";

const valoresIniciales = {
  id: null,
  username: "",
  password: "",
  rol: "",
  avatar: "",
  tecnicoId: "",
};

/**
 * Objeto de configuración del componente
 * Modificar los datos para PAGE diferente.
 */

const componetConfig = {
  url: "http://0.0.0.0:3033/api/users/",
  botonNav: "Usuarios",
  titulo: "Usuarios",
  tituloLista: "Listado de todos los usuarios registrados",
  botonNuevo: "Nuevo Usuario",
};

const Users = () => {
  const [usuarios, setUsuarios] = useState([]); // Array de todos los usuarios
  const [usuarioParaEditar, setUsuarioParaEditar] = useState(null); // Se llena cuando hay una tarea para editar

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
        setUsuarios(data);
        console.log("Listado recibido: ", data);
      });
  }, []);

  /* Función para AÑADIR una nuevo usuario
   ** @ param: Objeto usuario
   ** Añade el id, vuelve a crear el array usuarios incluyendo la nuevo usuario,
   ** actualiza el estado usuarios y cierra el modal
   */

  const handleAdd = (usuario) => {
    const nuevoUsuario = {
      ...usuario,
    };

    console.log(nuevoUsuario);

    crearNuevoElementoEnBd(
      componetConfig.url + "/registro",
      nuevoUsuario,
      setUsuarios,
      usuarios
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

  const handleEditar = (usuarioEditado) => {
    /*  const tareasCambiadas = tareas.map((tarea) =>
      tarea.id === usuarioEditado.id ? usuarioEditado : tarea
    );  */

    editarElementoEnBd(
      componetConfig.url + usuarioEditado.id,
      usuarioEditado,
      setUsuarios
    );

    /* setUsuarios(usuariosCambiadas); */
    setUsuarioParaEditar(null);
    onClose();
  };

  const handleBorrar = (usuarioParaBorrar) => {
    borrarElementoEnBd( componetConfig.url + usuarioParaBorrar.id, setUsuarios);
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
        {console.log(usuarios)}
        {usuarios.map((usuario) => (
          
          <Flex key={usuario?.id}>
            <UserItem
              usuario={usuario}
              usuarios={usuarios}
              usuarioParaEditar={usuarioParaEditar}
              setUsuarioParaEditar={setUsuarioParaEditar}
              handleBorrar={handleBorrar}
              onOpen={onOpen}
            />
          </Flex>

          /* <ListItem key={usuario?.id}>
            
          </ListItem> */
        ))}
      </Flex>
      <FormularioUsuario
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        handleAdd={handleAdd}
        handleEditar={handleEditar}
        usuarioParaEditar={usuarioParaEditar}
        setUsuarioParaEditar={setUsuarioParaEditar}
        valoresIniciales={valoresIniciales}
        formValues={formValues}
        setFormValues={setFormValues}
      />
    </>
  );
};

export default Users;
