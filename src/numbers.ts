(()=> {
  // Declaración de variables.

  // Forma inferida.
  let ProductPrice = 1000;
  ProductPrice = 1001;
  console.log("ProductPrice", ProductPrice);

  // Forma explicita.
  let CostumerAge: number = 29;
  CostumerAge = CostumerAge + 1;
  // CostumerAge = CostumerAge + "1"; Daría error debido a que reconoce la suma entre un number y un string.
  console.log("CustomerAge", CostumerAge)

  /* En caso de simplemente declarar una variable y no asignarle un valor, estamos obligados a agregar el tipo de dato que es esa variable. */
  let ProductInStock: number; // inicializa la variable pero sin asignar un valor, TS reconoce que esa variable tiene que recibir un number.
  let ProductInStockDefined: number = 1;
  console.log("ProductInStock", ProductInStockDefined) // TS alerta que se va a imprimir algo en consola que no está definido.
  if(ProductInStockDefined > 10) {
    console.log("Is greater");
  }

  let Discount = parseInt("123"); // Reconoce que la variable recibida es un number ya que parseInt la vuelve uno.
  console.log("Discount", Discount);

  // NaN
  /* Not A Number, entra dentro de la categoría de tipos de datos number. */
  let Discount2 = parseInt("qwerty"); // Reconoce que la variable recibida es un number ya que parseInt la vuelve uno.
  console.log("Discount2", Discount2);

  // Hexadecimal
  /* Para usarlos, antes de asignar un número tenemos que colocar 0x y luego colocar valores entre el 0 y la f. */
  let Hex: number = 0x0f124;
  console.log("Hex", Hex);

  // Binarios
  /* Para usarlos, antes de asignar un número tenemos que colocar 0b y luego colocar 0 o 1. */
  let Binary: number = 0b00110101; // Si se colocase un numero distinto a 0 o 1 arrojaria un error.
  console.log("Binary", Binary);

  // Octales
  /* Para usarlos, antes de asignar un número tenemos que colocar 0o y luego colocar valores entre el 0 y el 7. */
  let Octal: number = 0o12356;
  console.log("Octal", Octal);

  const MyNumber: number = 10; // Siempre tipar "number" con minuscula ya que Number hace referencia al super prototipo Number.
  console.log("My number", MyNumber);
})();
