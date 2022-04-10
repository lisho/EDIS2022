import { Box } from "@chakra-ui/react";

const MensajeError = ({ children }) => {
  return (
    <Box color="red">
        {children}
    </Box>
  );
}

export default MensajeError;