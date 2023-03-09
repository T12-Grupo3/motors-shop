import styled from "styled-components";
import { StyledContainer } from "../../style/container";


export const ContainerNavProfile = styled.div`
    background-color: var(--color-brand-2);
    color: var(--color-grey-10);

    height: 300px;

    display: flex;

`

export const ContainerUserProfile = styled(StyledContainer)`

    background-color: var(--color-grey-10);

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0px 20px 10px 25px;

    width: 1200px;
    height: 390px;
    left: 48px;
    margin-top: -150px;
    border-radius: 5px;

    .divName{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .imgProfile{
        height: 104px;
        width: 100px;
        left: 1146px;
        top: 568px;

        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 50%;
        background-color: var(--color-brand-1);

        p{
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 36px;
            line-height: 53px;
            color: var(--color-grey-10);
        }
    }

    .profileName{
        width: auto;
        height: 25px;
        left: 155px;
        top: 169px;
        padding-right: 15px;

        font-family: 'Lexend';
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;

        color: var(--color-grey-1);
    }
    .textProfile{
        color: var(--color-grey-2);
        font-size: 16px;
        font-weight: 400;
    }

    .paragraphAdvertiser{
        padding: 10px;
        border-radius: 5px;
        color: var(--color-brand-1);
        font-size: 14px;
        font-weight: 500;
        background-color: var( --color-brand-4);
    }
`

export const StyledContainerProfile = styled(StyledContainer)`
    margin-top: 10px;
    margin-bottom: 300px;
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: row;
    background-color: var(--color-grey-9);

    .containers-vehicules{
        display: flex;
        flex-direction: row;
        max-width: 2020px;
        overflow-x: auto;
        gap: 40px;
        flex-wrap: wrap;
        height: 780px;
  }

`