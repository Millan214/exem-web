import { auth } from './firebase/firebaseInit'
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

function App() {

  const provider = new GoogleAuthProvider();

  const registrarse = () => {

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });

  }

  return (
    <>
      <button onClick={registrarse}>hola</button>
      <h1>Holiiiqui</h1>
      <h2>hola que tal</h2>
      <h3>cosas nasis</h3>
    </>
  );
}

export default App;
