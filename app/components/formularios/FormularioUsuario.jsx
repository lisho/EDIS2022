import { useRef, useState, useEffect } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
  Select,
  useOutsideClick,
  FormHelperText,
} from "@chakra-ui/react";

const FormularioUsuario = ({
  isOpen,
  onOpen,
  onClose,
  handleAdd,
  handleEditar,
  usuarioParaEditar,
  setUsuarioParaEditar,
  formValues,
  setFormValues,
  valoresIniciales,
}) => {
  const initialRef = useRef();
  const [listaTecnicos, setListaTecnicos] = useState([]); // Array de todos los usuarios
  const { username, password, rol, avatar, tecnicoId } = formValues;

  /* Guardamos los técnicos para el select del formulario */
  useEffect(() => {
    fetch("http://0.0.0.0:3033/api/tecnicos/")
      .then((response) => response.json())
      .then((data) => {
        setListaTecnicos(data);
        console.log(data);
      });
  }, []);

  const handleInputChange = (e) => {
    const changedFormValues = {
      ...formValues,
      [e.target.name]: e.target.value,
    };
    setFormValues(changedFormValues);
  };

  const handleSubmit = () => {
    /* usuarioParaEditar 
? handleEditar(formValues)
: handleAdd (formValues); */
    if (usuarioParaEditar) {
      handleEditar(formValues);
    } else {
      /*console.log(formValues);*/
       handleAdd(formValues); 
    }
    console.log("Nueva tarea enviada...");
    setFormValues(valoresIniciales);
  };

  const handleCancelar = () => {
    setUsuarioParaEditar(null);
    setFormValues(valoresIniciales);
    onClose();
  };

  useEffect(() => {
    usuarioParaEditar && setFormValues(usuarioParaEditar);
    console.log("Tarea para editar...", usuarioParaEditar);
    console.log("Valores del formulario...", formValues);
  }, [usuarioParaEditar]);

  return (
    <>
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {usuarioParaEditar ? "Editar usuario" : "Crear nuevo usuario"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>
                Seleccniona la persona a la que quieres asignar un permiso de
                usuario
              </FormLabel>
              <Select 
                name="tecnicoId"
                placeholder={tecnicoId? listaTecnicos.find(tecnico => tecnico.id == tecnicoId).username : "Selecciona un tipo de etiqueta"}
                onChange={(e) => handleInputChange(e)}
              >
                {/* <option >Selecciona una persona</option> */}
                {listaTecnicos.map((tecnico) => (

                  <option key={tecnico.id} value={tecnico.id}>
                    {tecnico.nombre}
                  </option>
                ))}
              </Select>

             {/*  <Select
                placeholder={etiquetaTipo? etiquetaTipo.tipo : "Selecciona un tipo de etiqueta"}
                name="etiquetaTipoId"
                
                onChange={(e) => handleInputChange(e)}
              >
               { listaTiposEtiqueta.map(tipo => 
                  etiquetaTipo?.tipo != tipo.tipo &&
                  <option key={uuidv4()} value={tipo.id}>{tipo.tipo}</option>
                
                )}

              </Select> */}
            </FormControl>

            <FormControl>
              <FormLabel>Nombre de usuario</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Nombre de usuario"
                value={username}
                name="username"
                onChange={(e) => handleInputChange(e)}
              />
             
            </FormControl>

            <FormControl>
              <FormLabel>Contraseña</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Contraseña"
                value={password}
                name="password"
                onChange={(e) => handleInputChange(e)}
              />
              <FormHelperText>Usa una contraseña de al menos 6 caracteres</FormHelperText>
            </FormControl>

            <FormControl>
              <FormLabel>Rol</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Rol"
                value={rol}
                name="rol"
                onChange={(e) => handleInputChange(e)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Avatar</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Avatar"
                value={avatar}
                name="avatar"
                onChange={(e) => handleInputChange(e)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={() => handleSubmit()}>
              {usuarioParaEditar ? "Guardar cambios" : "Guardar"}
            </Button>
            <Button onClick={() => handleCancelar()}>Cancelar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default FormularioUsuario;
