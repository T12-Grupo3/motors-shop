import styled from "styled-components";

export const StyledProductCard = styled.div`
  width: 25%;
`;

export const StyledProductImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--color-grey-7);

  padding: 5px;

  img {
    width: 80%;
  }
`;

export const StyledProductDescription = styled.div`
  h2 {
    font-size: 16px;
    font-weight: var(--heading-7-600);
  }

  p {
    color: var(--color-grey-2);
    font-weight: var(--body-2-400);
    font-size: 14px;
  }
`;

export const StyledProductUser = styled.div`
  width: 55%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    color: var(--color-grey-2);
    font-size: 14px;
    font-weight: var(--body-2-500);
  }
`;

export const StyledProductCaracteristcs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    background-color: var(--color-brand-4);
    color: var(--color-brand-1);
    font-size: 14px;

    border-radius: 5px;

    padding: 5px;
    margin-right: 10px;
  }

  p {
    color: var(--color-grey-1);
    font-size: 16px;
    font-weight: var(--heading-7-500);
  }
`;

export const ContainerProductCard = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  .productCardMain {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 45px 59px;
    gap: 10px;

    /* position: absolute; */
    width: 312px;
    left: 0px;
    top: 1951px;

    /* Grey Scale/grey-0 */

    background: #fdfdfd;
    border-radius: 4px;
    margin-bottom: 40px;
  }

  .imgCard {
    /* position: absolute; */
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 28px 44px;
    gap: 8px;
    width: 100%;
    height: 152px;
    left: 0px;
    top: 0px;

    /* Grey Scale/grey-7 */

    background: #e9ecef;
    /* Grey Scale/grey-7 */

    border: 2px solid #e9ecef;
  }

  .image {
    width: 262px;
    height: 150.28px;
    left: 25px;
    top: 1px;

    background: url(EXTERIOR-frontSidePilotNear-1653845164710-removebg-preview.png);
  }
  .descriptionCard {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 8px 44px;
    gap: 8px;
    margin-bottom: 40px;

    /* position: absolute; */
    width: 100%;
    height: 239px;
    /* left: 182px;
  top: 491px; */

    /* Grey Scale/grey-10 */

    background: #fdfdfd;
    border-radius: 4px;
    color: #212529;
  }
  .caracteristc {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 8px;

    width: 100%;
    height: auto;
    left: 182px;
    top: 491px;
  }
  .DataCard {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 8px;
  }

  .spanDescription {
    width: 100px;
    height: 25px;

    /* Heading/Heading-6-600 */

    font-family: "Lexend";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    /* identical to box height */

    /* Grey Scale/grey-1 */

    color: #212529;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }

  .nameCarCard {
    width: 312px;
    height: 22px;
    left: 0px;
    top: 0px;

    /* Heading/Heading-7-600 */

    font-family: "Lexend";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;

    /* Grey Scale/grey-1 */

    color: #212529;
  }

  .caracteristcCar {
    width: 658px;
    height: 32.39px;

    /* Heading/Heading-6-600 */

    font-family: "Lexend";
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;

    /* Grey Scale/grey-1 */

    color: #212529;

    flex: none;
    order: 0;
    flex-grow: 0;
  }
  .anoCard {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;
    gap: 10px;

    width: 50px;
    height: 32px;

    /* Brand/brand4 */

    background: #edeafd;
    border-radius: 4px;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
  }
  .kmCard {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 4px 8px;
    gap: 10px;

    width: 51px;
    height: 32px;

    /* Brand/brand4 */

    background: #edeafd;
    border-radius: 4px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }
  .precoCard {
    /* position: absolute; */
    width: 105px;
    height: 20px;
    left: 204px;
    top: 4px;

    /* Heading/Heading-7-500 */

    font-family: "Lexend";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    /* identical to box height */

    /* Grey Scale/grey-1 */

    color: #212529;
  }

  .liComents {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    /* padding: 36px 44px; */
    gap: 14px;
    color: #000000;
  }

  .nikeClient {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;

    width: 32px;
    height: 32px;

    /* Random/random9 */

    background: #153d2e;
    border-radius: 150px;
    color: #fdfdfd;
    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }
  .liName {
    width: auto;
    height: 24px;

    /* Text/body-2-500 */

    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    /* identical to box height, or 171% */

    /* Grey Scale/grey-1 */

    color: #212529;
  }
`;
