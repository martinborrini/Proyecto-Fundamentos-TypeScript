(()=> {
  // Null y Undefined son distintos y se consideran como valores diferentes a number, string y boolean.
  // let MyNumber: number = null; Daria error
  let MyString: string;

  let MyNull: null = null;
  let MyUndefined: undefined = undefined;
  // Ambos quedan tipo any si no son definidos de forma explicita.

  let MyNumber: number | null = null; // esto es util para Angular donde lo que se inicializa no carga aun y lo deba reconocer como un valor antes de reconocer el number.
  MyNumber = 12;

  function Hi(Name: string | null) {
    let Hello = "hola ";
    if (Name) {
      Hello += Name;
    } else {
      Hello += "Nobody";
    }
    console.log(Hello);
  }

  Hi("Martin");
  Hi(null);

  // En este caso, al detectar que Hi2 puede arrojar 2 valores distintos, y al no existir un If, el signo ? actua como un if y establece que puede arrojar 2 valores, en el caso de que no detecte que arroja un string, utiliaria la segunda opcion que es para null.
  // Dicho signo ? se auto completa y se lo conoce como optional changing
  function Hi2 (Name: string | null) {
    let Hello = "Hola ";
    Hello += Name?.toLowerCase() || "nobody";
    console.log(Hello);
  }

  Hi2("Martin");
  Hi2(null);
})();
