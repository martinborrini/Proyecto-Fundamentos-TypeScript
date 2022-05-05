(()=> {
  let DynamicVar: string | number;

  /* Los Union Types permiten una mayor flexibilidad al momento de tipear variables. Al momento de escribir, TS detecta de forma dinamica las variables y el esquema del codigo para poder arrojar las utilidades necesarias dependiendo del tipo de dato que se esta utilizando */
  function Greeting(MyText : string | number) {
    if(typeof MyText === "string") {
      console.log(`string ${MyText.toLowerCase()}`); // Como TS detecta que en este if tiene que operar un string, al momento de llamar a una funcion de la variable, esta arroja todas las relacionadas a los string
    } else {
      console.log(`number ${MyText.toString()}`); // en este caso arroja todas las relacionadas con los numbers.
    }
  }
  Greeting("Hola");
  Greeting(2222);
})();
