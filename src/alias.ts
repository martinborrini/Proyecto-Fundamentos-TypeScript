(()=> {
  type UserID = string | number | boolean; // Alias Type. Para poder utilizarlo en otras lineas de codigo sin tener que pasar por cada una modificando los valores. Solamente es necesario llamarlo en donde se desea usar a la variable definida en type.
  let UserId: UserID;

  // Literal Types

  type Sizes = "S" | "M" | "L" | "XL";
  let ShirtSize: Sizes;
  ShirtSize = "M";
  // Si se aplica otro valor distinto a los definidos arriba, arrojaria un error. Ademas TS arroja los valores que unicamente pueden ser usados por dicha variable al momento de sugerir completar el codigo.

  function Greeting(UserId : UserID, size: Sizes) {
    if(typeof UserId === "string") {
      console.log(`string ${UserId.toLowerCase()}`);
    } else {
      console.log(`number ${UserId.toString()}`);
    }
  }

  console.log(Greeting("Martin", "S")); // TS arroja error si no se completa con los valores sugeridos definidos anteriormente.
})();
