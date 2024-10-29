// 1 - tipo de objeto para funcão interface

interface Product {
  name: string;
  price: number;
  isAvailable: boolean;
}

function showProductDetails(product: Product) {
  console.log(
    `O nome do produto é ${product.name} e o preço é ${product.price}`
  );
}

const shirt: Product = {
  name: "Camisa",
  price: 29.9,
  isAvailable: true,
};

showProductDetails(shirt);

// 2 - propriedade opcional em interface

interface User {
  email: string;
  role?: string;
}

function showUserDetails(user: User) {
  console.log(`O email do usuário é ${user.email}`);

  if(user.role) {
    console.log(`A função do usuário é ${user.role}`);
  }
}

const johnDoe: User = {
  email: "3b5wA@example.com",
    role: 'admin',
};
const berg: User = {
  email: "3b5wA@example.com",
};

showUserDetails(johnDoe);
showUserDetails(berg);
