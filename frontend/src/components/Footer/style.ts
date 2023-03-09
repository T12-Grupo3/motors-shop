import styled from "styled-components";

export const ContainerFooter = styled.div`
  color: #F8F9FA;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center ;
  margin-top: 102px;

    .footerMain{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 45px 59px;
        gap: 10px;

        width: 100%;
        height: 40px;
        left: 0px;
        top: 1951px;

        background: #0B0D0D;
    }

    .spanFooter{
        width: 265px;
        height: 24px;

        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;

        color: #FFFFFF;

        flex: none;
        order: 1;
        flex-grow: 0;
    }

    .buttonFooter{
        padding: 7px 15px;

        width: 53px;
        height: 50px;
        left: 1488px;
        top: 45px;

        background: #212529;
        border-radius: 4px;
        color: #FFFFFF;
    }

`
