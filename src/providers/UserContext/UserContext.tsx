import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
//import { toast } from "react-toastify";



interface IUserProviderProps {
    children: React.ReactNode;
}

interface IformData {
    email: string;
    password: string;
}

export const UserContext = createContext({})

export const UserProvider = ({ children }: IUserProviderProps) => {
    const [user, setUser] = useState (null)
    const navigation = useNavigate()

    const login = async (formData: IformData) => {
        
        try {
            const { data } = await api.post("/login", formData)

            //deve retornar nome do usario 
            localStorage.setItem("@AcessToken", JSON.stringify(data.accessToken))
            localStorage.setItem("@User", JSON.stringify(data.user))
            navigation("/admin_dashboard")
        } catch (error: any) {

            if (error.response.data == "Cannot find user") {
                /*
                toast.error('Usuário não encontrado!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
                */

            } else if (error.response.data == "Incorrect password") {
                /*
                toast.error('Senha incorreta!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
                */
            }
        }
    }

    return (
        <UserContext.Provider value={{ user, setUser, login }}>
            {children}
        </UserContext.Provider>
    )
}