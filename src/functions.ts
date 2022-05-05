(()=> {
  type Sizes = "S" | "M" | "L" | "XL";

  function CreateProductJson(
    Tittle: string,
    CreatedAt: Date,
    Stock: number,
    Size: Sizes
  ) {
    return {
      Tittle,
      CreatedAt,
      Stock,
      Size
    }
  }
  const Producto1 = CreateProductJson("P1", new Date(), 12, "XL");
  console.log(Producto1.Size) // al retornar un objeto, el tipado de TS ayuda sugiriendo las keys de los objetos para que sean retornados.

  // Para arrow functions

  const CreateProductJson2 = (
    Tittle: string,
    CreatedAt: Date,
    Stock: number,
    Size?: Sizes, // para colocar retornos opcionales.
  ) => {
    return {
      Tittle,
      CreatedAt,
      Stock,
      Size
    }
  }
  const Producto2 = CreateProductJson2("P1", new Date(), 12);
  console.log(Producto2.Stock)
})();
