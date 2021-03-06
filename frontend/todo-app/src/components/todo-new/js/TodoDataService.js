import axios from "axios";

class TodoDataService {
  retrieveAllTodos(name) {
    return axios.get(`http://localhost:4201/users/${name}/todos`);
  }

  retrieveTodo(name,id) {
    return axios.get(`http://localhost:4201/users/${name}/todos/${id}`);
  }

  updateTodo(name,id,todo){
    return axios.put(`http://localhost:4201/users/${name}/todos/${id}`,todo)
  }

  deleteTodo(name,id){
    return axios.delete(`http://localhost:4201/users/${name}/todos/${id}`)
  }

  addTodo(name,todo){
    return axios.post(`http://localhost:4201/users/${name}/todos`,todo)
  }
}

export default new TodoDataService();
