export type Sizes = "S" | "M" | "L" | "XL";

export type Product = {
  Tittle: string,
  CreatedAt: Date,
  Stock: number,
  Size?: Sizes,
};
