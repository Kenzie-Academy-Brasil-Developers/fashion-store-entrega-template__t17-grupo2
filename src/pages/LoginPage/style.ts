import { styled } from "styled-components"


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

export const SectionLogin = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 90vw;
    margin: 0 auto;
    padding: 5rem 0;
`