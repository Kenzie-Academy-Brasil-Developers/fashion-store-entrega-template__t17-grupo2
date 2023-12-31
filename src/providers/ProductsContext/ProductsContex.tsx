import { createContext, useState, useEffect, useContext } from "react"
import { api } from "../../services/api"
import { IProduct, IProductProviderProps, IProductContextValue } from "./@types"
import { TAddNewProductForm } from "../../components/adminComponents/AddNewProductForm/addNewProductFormSchema"
import { TeditProductFormSchema } from "../../components/adminComponents/EditProductForm/editProductSchema"
import "react-toastify/dist/ReactToastify.css"
import { UserContext } from "../UserContext/UserContext"

export const ProductContext = createContext({} as IProductContextValue)

export const ProductsProvider = ({ children }: IProductProviderProps) => {
  const [isModalNewProductOpen, setIsModalNewProductsOpen] = useState(false)

  const [isModalEditProduct, setisModalEditProduct] = useState(false)

  const [isModal, setisModal] = useState(false)

  const [productList, setProductList] = useState<IProduct[] | null>(null)

  const [currentProduct, setCurrentProduct] = useState<IProduct | null>(null)

  const [listCart, setlistCart] = useState<IProduct[] | null>(null)

  const { Toasty } = useContext(UserContext)


  useEffect(() => {
    const loadProducts = async () => {
      try {
        const { data } = await api.get("/products")

        setProductList(data)

      } catch (error) {
      }
    }
    loadProducts()

  }, [])

  const removeProduct = async (itemId: number) => {
    const token = localStorage.getItem("@AcessToken")

    if (productList !== null) {
      try {
        api.delete(`/products/${itemId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        const updatedProductList = productList.filter((item) => item.id !== itemId)

        setProductList(updatedProductList)

        Toasty("Produto removido com sucesso", "success", "top-right")
       
      } catch (error) {

        Toasty("Ups, houve um problema, tente novamente", "error", "top-right")
      }
    }
  }

  const submitAddNewProduct = async (formData: TAddNewProductForm): Promise<void> => {
    const token = localStorage.getItem("@AcessToken") || ""

    const price = parseFloat(formData.price)

    try {
      const { data } = await api.post("/products", {
        ...formData, price: price
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      const updatedProductList = productList ? [...productList, data] : null
      setProductList(updatedProductList)
      setIsModalNewProductsOpen(false)

      Toasty("Produto adicionado com sucesso", "success", "top-right")

    } catch (error) {
      Toasty("Ups, houve um problema, tente novamente", "error", "top-right")
      
      setIsModalNewProductsOpen(false)
    }
  }

  const submitEditProduct = async (formData: TeditProductFormSchema, productId: string) => {
    const token = localStorage.getItem("@AcessToken")

    const price = parseFloat(formData.price)

    try {
      const { data } = await api.put(`/products/${productId}`, {
        ...formData, price: price
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })

      if (productList) {
        const productIndex = productList.findIndex(product => product.id.toString() === productId)
        if (productIndex !== -1) {
          const updatedProductList = [...productList]
          updatedProductList[productIndex] = data
          setProductList(updatedProductList)
        }
      }
      
      Toasty("Produto editado com sucesso", "success", "top-right")

    } catch (error) {

      Toasty("Ups, houve um problema, tente novamente", "error", "top-right")
    }

    setisModalEditProduct(false)
  }

  return (
    <ProductContext.Provider value={{ isModal, setisModal, listCart, setlistCart, productList, currentProduct, setCurrentProduct, removeProduct, isModalNewProductOpen, setIsModalNewProductsOpen, submitAddNewProduct, submitEditProduct, isModalEditProduct, setisModalEditProduct }}>
      {children}
    </ProductContext.Provider>
  )
}