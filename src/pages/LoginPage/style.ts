import { styled } from "styled-components";
import { letterTitle2 } from "../../styles/globalStyle.ts";


export const StyledFormLogin = styled.form`
    width: 40%;
    display: flex;
    flex-flow: column;
    gap: 0.5rem;
    
    > .container {
        width: 50%;
        display: flex;
        gap: 1rem;
        margin: 1rem 0;
    }
`

export const LoginPageTitle = styled.h1`
    ${letterTitle2}
`

export const StyleSection = styled.section`
    display: flex;
    align-items: center;
    gap: 4rem;
`
