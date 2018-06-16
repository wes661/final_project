import axios from "axios";

export default {
  function1: function() {
    return axios.get("/api/");
  },

  function2: function(id) {
    return axios.get("/api");
  },

  function3: function(id) {
    return axios.delete("/api");
  },
  // Saves a book to the database
  function4: function(bookData) {
    return axios.post("/api");
  }
};
