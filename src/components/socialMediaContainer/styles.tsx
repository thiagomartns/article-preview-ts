import styled from 'styled-components';
import Theme from '../../styles/themes/default'

const SocialMediaContainer = styled.div`
  padding: 1rem 2rem;
  background-color: ${Theme.colors.veryDarkGrayishBlue};
  display: flex;
  gap: 1rem;
  position: absolute;
  right: -55px;
  bottom: 95px;
  border-radius: 10px;
  box-shadow: 10px 10px 10px rgba(201, 213, 225, 0.503415);
  animation: fade-in 1s ease-in-out;

  @media (min-width: 375px) and (max-width: 1000px) {
    width: 100%;
    height: 10vh;
    bottom: 0px;
    left: 0;
    border-radius: 0 0 10px 10px;
    padding: 3.2rem 2rem;
    display: flex;
    align-items: center;
  }

  .social-container--title {
    font: ${Theme.typography['manrope-b']};
    color: ${Theme.colors.lightGrayishBlue};
    letter-spacing: 5px;
    text-transform: uppercase;
  }

  .social-container--networks {
    display: flex;
    gap: .75rem;

    .social-icon {
      height: 85%;

      @media (min-width: 375px) and (max-width: 1000px) {
        height: 100%;
      }
    }

    .social-icon:hover {
      cursor: pointer;
    }
  }
`

export default SocialMediaContainer;