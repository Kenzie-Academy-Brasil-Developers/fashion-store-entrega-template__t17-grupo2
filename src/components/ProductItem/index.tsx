import { IProduct } from "../../providers/ProductsContext/@types.ts"
import cartPlus from "../../assets/cartPlus.svg"
import { LiStyled } from "./styles.ts"
import { useContext } from "react"
import { ProductContext } from "../../providers/ProductsContext/ProductsContex.tsx"
import { Link } from "react-router-dom"

interface IProductList {
  item: IProduct;
}

export const ProductItem = ({ item }: IProductList) => {

  const { setCurrentProduct } = useContext(ProductContext)

  return (
    <LiStyled>
      <img className="image" src={item.image} />
      <div className="container">
        <p className="name">{item.name}</p>
        <p className="price">{item.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
        <div className="containerButton">
          <button><img src={cartPlus} alt="Carrinho com o sinal de + dentro" /></button>
          <Link to="/product"  onClick={()=> setCurrentProduct(item) }>SAIBA MAIS</Link>
        </div>
      </div>
    </LiStyled>
  )
}