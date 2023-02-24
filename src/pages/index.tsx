/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import styled from "styled-components";
// import { useContext } from "react";
// import { AuthContext } from "@/context/AuthContext";
// import { ThreeDots } from "react-loader-spinner";
// import Main from "../bim/Main";
// import { GetServerSideProps } from "next";
// import { parseCookies } from "nookies";

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
      display: grid;
      place-items: center;

      &:hover {
        background-color: #336c72;

        &:disabled {
          background-color: #15323a;
        }
      }
    }
  }
`;

export default function Home() {
  const router = useRouter()

  function goToWelcomePage() {
    router.push('/welcome')

  }
  return (
    <StyledDiv>
      <img
        src="/assets/orion-arq-marca-final.png"
        alt="orion"
      />
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          placeholder="Email"
          type="email"
          name="email"
        />
        <input
          placeholder="Senha"
          type="password"
          name="password"
          required
        />
        <hr />

        <button onClick={goToWelcomePage}>Entrar</button>
      </form>
    </StyledDiv>
  );
}

// export default function Home({isOrionEmail}:any) {
//   const { login, error, loading } = useContext(AuthContext);

//   console.log(isOrionEmail)

//   if (error) {
//     window.alert(error.message);
//   }

//   if (isOrionEmail) {
//     return <Main />
//   }

//   return (
//     <StyledDiv>
//       <img
//         src="/assets/orion-arq-marca-final.png"
//         alt="orion"
//       />
//       <form onSubmit={(e) => e.preventDefault()}>
//         <input
//           placeholder="Email"
//           type="email"
//           name="email"
//         />
//         <input
//           placeholder="Senha"
//           type="password"
//           name="password"
//           required
//         />
//         <hr />

//         <button
//           onClick={login}
//           disabled={loading ? true : false}
//         >
//           {loading ? (
//             <ThreeDots
//               height="15"
//               width="20"
//               radius={1}
//               color="#fff"
//               visible={true}
//             />
//           ) : (
//             "Entrar"
//           )}
//         </button>
//       </form>
//     </StyledDiv>
//   );
// }

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const nookieResponse = parseCookies(context);
//   const isOrionEmail = /.+@orionarquitetura.com/.test(JSON.parse(nookieResponse.userData).email)

//   return {
//     props: {
//       isOrionEmail: isOrionEmail ? true : false,
//     },
//   };
// };
