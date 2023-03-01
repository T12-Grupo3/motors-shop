import styled from "styled-components";
import { StyledContainer } from "../../style/container";

export const ContainerLogin = styled(StyledContainer)`
    width: 402px;
    height: 542px;
    margin-top: 120px;

    background-color: var(--color-grey-10);

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    .DivAnchor{
        width: 328px;

        display: flex;
        justify-content: flex-end;

        a{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 24px;
        }
    }

    .DivParagraph{
        width: 328px;

        display: flex;
        justify-content: space-around;
        
        p{
            color: var(--color-grey-2);
            font-family: 'Inter';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 24px;
        }
    }
`

export const FormLogin = styled.form`
    width: 80%;
    height: 542px;
    padding: 40px;
    /* margin-left: 12px; */

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    label{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
    }
`
export const ParagraphLogin = styled.p`
    font-family: 'Lexend';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
`

export const InputLogin = styled.input`
    width: 315px;
    height: 48px;
    padding-left: 10px;
    
    border: 2px solid var(--color-grey-7);
    border-radius: 5px;
    background-color: var(--color-grey-10);
    color: var(--color-grey-7);
    font-size: 16px;
    font-weight: 400;
    font-family: "inter";

    &:focus-visible {
        outline: 2px solid var(--color-brand-2);
        border-radius: 5px;
    }
`

export const ButtonSubmitLogin = styled.button`
    background-color: var(--color-brand-1);
    width: 315px;
    height: 48px;

    border: none;
    border-radius: 5px;
    color: var(--color-grey-10);
    font-size: 16px;
    cursor: pointer;

    &:hover{
        background-color: var(--color-brand-4);
        color: var(--color-brand-1);
    }
`

export const ButtonGoRegister = styled.button`
    width: 315px;
    height: 48px;

    border-radius: 5px;
    border: 2px solid var(--color-grey-7);
    background-color: transparent;
    font-size: 16px;

    &:hover{
        background-color: var(--color-grey-1);
        color: var(--color-grey-10);
    }


`