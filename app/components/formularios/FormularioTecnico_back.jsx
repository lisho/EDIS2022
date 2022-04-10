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
  useOutsideClick,
  FormHelperText,
  FormErrorMessage,

} from "@chakra-ui/react";

const FormularioTecnico = ({
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
  const { nombre, categoria, denominacionT, telefono, email, equipoEdis, foto} = formValues;
  const isError = email == '' ;

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
            {usuarioParaEditar ? "Editar Técnico" : "Crear nuevo técnico"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl isRequired>
              <FormLabel>Nombre y apellidos</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Nombre y apellidos"
                value={nombre}
                name="nombre"
                onChange={(e) => handleInputChange(e)}
                
              />
            </FormControl>

            <FormControl>
              <FormLabel>Perfil profesional</FormLabel>
              <Input
                
                placeholder="Perfil profesional"
                value={categoria}
                name="categoria"
                onChange={(e) => handleInputChange(e)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Código de Técnico</FormLabel>
              <Input
                
                placeholder="Código de Técnico"
                value={denominacionT}
                name="denominacionT"
                onChange={(e) => handleInputChange(e)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Telefono</FormLabel>
              <Input
                
                placeholder="Telefono"
                value={telefono}
                name="telefono"
                onChange={(e) => handleInputChange(e)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                
                placeholder="Email"
                type='email'
                value={email}
                name="email"
                onChange={(e) => handleInputChange(e)}
              />
              {!isError ? (
                <FormHelperText>
                  Nunca compartiremos tu email.
                </FormHelperText>
              ) : (
                <FormErrorMessage>Es necesario un email.</FormErrorMessage>
              )}
            </FormControl>

            <FormControl>
              <FormLabel>Equipo EDIS</FormLabel>
              <Input
                
                placeholder="Equipo EDIS"
                value={equipoEdis}
                name="equipoEdis"
                onChange={(e) => handleInputChange(e)}
              />
            </FormControl>

            {/* <FormControl>
              <FormLabel>Foto</FormLabel>
              <Input
                
                placeholder="Foto"
                value={foto}
                name="foto"
                onChange={(e) => handleInputChange(e)}
              />
            </FormControl> */}

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

export default FormularioTecnico;
