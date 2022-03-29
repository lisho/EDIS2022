import Head from "next/head";
import styles from "../styles/Home.module.css";
import DrawerSidebar from "../components/sidebar/DrawerSidebar.jsx";
/* import tamVentana from "../helpers/tamVentana";
import { useEffect, useState } from "react"; */
import { PaginaActivaProvider } from "../components/contextos/PaginaActivaProvider";
import { UsuarioProvider } from "../components/contextos/UsuarioProvider";
import FooterPrincipal from "../components/FooterPrincipal";

function DefaultLayout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>App de Tareas</title>
        <meta
          name="description"
          content="Aplicacion para la gestión del trabajo EMMAS"
        />
        <title>Gestion EMMAS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <UsuarioProvider>
        <PaginaActivaProvider>
          <DrawerSidebar />

          <main id="main" className={styles.main}>
            {children}
          </main>

          <footer className={styles.footer}>
            <FooterPrincipal />
          </footer>
          
        </PaginaActivaProvider>
      </UsuarioProvider>
    </div>
  );
}

export default DefaultLayout;
