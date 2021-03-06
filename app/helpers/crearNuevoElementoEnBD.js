/*
 ** Función que crea un nuevo elemento en la base de datos
 ** Recibe:  url : STRING con la url de la api contra la que enviamos el post
 **          data: OBJETO formateado con os campos a rellenar en la base de datos
 **          setEstado: Fonción que nos permite cambiar el estado del listado de objetos en el fron al que añadimos el nuevo
 **          estado: estado del listado de elementos en el fron antes de añadir el nuevo objeto
 **
 ** Manda los datos por POST, recive los datos en res una vez insertados, los formatea en response y actualiza el estado de la lista
 */

const crearNuevoElementoEnBd = (url, data, setEstado, estado) => {
  fetch(url, {
    method: "POST", // or 'PUT'
    body: JSON.stringify(data), // data can be `string` or {object}!
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => 
      setEstado([response, ...estado]) );
};

export default crearNuevoElementoEnBd;
