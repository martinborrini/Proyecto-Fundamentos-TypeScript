(()=> {
  // Declaración Inferida
  let IsEnable = true;
  IsEnable = false;

  //Declaración explicita
  let IsNew: boolean = false;
  IsNew = true;
  console.log("IsNew", IsNew);

  const Random = Math.random();
  console.log("Random", Random);
  IsNew = Random >= 0.5 ? true : false;
  // IsNew = Random >= 0.5 ? "true" : "false"; Arrojaria un error ya que no es el resultado esperado por la variable. Al definir en la variable booleanos, esta espera que retorne esos valores y no otros como los strings en este caso.
  console.log("IsNew", IsNew);

  const MyBoolean: boolean = true; // Siempre se debe escribir en minuscula ya que de lo contrario se estaría haciendo referencia al super prototipo Boolean

})();
