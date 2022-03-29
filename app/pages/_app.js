import { ChakraProvider, extendTheme } from "@chakra-ui/react";
/* import DefaultLayout from "../layouts/DefaultLayout"; */
import "@fontsource/roboto";
import "@fontsource/montserrat";
import "@fontsource/inter";

const theme = extendTheme({
  fonts: {
    heading: "Montserrat",
    body: "Inter",
  },
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
})


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider  theme={theme} >
        {/* <DefaultLayout> */}
          <Component {...pageProps} />
        {/* </DefaultLayout> */}
      </ChakraProvider>
  )
}

export default MyApp
