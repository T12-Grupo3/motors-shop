import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 :root{
    /* Brand */
    --color-brand-1: #4529e6;
    --color-brand-2: #5126EA;
    --color-brand-3: #B0A6F0;
    --color-brand-4: #EDEAFD;

    /* Grey Scale */
    --color-grey-0: #0B0D0D;
    --color-grey-1: #212529;
    --color-grey-2: #495057;
    --color-grey-3: #868E96;
    --color-grey-4: #ADB5BD;
    --color-grey-5: #CED4DA;
    --color-grey-6: #DEE2E6;
    --color-grey-7: #E9ECEF;
    --color-grey-8: #F1F3F5;
    --color-grey-9: #F8F9FA;
    --color-grey-10: #FDFDFD;
    --color-grey-whiteFixed: #FFFFFF;
    
    /* Feedback */
    --color-alert-1: #CD2B31;
    --color-alert-2: #FDD8D8;
    --color-alert-3: #FFE5E5;
    --color-sucess-1: #18794E;
    --color-sucess-2: #CCEBD7;
    --color-sucess-3: #DDF3E4;


    /* Colors Random Profile */
    --color-random-1: #E34D8C;
    --color-random-2: #C04277;
    --color-random-3: #7D2A4D;
    --color-random-4: #7000FF;
    --color-random-5: #6200E3;
    --color-random-6: #36007D;
    --color-random-7: #349974;
    --color-random-8: #2A7D5F;
    --color-random-9: #153D2E;
    --color-random-10: #6100FF;
    --color-random-11: #5700E3;
    --color-random-12: #30007D;


    /* Typograph */

    --heading-1-700: 700;
    --heading-2-600: 600;
    --heading-3-600: 600;
    --heading-3-500: 500;
    --heading-4-600: 600;
    --heading-4-500: 500;
    --heading-5-600: 600;
    --heading-5-500: 500;
    --heading-6-600: 600;
    --heading-6-500: 500;
    --heading-7-600: 600;
    --heading-7-500: 500;

    --body-1-600: 600;
    --body-1-400: 400;
    --body-2-500: 500;
    --body-2-400: 400;

    --button-big-text: 16px;
    --button-medium-text: 14px; 
 }

 h1 {
   font-weight: --heading-1;
 }

 h2, h3 {
   font-weight: --heading-2;
 }

 h4, h5, h6 {
   font-weight: --heading-3;
 }

 input::placeholder {
   font-size: 16px;
   font-weight: 400;
 }

 label {
    font-size: 14px;
   font-weight: 500;
 }

 li {
  list-style: none;
 }

 a {
  text-decoration: none;
  color: var(--color-grey-2);
 }

 button {
  cursor: pointer;
 }
`;
