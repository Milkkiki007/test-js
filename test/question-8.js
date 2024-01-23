// Question #8: Fetching User List from Server
let newUsers = [];

const getData = () => {
    return fetch("https://jsonplaceholder.typicode.com/users");
  };
  
const handleResponse = (response) => {
    return response.json();
  };

const onSuccess = (data) => {
    for (let i=0 ; i<data.length ; i++){
        newUsers.push(data[i].name)
    }
    return console.log(newUsers);
  }

getData().then(handleResponse)
         .then(onSuccess)