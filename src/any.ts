(()=> {
  let DynamicVar: any;
  // Con any se puede colocar cualquier clase de valor dentro y se puede modificar sin afectar al chequeo que realiza TS para detectar errores.

  // Se aconseja NO utilizar any y que sea obligatorio declarar el tipo de dato que se va a utilizar.

  DynamicVar = "Example";
  // Cast: Pasar de un tipo de dato a otro.
  // as: para decir como tiene que ser tratado un tipo de dato.
  const Rta = (DynamicVar as string).toLowerCase(); // de esta forma se puede acceder a los metodos de los string de forma automatica desde la variable Rta.
  console.log(Rta);
  // Angle Bracket: funciona de la misma forma que "as" pero con otra sintaxis
  const Rta2 = (<number>DynamicVar).toFixed(); // Esta sintaxis es la utilizada en Angular y se realiza mediante <> seguido del nombre de la variable.
  console.log(Rta2);
})();
