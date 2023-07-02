interface IProductList {
  children: React.ReactNode;
}

// import { ProductCard } from "../ProductCard"

export const ProductList = ({children} : IProductList) => {
  return (
    <ul>
      {children}
    </ul>
  )
}