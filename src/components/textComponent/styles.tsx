import styled from "styled-components";
import Theme from '../../styles/themes/default';

const TextContainer = styled.div`

  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #fff;
  border-radius: 0 10px 10px;
  position: relative;

  @media (min-width: 375px) and (max-width: 1000px) {
    width: 350px;
    border-radius: 0 0px 10px 10px;
    padding: 2rem;
  }

  .info-text {
    display: flex;
    flex-direction: column;
    gap: .5rem;
    width: 95%;

    @media (min-width: 375px) and (max-width: 1000px) {
      gap: 1rem;
    }

    .info-h1 {
      font: ${Theme.typography["manrope-b"]};
      font-size: 1.25rem;
      color: ${Theme.colors.veryDarkGrayishBlue};
    }

    .info-p {
      font: ${Theme.typography["manrope-m"]};
      color: ${Theme.colors.desaturatedDarkBlue};
      
      @media (min-width: 375px) and (max-width: 1000px) {
        margin-bottom: 1rem;
      }

    }
  }

  .info-profile {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media (min-width: 375px) and (max-width: 1000px) {
      margin-top: 3rem;
    }

    .info-profile--user {
      display: flex;
      gap: .5rem;

      .info-profile--avatar {
        width: 15%;
        border-radius: 50%;
      }

      .info-profile--username {
        display: flex;
        flex-direction: column;
        justify-content: center;

        .username {
          font: ${Theme.typography["manrope-b"]};
          color: ${Theme.colors.veryDarkGrayishBlue};
          line-height: 1;
        }

        .date {
          font: ${Theme.typography["manrope-m"]};
          color: ${Theme.colors.desaturatedDarkBlue};
        }
      }
    }

    .info-profile--share {
      width: 40px;
      height: 40px;
      background-color: ${Theme.colors.lightGrayishBlue};
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 2;

      @media (min-width: 375px) and (max-width: 1000px) {
        width: 50px;
      }

      &.activated {
        background-color: ${Theme.colors.desaturatedDarkBlue};
      }

      &:hover {
        background-color: ${Theme.colors.desaturatedDarkBlue};
        cursor: pointer;
      }

      &:hover path {
        fill: white;
      }
    }
  }
`;

export default TextContainer;