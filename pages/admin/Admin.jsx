import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth, db } from "../../firebase/firebaseInit"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "../../auth/AuthProvider"
import { useEffect } from "react"
import styled from "styled-components"
import Titulo2 from "../../components/titulos/Titulo2"
import Onda from "../../components/ondas/Onda"
import { FlexLayout } from "../../components/layouts/FlexLayout"
import Boton from "../../components/clickables/botones/Boton"
import Sala from "../../components/chat/sala/Sala"
import { SideMarginsLayout } from "../../components/layouts/SideMarginsLayout"
import { collection, query, where, getDocs, getDoc, doc, onSnapshot } from "firebase/firestore";
import { useState } from "react"
import mensaje from "../../components/mensajes/Mensaje"
import HalfLayout from "../../components/layouts/HalfLayout"
import Enviar from "../../components/icons/Enviar"
import MensajeChat from "../../components/chat/mensaje/MensajeChat"

const SWrapper = styled.div`
    width: 100vw;
    height: 100vh;

    background: var(--color2);

    h1, h2{
        color: var(--color7);
    }
`

const SWhite = styled.div`
    color: var(--color1);
`

const SB = styled.div`
    position: absolute;
    top: 10px;
    left: 10px;
`

const SListaChat = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    overflow-y: auto;

    height: 600px;

    padding: 10px;

    border-radius: 10px;

    background: var(--color3);

    /* width */
    &::-webkit-scrollbar {
        width: 5px;
    }

    /* Track */
    &::-webkit-scrollbar-track {
        background: none;
    }
    
    /* Handle */
    &::-webkit-scrollbar-thumb {
        background: var(--color5); 
    }

    /* Handle on hover */
    &::-webkit-scrollbar-thumb:hover {
        background: var(--color6);
    }

    &>div {
        padding: 15px;
        cursor: pointer;
        border-radius: 10px;
        font-weight: bold;
        user-select: none;
        background: var(--color4);
        color: var(--color1);

        transition: background .25s, box-shadow .25s;

        &:hover {
            background-color: var(--color5);
            box-shadow: var(--shadow);
            color: var(--color1);
        }

        &:active {
            box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
            transform: translateY(2px);
            transition: box-shadow .25s, transform .25s;
            color: var(--color1);
        }
    }

`

const SChat = styled.section`
    border-radius: 10px;
    background-color: var(--color3);
    padding: 10px;
    
    height: 100%;

    header {

    }
    
`

const SChatNoSeleccionado = styled.div`
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 30px;
    font-weight: bold;
    color: var(--color7);

    text-transform: uppercase;

`

const SChatBody = styled.form`
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-rows: auto 1fr auto;
    gap: 20px;

    header{
        background: var(--color5);
        padding: 10px 15px;
        border-radius: 10px;
        box-shadow: var(--shadow);
        color: var(--color1);
        text-align: center;
    }
    
    & > div {
        display: flex;
        flex-direction: column;
        gap: 10px;

        background: var(--color1);
        border-radius: 10px;
        box-shadow: var(--shadow);
        padding: 10px;
        overflow-y: auto;
    }

    footer{
        display: flex;
        align-items: center;
        background: var(--color1);
        border-radius: 10px;
        overflow: hidden;
        box-shadow: var(--shadow);
        input{
            border: none;
            width: 100%;
            background: none;
            padding: 10px 20px;
            outline: none;
            color: var(--color7);
            font-size: 20px;
        }
        button{
            background: var(--color6);
            cursor: pointer;
            border: none;
            outline: none;
            display: flex;
            padding: 10px;
        }
    }

`

/**
 * @param   
 * @returns Component
 */
const Admin = props => {

    const nav = useNavigate()
    const { currentUser } = useContext(AuthContext)
    const [chat, setChat] = useState(null)
    const [chats, setChats] = useState(null)
    const [currentChat, setCurrentChat] = useState(null)
    const [mensajes, setMensajes] = useState([])

    const SalaPreviewItem = (id, texto) => {
        return (
            <div onClick={() => { 
                setCurrentChat(id)
            }}>
                {texto}
            </div>
        )
    }

    const logout = () => {
        signOut(auth).then(() => {
            props.setLogged(false)
            nav("/admin")
        })
    }

    const cargarPreviewChats = () => {
        const q = query(collection(db, "usuarios"), where("name", "!=", null))

        getDocs(q).then((res) => {
            let arr = []
            res.forEach(e => {
                const data = e.data()
                const salaPreview = SalaPreviewItem(e.id, data.name)
                arr = [...arr, salaPreview]
            })
            setChats(arr)
        })

    }

    const actualizarMensajes = e => {

        const enviarMensaje = ( texto ) => {
            console.log(currentChat)
        }

        e.preventDefault()
        const res = e.target["mensaje"].value
        e.target["mensaje"].value = ""
        if( res ) enviarMensaje( res )
    }

    const cargarChat = (id) => {

        const crearChat = (data) => {

            return (
                <SChatBody onSubmit={ actualizarMensajes } method="POST">
                    <header>Estás hablando con <b>{data.name}</b></header>
                    <div>
                        { mensajes }
                    </div>
                    <footer>
                        <input type="text" name="mensaje" placeholder="Enviar mensaje" autoComplete="off" spellCheck="false" />
                        <button className="focus">
                            <Enviar />
                        </button>
                    </footer>
                </SChatBody>
            )

        }

        if (id) {

            const docRef = doc(db, "usuarios", id)
            getDoc(docRef)
                .then(res => {
                    const data = res.data()
                    
                    setChat(crearChat(data))

                })

        }

    }

    const mostrarChat = () => {
        return currentChat ? (
            <SChat>
                {chat}
            </SChat>
        ) : (
            <SChat>
                <SChatNoSeleccionado>
                    selecciona un chat
                </SChatNoSeleccionado>
            </SChat>
        )
    }

    useEffect(() => {
        if(currentChat){
            cargarChat(currentChat)
            onSnapshot(doc(db, "usuarios", currentChat), (doc) => {
                const data = doc.data()
                let msgs = []
                if( data.sala ) {
                    data.sala.forEach(mensaje => {
                        const msg = <MensajeChat
                            left = { auth.currentUser.uid != mensaje.sender }
                            time={`${mensaje.enviado.h}:${mensaje.enviado.min}`}
                        >
                            {mensaje.contenido}
                        </MensajeChat>
    
                        msgs = [ ...msgs, msg ]
                    })
                }
                setMensajes( msgs )
            })
        }
    })

    useEffect(() => {
        cargarPreviewChats()
    }, [])

    return (
        <SWrapper>
            <Onda>
                <FlexLayout vAlign='center' hAlign='center' column>
                    <Titulo2 pad={90} >
                        bienbenido
                    </Titulo2>
                    <Titulo2 pad={90} invert >
                        <SWhite>{auth.currentUser.email}</SWhite>
                    </Titulo2>
                    <SB>
                        <Boton onClick={logout}>salir</Boton>
                    </SB>
                </FlexLayout>
            </Onda>
            <br />
            <SideMarginsLayout>
                <HalfLayout>
                    {mostrarChat()}
                    <SListaChat>
                        {chats}
                    </SListaChat>
                </HalfLayout>
            </SideMarginsLayout>
        </SWrapper>
    )
}

export default Admin