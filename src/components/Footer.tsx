/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";

const StyledFooter = styled.footer`
  padding: 20px 7vw;
  padding-inline: 7vw;
  display: flex;
  background-color: #15323a;
  align-items: center;
  column-gap: 20px;

  .social-media-div {
    border: solid 1px red;
    display: grid;
    grid-template-columns: 1fr 1fr;

    .social-media {
      border: solid 1px yellowgreen;
      width: 35px;
      aspect-ratio: 1/1;
    }
  }

  .footer-orion-logo {
    flex-grow: 1;
    display: flex;
    justify-content: end;

    img[alt="orion"] {
      width: 200px;
      filter: brightness(0) invert(100%);
    }
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <div className="social-media-div">
        <div className="social-media"></div>
        <div className="social-media"></div>
        <div className="social-media"></div>
        <div className="social-media"></div>
      </div>
      <div className="dados-da-empresa">
        <p>
          Av. Pastor Martin Luther King, 126 Office 1000, sala 602 - Del Castilho - Rio de
          Janeiro RJ
        </p>
        <p>(21) 96957-6823</p>
      </div>
      <div className="footer-orion-logo">
        <img
          src="/assets/orion-arq-marca-final.png"
          alt="orion"
        />
      </div>
    </StyledFooter>
  );
}
