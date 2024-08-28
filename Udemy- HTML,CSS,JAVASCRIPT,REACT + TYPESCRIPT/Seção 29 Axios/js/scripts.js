// 1 - instalando o axios
console.log(axios);

// 2 - primeiro request
const getData = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users",
      //   4 - definindo headers
      //   Ver request headers
      {
        headers: {
          "content-type": "application/json",
          teste: "header",
        },
      }
    );

    console.log(response);

    return response.data;
  } catch (error) {
    console.log(error.response);
  }
};

getData();

// 3 - imprimindo dados na tela
const container = document.querySelector("#user-container");

const printData = async () => {
    const data = await getData();

    data.forEach((user) => {
        const div = document.createElement("div");
        const nameElement = document.createElement("h2");
        nameElement.textContent = user.name;

        div.appendChild(nameElement);

        const emailElement = document.createElement("p");
        emailElement.textContent = user.email;
        
        div.appendChild(emailElement);
        
        container.appendChild(div);
    })
}
printData();