(()=> {
  const Login = (data: {Email: string, Password: number}) => { // Con data se define un objeto que tiene las caracteristicas colocadas dentro del mismo, de esta forma se pueden retornar objetos a las funciones.
    console.log(data.Email, data.Password);
  }

  Login({
    Email: "example@example.com",
    Password: 123456789,
  });

  // Se puede modular el codigo para reutilizarlo de forma mas sencilla y poder modificarlo desde sus propiedades sin tener que modificarlo desde una funcion o parte del codigo en especifico.
  type Sizes = "S" | "M" | "L" | "XL";
  type Product = {
    Tittle: string,
    CreatedAt: Date,
    Stock: number,
    Size?: Sizes,
  };

  const Products: Product[] = []; // Si se define que solo se puede colocar Product, TS interpreta que debe contener solamente los valores definidos anteriormente en el Product definido. Al final cuando se realiza un push de valores, si se incorpora uno distinto arrojaria error.

  const AddProduct = (data: Product) => {
    Products.push(data);
  }

  AddProduct({
    Tittle: "Prop1",
    CreatedAt: new Date(1993,1,1),
    Stock: 100,
    Size: "L"
  });

  console.log(Products);
  // Products.push(12); Arrojaria un error por no cumplir con el tipo especificado.
  Products.push({
    Tittle: "Prop3",
    CreatedAt: new Date(1992,1,1),
    Stock: 12,
    Size: "XL",
});

})();
