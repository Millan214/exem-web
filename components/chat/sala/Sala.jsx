import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { UserContext } from "../../../pages/App"
import Enviar from "../../icons/Enviar"
import MensajeChat from "../mensaje/MensajeChat"
import { updateProfile } from "firebase/auth";
import { auth, db } from "../../../firebase/firebaseInit"
import { doc, setDoc, onSnapshot, getDoc } from "firebase/firestore"

const SWrapper = styled.form`
    position: fixed;
    right: 50px;
    bottom: 100px;

    display: grid;
    grid-template-rows: 50px auto 50px;
    gap: 10px;

    width: 400px;
    height: 400px;

    padding: 10px;

    background: var(--color1);

    border: 5px solid var(--color5);
    border-radius: 15px;

    overflow: hidden;

    box-shadow: var(--shadow);

    z-index: 100;
`

const SCabecera = styled.header`
    background: var(--color1);
    box-shadow: var(--shadow);
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
`

const SNotClaimed = styled.h1`
    color: var(--color6);
    font-size: 20px;
`

const SChat = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
    overflow-y: auto;
    padding-right: 10px;
    /* width */
    &::-webkit-scrollbar {
        width: 5px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
        background: #f1f1f1; 
    }
    
    /* Handle */
    &::-webkit-scrollbar-thumb {
        background: var(--color5); 
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
        background: var(--color6);
    }

`

const SInputWrapper = styled.div`

    display: flex;
    
    gap: 10px;

    input{
        border: none;
        outline: none;
        width: 100%;
        padding: 20px;
        background: var(--color2);
        border-radius: 10px;
        box-shadow: var(--shadow);
        color: var(--color7);
        font-weight: bold;
        &::placeholder{
            color: var(--color7);
            font-weight: bold;
        }
    }
`

const SBtnEnviar = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--color6);
    
    width: 60px;
    
    box-shadow: var(--shadow);

    border-radius: 10px;

    border: none;
    outline: none;

    cursor: pointer;

    transition: transform .25s, box-shadow .25s;

    svg {
        transform: rotate(-90deg);
        transition: transform .25s;
    }

    &:hover svg, &:active {
        transform: rotate(0deg);
        transform: translateY(3px);
    }
`

const SIntroduceNombre = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    gap: 10px;
    background-color: var(--color1);
    width: 100%;
    height: 100%;
    z-index: 5;

    ${props => props.display ? 'display: none' : ''};

    h1{
        color: var(--color7);
    }

    input{
        border: none;
        outline: none;
        padding: 10px;
        font-weight: bold;
        color: var(--color7);
        text-align: center;
        border-radius: 5px;
    }
`

const Sala = props => {

    const user = useContext(UserContext)

    useEffect(() => {

    })

    const handleSubmit = e => {

        const enviarMensaje = async (mensaje) => {

            const bajarChat = () => {
                let domChat = document.querySelector('#salaChat')
                domChat.scrollTop = domChat.scrollHeight
            }

            const docRef = doc(db, "usuarios", user.user.uid);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                if (docSnap.data().sala){
                    setDoc(doc(db, "usuarios", user.user.uid), {
                        sala: [
                            ...docSnap.data().sala,
                            {
                                contenido: mensaje,
                                enviado: {
                                    completeDate: new Date(),
                                    dia: new Date().getDate(),
                                    mes: new Date().getMonth() + 1,
                                    h: new Date().getHours(),
                                    min: new Date().getMinutes(),
                                }
                            }
                        ]
                    })
                } else {
                    setDoc(doc(db, "usuarios", user.user.uid), {
                        sala: [
                            {
                                contenido: mensaje,
                                enviado: {
                                    completeDate: new Date(),
                                    dia: new Date().getDate(),
                                    mes: new Date().getMonth() + 1,
                                    h: new Date().getHours(),
                                    min: new Date().getMinutes(),
                                }
                            }
                        ]
                    })
                }

            } else {
                // doc.data() will be undefined in this case
                console.error("El documento no existe!");
            }
            
            setInterval(() => {
                bajarChat()
            }, 10);
        }

        e.preventDefault()
        const form = e.target

        if (form['nombre'].value) {
            updateProfile(auth.currentUser, {
                displayName: form['nombre'].value
            })
        }

        if (form['mensaje'].value) enviarMensaje(form['mensaje'].value)

        form['mensaje'].value = ""

    }

    const [sala, setSala] = useState(null)

    useEffect(() => {
        if( user.user ) {
            onSnapshot(doc(db, "usuarios", user.user.uid), (docRef) => {
                
                let msgs = []
                if (docRef.data().sala){
                    docRef.data().sala.forEach((mensaje) => {
                        msgs = [
                            ...msgs,
                            <MensajeChat
                                right
                                time={`${mensaje.enviado.h}:${mensaje.enviado.min}`}
                                >
                                { mensaje.contenido }
                            </MensajeChat>
                        ]
                    })
                }
                
                setSala( msgs )

            })
        }
    })

    /**
     * lo de user.user? -> la interogación es para que solo se ejecute cuando user.user exista,
     * porque como updateProfile es una promesa, a veces tarda un poco
     */
    return (
        <SWrapper onSubmit={handleSubmit}>
            <SIntroduceNombre display={user.user?.displayName}>
                <h1>¿Como te llamas?</h1>
                <input type="text" name="nombre" className="focus" placeholder="introduce tu nombre" autoComplete="off" spellCheck="false" />
            </SIntroduceNombre>
            <SCabecera>
                <SNotClaimed>¡Escríbenos!</SNotClaimed>
            </SCabecera>
            <SChat id="salaChat">
                {
                    sala
                }
            </SChat>
            <SInputWrapper>
                <input className="focus" type='text' name="mensaje" placeholder="mensaje" spellCheck={false} autoComplete='off' />
                <SBtnEnviar className="focus">
                    <Enviar />
                </SBtnEnviar>
            </SInputWrapper>
        </SWrapper>
    )
}

export default Sala