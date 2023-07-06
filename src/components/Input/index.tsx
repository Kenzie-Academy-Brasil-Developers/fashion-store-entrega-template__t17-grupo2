import { InputHTMLAttributes, forwardRef } from "react"
import { FieldError } from "react-hook-form"
import { InputStyled } from "./styles.ts"

interface IInputProps extends InputHTMLAttributes <HTMLInputElement>{
  placeholder: string;
  error?: FieldError;
}

export const Input = forwardRef<HTMLInputElement, IInputProps>(({placeholder, error, ...rest}, ref) => {
  return (
    <div>
      <InputStyled ref={ref} placeholder={placeholder} type="text"{...rest} />
      {error ? <p>{error.message}</p> : null}
    </div>
  )
})