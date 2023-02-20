/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";

const StyledSection = styled.section`
  background-image: url("/assets/background.png");
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;

  .section1-first-div {
    display: grid;
    grid-template-rows: 1fr 1fr;
    place-items: center;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      background-image: url("/assets/orion-estrela.png");
      background-size: 150%;
      background-position: 145% -170px;
      background-repeat: no-repeat;
      opacity: 0.3;
      filter: grayscale(1);
    }

    h1 {
      font-size: 47px;
      width: 70%;
      text-align: center;
      place-self: end center;
      margin-bottom: 50px;
      color: #15323a;
      font-family: "League Spartan", sans-serif;
    }
  }

  .orion-arquitetura-imagem {
    position: absolute;
    bottom: 90px;
    width: 500px;
  }

  .orion-arquitetura-imagem-pc {
    width: 800px;
  }
`;

export default function Section1() {
  return (
    <StyledSection>
      <div className="section1-first-div">
        <h1>Modelagem da Informação - BIM</h1>
        <img
          className="orion-arquitetura-imagem"
          src={"/assets/orion-arq-marca-final.png"}
          alt="Orion Arquitetura"
        />
      </div>
      <div className="section1-second-div">
        <img
          className="orion-arquitetura-imagem-pc"
          src={"/assets/imagem_pc.png"}
          alt="Orion Arquitetura"
        />
      </div>
    </StyledSection>
  );
}
