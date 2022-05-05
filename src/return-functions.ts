(()=> {
  const CalcTotal = (Prices: number[]): number => { // con el : number => se establece de forma explicita que lo que debe devolver la funcion es un numero y no otro valor.
    let Total = 0;
    Prices.forEach((i) => {
      Total += i;
    });
    return Total;
  }

  const PrintTotal = (Prices: number[]): void => { // El void sirve para que no retorne ningun valor, se utiliza para que retorne otras funciones unicamente.
    const Rta = CalcTotal(Prices); // La variable ya arroja de antemano que el retorno de la varaible Rta es un number.
    console.log(`El total es ${Rta}`);
  }

  PrintTotal([1,2,33,12,99]);
})();
