import { useRef, useState, useEffect } from "react";
import { ErrorMessage, Formik } from "formik";
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
  Select,
  Box,
  HStack,
  useRadioGroup,
} from "@chakra-ui/react";
import RadioCard from "./RadioCard";
import MensajeError from "./MensajeError";

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
  const {
    nombre,
    categoria,
    denominacionT,
    telefono,
    email,
    equipoEdis,
    foto,
  } = formValues;

  /*
   ** Lógica de radio buttons con la radioGroup
   ** https://chakra-ui.com/docs/components/form/radio#custom-radio-buttons
   **
   */
  const optionsDenominacionT = ["T1", "T2", "T3", "T4", "T5", "T6"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "denominacionT",
    defaultValue: denominacionT,
    onChange: (value) => {
      const changedFormValues = {
        ...formValues,
        denominacionT: value,
      };
      setFormValues(changedFormValues);
    },
  });

  const group = getRootProps();

  /*
   ** End Lógica de radio buttons
   */

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

        <Formik
          onSubmit={(valores) => {
            if (usuarioParaEditar) {
              handleEditar(valores);
              console.log("Tarea editada...", valores);
            } else {
              handleAdd(valores);
              console.log("Nuevo registro...", valores);
            }
          }}
          initialValues={formValues}
          validate={(values) => {
            let errors = {};
            /*  if (!nombre) {
              errors.nombre = "El nombre es obligatorio";
            }
            if (!categoria) {
              errors.categoria = "La categoria es obligatoria";
            }
            if (!denominacionT) {
              errors.denominacionT = "La denominacion es obligatoria";
            }
            if (!telefono) {
              errors.telefono = "El telefono es obligatorio";
            } */
            if (!values.email) {
              errors.email = "El email es obligatorio";
            }
            /*   if (!equipoEdis) {
              errors.equipoEdis = "El equipo es obligatorio";
            }
            if (!foto) {
              errors.foto = "La foto es obligatoria";
            } */
            return errors;
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            errors,
          }) => (
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
                    value={values.nombre}
                    name="nombre"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Perfil profesional</FormLabel>

                  <Select
                    placeholder={
                      categoria ? categoria : "Seleccione una opción"
                    }
                    name="categoria"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    {categoria != "Trabajador/a Social" && (
                      <option value="Trabajador/a Social">
                        Trabajador/a Social
                      </option>
                    )}
                    {categoria != "Psicólogo/a" && (
                      <option value="Psicólogo/a">Psicólogo/a</option>
                    )}
                    {categoria != "Asesor/a Legal" && (
                      <option value="Asesor/a Legal">Asesor/a Legal</option>
                    )}
                    {categoria != "Experto/a Inmigración" && (
                      <option value="Experto/a Inmigración">
                        Experto/a Inmigración
                      </option>
                    )}
                  </Select>
                </FormControl>

                <FormControl>
                  <FormLabel>Código de Técnico</FormLabel>

                  <HStack
                    {...group}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    {optionsDenominacionT.map((value) => {
                      const radio = getRadioProps({ value });
                      radio.isChecked = value === denominacionT;
                      return (
                        <RadioCard key={value} {...radio}>
                          {value}
                        </RadioCard>
                      );
                    })}
                  </HStack>
                </FormControl>

                <FormControl>
                  <FormLabel>Telefono</FormLabel>
                  <Input
                    placeholder="Telefono"
                    value={values.telefono}
                    name="telefono"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FormControl>

                <FormControl >
                  <FormLabel>Email</FormLabel>
                  <Input
                    placeholder="Email"
                    type="email"
                    value={values.email}
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <ErrorMessage name="email" component={MensajeError} />

                </FormControl>

                <FormControl>
                  <FormLabel>Equipo EDIS</FormLabel>
                  <Input
                    placeholder="Equipo EDIS"
                    value={values.equipoEdis}
                    name="equipoEdis"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </FormControl>
              </ModalBody>

              <ModalFooter>
                <Button
                  colorScheme="blue"
                  mr={3}
                  /* onClick={() => handleSubmit()} */
                  onClick={handleSubmit}
                >
                  {usuarioParaEditar ? "Guardar cambios" : "Guardar"}
                </Button>
                <Button onClick={() => handleCancelar()}>Cancelar</Button>
              </ModalFooter>
            </ModalContent>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default FormularioTecnico;
