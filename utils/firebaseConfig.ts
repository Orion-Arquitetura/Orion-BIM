import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBz6KcIbpkjUIDhpLGgL7-TCZTXZI-sXVg",
  authDomain: "bim-funcionarios.firebaseapp.com",
  projectId: "bim-funcionarios",
  storageBucket: "bim-funcionarios.appspot.com",
  messagingSenderId: "699538351727",
  appId: "1:699538351727:web:d603cdf1deafcf49f1cf9a",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth
