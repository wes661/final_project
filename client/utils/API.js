import axios from "axios";

//Functions to hit API routes and return data

export default {
  function1: function() {
    return axios.get("/api");
  },

  function2: function(id) {
    return axios.get("/api");
  },

  function3: function(id) {
    return axios.delete("/api");
  },

  function4: function(bookData) {
    return axios.post("/api");
  }
};
