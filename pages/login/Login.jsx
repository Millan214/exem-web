import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"
import { FlexLayout } from "../../components/layouts/FlexLayout";
import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import styled from "styled-components"
import { auth } from "../../firebase/firebaseInit"
import Admin from "../admin/Admin"
import mensaje from "../../components/mensajes/Mensaje";
import Boton from "../../components/clickables/botones/Boton";
import ExemTextIcon from "../../components/icons/ExemTextIcon";

/**
 * @param   
 * @returns Component
 */
const Login = props => {

    const nav = useNavigate()
    const [logged, setLogged] = useState(false)

    const handleSumbit = e => {
        e.preventDefault()
        const form = e.target

        const email = form['email'].value
        const password = form['password'].value

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                // ...
                setLogged(true)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                mensaje( "Usuario o contraseña inválidos" )
            })
    }

    const SWrapper = styled.div`
        padding: 10px;

        width: 100vw;
        height: 100vh;

        background: var(--color2);

        display: flex;
        justify-content: center;
        align-items: center;

        form {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        & > div{
            overflow: hidden;

            border-radius: 10px;

            background: var(--color1);
            box-shadow: var(--shadow);

            input{
                padding: 7px 10px;

                color: var(--color6);

                border: none;
                outline: none;

                margin: 0;

                width: 100%;
                box-sizing: border-box;

                border-radius: 5px;

                box-shadow: var(--shadow);

                transition: box-shadow .25s, transform .25s;

                &:focus {
                    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
                    transform: translateY(2px);
                }
            }

            label {
                display: flex;
                flex-direction: column;
                gap: 10px;
                padding: 15px;
            }

            h1, h2, h3 {
                margin: 0;
                padding: 0;
                color: var(--color6);
            }

            h1 {
                margin: 20px;
            }

            button {
                background: var(--color5);
                color: var(--color1);
                
                padding: 10px;

                font-size: 25px;

                border: none;
                outline: none;

                margin-top: 10px;

                cursor: pointer;

                transition: background .25s, transform .25s;

                &:hover, &:focus {
                    background: var(--color7);
                }

                &:active {
                    transform: translateY(5px);
                }
            }

        }

        @media ( max-width: 350px ) {
            padding: 0;
            align-items: flex-start;

            & > div {
                margin: 0;
                box-shadow: none;
                border-radius: 0;
            }
        }
    `

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user && !user.isAnonymous) {
                setLogged(true)
            }
        })
    }, [logged])

    return !logged ? (

        <SWrapper>
 
                <Link style={{position: 'fixed', top: 0, right: 20}} to="/">
                    <ExemTextIcon/>
                </Link>
            

            <FlexLayout column>
                <form action="" onSubmit={handleSumbit} column>
                    <h1>¡Hola excelente!</h1>
                    <label htmlFor="email">
                        <h2>E-Mail</h2>
                        <input type="email" name="email" placeholder="email" spellCheck={false} />
                    </label>
                    <label htmlFor="password">
                        <h2>Contraseña</h2>
                        <input type="password" name="password" placeholder="password" spellCheck={false} />
                    </label>
                    <button type="submit">Entrar</button>
                </form>
            </FlexLayout>
        </SWrapper>
    ) : (
        <Admin setLogged={setLogged} />
    )
}

export default Login