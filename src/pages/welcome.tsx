/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";

const StyledMain = styled.main`
  padding: 0 11vw 100px;
  background-image: url("/assets/background.png");
  min-height: 100vh;
  background-size: 100%;

  .first.div {
    margin-bottom: 60px;
  }

  .second.div {
    aspect-ratio: 16 / 9;
    max-height: auto;

    iframe {
        width: 100%;
        height: 100%;
    }
  }
`;

export default function Welcome() {
  return (
    <StyledMain>
      <div className="first div">
        <img
          src="/assets/orion-arq-marca-final.png"
          alt="orion"
          width={250}
        />
      </div>
      <div className="second div">
        <iframe
          src="https://www.youtube.com/embed/ogeJZxXarr4"
          title="Bem vindo à Orion Arquitetura!"
          frameBorder="0"
        ></iframe>
      </div>
    </StyledMain>
  );
}
