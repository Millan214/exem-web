import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { UserContext } from "../../../pages/App"
import Enviar from "../../icons/Enviar"
import MensajeChat from "../mensaje/MensajeChat"
import { updateProfile } from "firebase/auth";
import { auth, db } from "../../../firebase/firebaseInit"
import { doc, setDoc, onSnapshot, getDoc } from "firebase/firestore"
import X from "../../icons/X"
import ChatIcon from "../../icons/ChatIcon"

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

    const SCloseBtn = styled.button`
        border: none;
        outline: none;
        background-color: var(--color7);

        border-radius: 0 0 50% 50%;
        border: 5px solid var(--color5);
        border-top: 0;

        display: flex;
        padding: 10px;
        position: fixed;
        bottom: 45px;
        right: 65px;

        box-shadow: var(--shadow);

        cursor: pointer;

        transition: border-radius .25s;

        svg{
            transition: transform .5s;
        }

        &:hover svg{
            transform: rotate(360deg);
        }

        &:active svg{
            transform: scale(1.2) rotate(90deg);
        }
    `

const CCloseBtn = props => {

    return props.chatVisible ? (
        <SCloseBtn {...props}>
            <X />
        </SCloseBtn>
    ) : (
        <SCloseBtn {...props}>
            <ChatIcon />
        </SCloseBtn>
    )
}

const Sala = props => {

    const user = useContext(UserContext)
    const [sala, setSala] = useState(null)
    const [chatVisible, setChatVisible] = useState(false)

    const handleSubmit = e => {

        const enviarMensaje = async (mensaje) => {

            const bajarChat = () => {
                let domChat = document.querySelector('#salaChat')
                domChat.scrollTop = domChat.scrollHeight
            }

            const mensajeTiempo = (msg) => {
                return {
                    contenido: msg,
                    sender: user.user.uid,
                    enviado: {
                        completeDate: new Date(),
                        dia: new Date().getDate(),
                        mes: new Date().getMonth() + 1,
                        h: new Date().getHours(),
                        min: new Date().getMinutes(),
                    }
                }
            }

            const docRef = doc(db, "usuarios", user.user.uid);
            const docSnap = await getDoc(docRef);

            getDoc(docRef)
                .then((value) => {
                    let data = value.data()
                    if (data.sala) {
                        setDoc(docRef, {
                            sala: [
                                ...data.sala,
                                mensajeTiempo(mensaje)
                            ]
                        }).then(() => {
                            bajarChat()
                        })

                    } else {
                        setDoc(docRef, {
                            sala: [
                                mensajeTiempo(mensaje)
                            ]
                        }).then(() => {
                            bajarChat()
                        })
                    }
                })

            if (docSnap.exists()) {


            } else {
                // doc.data() will be undefined in this case
                console.error("El documento no existe!");
            }
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

    const updateMsgs = () => {
        if (user.user) {
            onSnapshot(doc(db, "usuarios", user.user.uid), (docRef) => {
                let msgs = []
                if (docRef.data().sala) {
                    docRef.data().sala.forEach((mensaje) => {
                        msgs = [
                            ...msgs,
                            <MensajeChat
                                left = { user.user.uid != mensaje.sender }
                                time={`${mensaje.enviado.h}:${mensaje.enviado.min}`}
                            >
                                {mensaje.contenido}
                            </MensajeChat>
                        ]
                    })
                }

                setSala(msgs)

            })
        }
    }

    const toggleChat = () => {
        setChatVisible(!chatVisible)
    }

    const showChat = () => {
        document.querySelector('#chatwrapper').style.display = "grid"
        document.querySelector('#chattogglebtn').style.borderRadius = "0 0 50% 50%"
        document.querySelector('#chattogglebtn').style.borderTop = "0"
    }

    const hideChat = () => {
        document.querySelector('#chatwrapper').style.display = "none"
        document.querySelector('#chattogglebtn').style.borderRadius = "50%"
        document.querySelector('#chattogglebtn').style.border = "5px solid var(--color5)"
    }

    useEffect(() => {
        updateMsgs()
    })

    useEffect(() => {
        chatVisible ? showChat() : hideChat()
    }, [chatVisible])

    /**
     * lo de user.user? -> la interogación es para que solo se ejecute cuando user.user exista,
     * porque como updateProfile es una promesa, a veces tarda un poco
     */
    return (
        <>
            <SWrapper onSubmit={handleSubmit} id="chatwrapper">
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
            <CCloseBtn id="chattogglebtn" onClick={toggleChat} chatVisible={ chatVisible }></CCloseBtn>
        </>
    )
}

export default Sala