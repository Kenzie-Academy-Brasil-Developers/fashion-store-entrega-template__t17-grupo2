import { HeaderStyled } from "./styles.ts"
import logo from "../../assets/FAshionSTORE.svg"
import cart from "../../assets/cart.svg"
import React from "react"

interface IProps {
    onlyBrand: Boolean
}

export const HeaderDefault = ({ onlyBrand }: IProps) => {

    return (
        <HeaderStyled onlyBrand={onlyBrand}>
            <div>
                <img className="Logo" src={logo} alt="Logo fashion store" />
                {onlyBrand === true ? null : <img className="Cart" src={cart} alt="icone de carrinho" />}
            </div>
        </HeaderStyled>
    )
}