// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
const infoUser = () => {
    return fetch("https://jsonplaceholder.typicode.com/users");
  };

const handleResponse = (response) => {
    return response.json();
  };
const dataUsers = (data) => {
    return console.log(data);
  }
const onFailure = (error) => {
    return console.log(error);
  }
infoUser().then(handleResponse)
          .then(dataUsers)
          .catch(onFailure);

const newUser =  data
.map((dataUsers) => {
  return dataUsers.name;
})
console.log(newUser);