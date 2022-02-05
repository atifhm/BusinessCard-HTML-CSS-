// posturl = "http://dummy.restapiexample.com/api/v1/create";
posturl = "https://jsonplaceholder.typicode.com/posts";

// fetch("https://api.github.com/users")
data1 = {
  userId: "1",
  id: "101",
  title: "lksajflkjaslkdfjlkasjfas",
  body: "23k2kjsdlkfjsdf",
};
params = {
  method: "post",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data1),
};

fetch(posturl, params)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((e) => {});

// // https://jsonplaceholder.typicode.com/posts

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
