import { useContext, useEffect } from "react"
import { Modal } from "../Modal/index.tsx"
import { ProductContext } from "../../providers/ProductsContext/ProductsContex.tsx"
import { UlStyled } from "./styles.ts"
import { IProduct } from "../../providers/ProductsContext/@types.ts"


export const ModalCart = () => {

  const { setisModal, listCart, setlistCart, productList } = useContext(ProductContext)

  const value = listCart?.reduce((acc, item)=> acc + item.price ,0)

  const removeItemCart = (id: number) => {
    const newList: IProduct[] = listCart.filter((product) => product.id != id)
    localStorage.removeItem('@cartFashionStore')
    localStorage.setItem('@cartFashionStore', JSON.stringify(newList))
  }

  return (
    <Modal title="CARINHO" setModalState={() => setisModal(false)}>
      <UlStyled>
        {listCart != null ? listCart.map((item) => (
          <li>
            <img className="image" src={item.image} />
            <div>
              <p className="name">{item.name}</p>
              <p className="price">{item.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</p>
            </div>
            <button onClick={() => removeItemCart(item.id)}>-</button>
          </li>
        )) : null}
        <p className="price">TOTAL<span>{value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</span></p>
      </UlStyled>
    </Modal>
  )
}