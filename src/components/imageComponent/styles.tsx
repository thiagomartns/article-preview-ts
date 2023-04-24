import styled from "styled-components";

const ImgContainer = styled.div`
  height: 100%;

  img {
    width: 285px;
    height: 100%;
    object-fit: cover;
    border-radius: 10px 0 0 10px;

    @media (min-width: 375px) and (max-width: 1000px) {
      width: 350px;
      border-radius: 10px 10px 0 0;
    }
  }
`;

export default ImgContainer;
