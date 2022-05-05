(()=> {
  enum UniqueProducts {
    Price = 100, // se enumera con lo que se le define seguido del operador de igualdad. En este caso si se llama al enum UniqueProducts[100], daria como resultado Price.
    Size = 101,
    Stock,
  }

  enum UniqueProducts {
    CreatedAt = "ARG",
    ID = 104,
  }

  const Product1: UniqueProducts = UniqueProducts.Price;
  const Product2: UniqueProducts = UniqueProducts.CreatedAt;

  console.log(Product1, Product2, UniqueProducts["Price"]);

  // Por lo general los enums son colocados en mayusculas, ya que son utilizados como constantes.
})();
