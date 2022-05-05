import {Product} from "./product.model";

export const Products: Product[] = [];

export const AddProduct = (data: Product) => {
  Products.push(data);
}

export const CalcStock = (): number => {
  let Total = 0;
  Products.forEach((i)=> {
    Total += i.Stock;
  });
  return Total;
}
