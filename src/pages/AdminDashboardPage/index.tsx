import { Header } from "../../components/adminComponents/Header"
import { NavAdminBar } from "../../components/adminComponents/NavAdminBar"
import { ProductList } from "../../components/ProductList"

import { useContext } from "react"
import { ProductContext } from "../../providers/ProductsContext/ProductsContex"
import { IProduct } from "../../providers/ProductsContext/@types"


export const AdminDashboardPage = () => {
  const productList: IProduct[] | null = useContext(ProductContext).productList

  const submit = () => {
    console.log('Novo Produto')
  }

  return (
    <>
      <h1>LOGO</h1>
      <NavAdminBar />
      <Header title='PRODUTOS' message='Gerencie o produtos do catálogo'/>
      <button onClick={submit}>NOVO PRODUTO</button>

      <main>
        <ProductList>
          {productList ? productList.map((product) => (
          <li key={product.id}>
            <img src={product.image}/>
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button>Editar</button>
            <button>Remover</button>
          </li>
        )) : null}
        </ProductList>
      </main>
    </>
  )
}