import {AddProduct, CalcStock, Products} from "./product.services"

AddProduct({
  Tittle: "Prop1",
  CreatedAt: new Date(1993,1,1),
  Stock: 100,
  Size: "L"
});

AddProduct({
  Tittle: "Prop2",
  CreatedAt: new Date(1998,6,10),
  Stock: 25,
});

console.log(Products);

const Total = CalcStock();
console.log(`El total del Stock es ${Total}`);
