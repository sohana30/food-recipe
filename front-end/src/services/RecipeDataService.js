import http from "../http-common";

class RecipeDataService {
  getAll() {
    return http.get("/recipes");
  }
  
  get(_id) {
    return http.get(`/recipes/${_id}`);
  }
  create(data) {
    return http.post("/recipes", data);
  }
  delete(_id) {
    return http.delete(`/recipes/${_id}`);
  }

  findByName(name) {
    return http.get(`/recipes?name=${name}`);
  }
}

export default new RecipeDataService();
