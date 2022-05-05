(()=> {
  let Prices = [1,2,3,4,5,6,7,8,9,10];
  Prices.push(11);  // TS arroja un error si se introduce un dato distinto a un numero ya que fue definido en el array de la variable que la misma seria de numeros.
  let Prices2 = [1,2,3,4,5,true,"Examples"];
  Prices2.push("Example2"); // En la varaible Prices2 se puede observar que dentro de dicha variable se aceptan otros valores ademas de numeros por lo que al incorporar un valor nuevo distinto a un numero no arroja error

  // Para declarar de forma explicita el contenido de un array se lo puede hacer infieriendo los datos a continuacion de la definicion de la variable
  let Numbers: number[]; // = [1,2,3,4,5]
  let Array: (number | boolean | string)[]; // =[1, true, "str"]
  let Tupla: [number, string][] = []; // Las tuplas permiten definir como se debe completar un array. Si se completa de forma distinta arrojaria un error. Si no se inicializ con [] arroja error.
  Tupla.push([1, "uno"]);
  let Matriz: Array<[number, string, boolean]> = []; // Otra sintaxis para la utilizacion de tuplas.
  Matriz.push([1, "uno", true]);
  Matriz[0][1].concat("dos"); // Para acceder y cambiar valores de los arrays TS tambien ayuda en la ejecucion y arroja errores si el tipo de dato es distinto al que se desea manipular.
})();
