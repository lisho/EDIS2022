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

  const { nombre, apellidos, dni, telefono, email, username, password, rol, foto} = formValues;

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
            {usuarioParaEditar ? "Editar usuario" : "Crear nuevo usuario"}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Nombre</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Nombre"
                value={nombre}
                name="nombre"
                onChange={(e) => handleInputChange(e)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Apellidos</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Apellidos"
                value={apellidos}
                name="apellidos"
                onChange={(e) => handleInputChange(e)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>DNI</FormLabel>
              <Input
                ref={initialRef}
                placeholder="DNI"
                value={dni}
                name="dni"
                onChange={(e) => handleInputChange(e)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Telefono</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Telefono"
                value={telefono}
                name="telefono"
                onChange={(e) => handleInputChange(e)}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Email"
                value={email}
                name="email"
                onChange={(e) => handleInputChange(e)}
              />
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
              <FormLabel>Foto</FormLabel>
              <Input
                ref={initialRef}
                placeholder="Foto"
                value={foto}
                name="foto"
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
