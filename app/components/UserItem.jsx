import {
  Box,
  Image,
  Badge,
  StarIcon,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";

const UserItem = ({
  usuario,
  usuarios,
  setUsuarios,
  setUsuarioParaEditar,
  handleBorrar,
  onOpen,
}) => {

  console.log("usuario para spread: ", usuario)
  const {
    username,
    password,
    rol,
    avatar,
    tecnico
  } = usuario;

  const handleEditar = (usuario) => {
    console.log(`editar usuario ${usuario.id}`);
    setUsuarioParaEditar(usuario);
    onOpen();
  };

  return (
    <Flex
      w="300px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      m="10px"
      boxShadow="2px 2px 3px rgba(0, 0, 0, 0.2)"
    >
      <Box>
      <Image
        src="https://fotofigaredo.files.wordpress.com/2015/01/foto-carnet-currc3adculum.jpg?w=225&h=300"
        alt=""
        m="10px"
        w="80px"
        overflow="hidden"
        border="1px solid rgba(0,0,0,.2)"
      />
      <Text>
        {username}
      </Text>
      </Box>
      <Box p="6" w="220px">
        <Box d="flex" alignItems="center">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            {rol}
          </Badge>
        </Box>

        <Text
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {username}
        </Text>
        <Text
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {password}
        </Text>

        <Box>{tecnico.nombre}</Box>
        <Box
          color="gray.500"
          fontWeight="semibold"
          letterSpacing="wide"
          fontSize="xs"
          textTransform="uppercase"
          ml="2"
        >
          {/* email */}
        </Box>

        <Button
          colorScheme="teal"
          size="sm"
          m="2px"
          onClick={() => handleEditar(usuario)}
        >
          Editar
        </Button>

        <Button
          colorScheme="orange"
          size="sm"
          m="2px"
          onClick={() => handleBorrar(usuario)}
        >
          Borrar
        </Button>
      </Box>
    </Flex>
  );
};

export default UserItem;
