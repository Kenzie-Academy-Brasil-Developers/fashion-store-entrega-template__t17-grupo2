import { useForm } from "react-hook-form";
import { useContext } from "react"
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "../../components/Input"
import { Header } from "../../components/adminComponents/Header"

import img from "../../assets/imgCover.svg"

import { StyledFormLogin, SectionLogin } from "./style"

import { loginFormSchema } from "./LoginSchema";

import { UserContext } from "../../providers/UserContext/UserContext";





export const LoginPage = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({ resolver: zodResolver(loginFormSchema) })
  const { login } = useContext(UserContext)


  return (
    <>
      <Header title={"FASHIOSHOP"} message={""} />

      <SectionLogin>
        <img src={img} alt="" />
        <StyledFormLogin onSubmit={handleSubmit(login)}>
          <h1>ENTRAR</h1>
          <Input error={errors.email} {...register("email")} placeholder="E-MAIl" type="email" />
          <Input error={errors.password} {...register("password")} placeholder="SENHA" type="password" />
          <div className="container">
            <button type="submit">ACESSAR</button>
            <button >CADASTRE-SE</button>
          </div>
        </StyledFormLogin>
      </SectionLogin>
    </>
  )
}

function register(arg0: string): import("react/jsx-runtime").JSX.IntrinsicAttributes & IInputProps & import("react").RefAttributes<HTMLInputElement> {
  throw new Error("Function not implemented.");
}
