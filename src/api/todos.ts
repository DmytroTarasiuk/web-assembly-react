import axios from "axios";

const apiUrl = "https://jsonplaceholder.typicode.com";

const Todos = {
  getTodos: () => {
    return axios.get(`${apiUrl}/todos`);
  },
};

export default Todos;
