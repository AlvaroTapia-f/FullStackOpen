import axios from "axios";
const baseUrl = '/api/notes'; //Lo declaramos así gracias a que tenemos integrado el frontend con el backend.

const getAll = () => {
    const request = axios.get(baseUrl);
    const nonExisting = {
        id: 10000,
        content: 'This note is not saved to server',
        important: true,
    } // This is a fake note that will be added to the list of notes
      // This is done to demonstrate how to handle errors when a note is deleted from the server
    return request.then(response => response.data.concat(nonExisting));
}

const create = (newObject) => {
    const request = axios.post(baseUrl, newObject);
    return request.then(response => response.data);
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject);
    return request.then(response => response.data);
}

export default { getAll, create, update };