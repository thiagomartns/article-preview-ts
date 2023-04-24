import { createGlobalStyle } from 'styled-components';
import Theme from '../styles/themes/default'

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .App {
    background-color: ${Theme.colors.lightGrayishBlue};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;


    .app-content {
      width: 800px;
      display: flex;
      box-shadow: 40px 40px 40px 40px rgba(201, 213, 225, 0.503415) ;
      border-radius: 10px;
      height: 325px;
    }
  }

  @media (min-width: 375px) and (max-width: 1000px) {
    .app-content {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 375px;
      box-shadow: none;
    }
  }
`