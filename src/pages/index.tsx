/* eslint-disable @next/next/no-img-element */
import styled from "styled-components";

const StyledDiv = styled.div`
  background-image: url("/assets/background.png");
  height: 100vh;
  display: grid;

  & img {
    width: 20%;
    place-self: center;
  }

  & form {
    box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 50px 50px 30px 50px;
    row-gap: 15px;
    width: clamp(300px, 50%, 500px);
    place-self: start center;
    backdrop-filter: blur(3px);

    & input {
      padding: 20px;
      background-color: white;
      border-radius: 2px;
      border: 0;
      color: black;
      box-shadow: inset 1px 1px 4px rgba(0, 0, 0, 0.5);
    }

    & button {
      width: 100%;
      margin-inline: auto;
      padding: 20px;
      background-color: #15323a;
      transition: background-color 0.2s ease;
      border-radius: 2px;
      border: 0;

      &:hover {
        background-color: #336c72;
      }
    }
  }
`;

export default function Home() {

  return (
    <StyledDiv>
      <img
        src="/assets/orion-arq-marca-final.png"
        alt="orion"
      />
      <form>
        <input
          placeholder="Usuário"
          type="text"
        />
        <input
          placeholder="Senha"
          type="password"
        />
        <hr />
        <button>Entrar</button>
      </form>
    </StyledDiv>
  );
}
