const API_URL = 'https://pokeapi.co/api/v2/pokemon'; //  La API que queremos consumir
 
// Hace un request de un json
function parseResponse(response) {
  return response.json();
}

// Verifica que el status sea en el rango de los 200´s ( que todo esta bien ) para mandar 
// una respuesta , si no, mando el error y lo imprimo en consola ( solo se hace en desarrollo)
function checkResponse(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(`Fetch error: ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  throw error;
}

function handleError(error) {
  console.log(error);
  return [];
}

// recibe un query y lo añade a la API
function getData(query) {
  return fetch(`${API_URL}/${query}`).then(checkResponse).then(parseResponse).catch(handleError);
}

export {
  getData,
};