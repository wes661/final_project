import axios from "axios";

//Functions to hit API routes and return data

export default {
  // getUsers: function() {
  //   return axios.get("/api/users");
  // },

  // function2: function(id) {
  //   return axios.get("/api");
  // },

  // function3: function(id) {
  //   return axios.delete("/api");
  // },

  // function4: function(bookData) {
  //   return axios.post("/api");
  // },
  login: function(email, pass) {
    return axios.post("/api/users/login", {
      email: email,
      password: pass
    });
  }
};
