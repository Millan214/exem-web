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
import { collection, query, where, getDocs } from "firebase/firestore";
import { useState } from "react"
import mensaje from "../../components/mensajes/Mensaje"
import HalfLayout from "../../components/layouts/HalfLayout"

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

        transition: background .25s;

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

/**
 * @param   
 * @returns Component
 */
const Admin = props => {

    const nav = useNavigate()
    const { currentUser } = useContext(AuthContext)
    const [chats, setChats] = useState(null)

    const SalaPreviewItem = ( id, texto ) => {
        return(
            <div onClick={ () => { entrarEnChat(id) } }>
                { texto }
            </div>
        )
    }

    const logout = () => {
        signOut(auth).then(() => {
            props.setLogged(false)
            nav("/admin")
        })
    }

    const entrarEnChat = id => {
        console.log(id)
    }

    const cargarPreviewChats = () => {
        const q = query(collection(db, "usuarios"), where("name", "!=", null))

        getDocs(q).then((res) => {
            let arr = []
            res.forEach(e => {
                const data = e.data()
                const salaPreview = SalaPreviewItem(e.id,data.name)
                arr = [ ...arr, salaPreview ]
            })
            setChats(arr)
        })

    }

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
                    <div>jamon</div>
                    <SListaChat>
                        { chats }
                    </SListaChat>
                </HalfLayout>
            </SideMarginsLayout>
        </SWrapper>
    )
}

export default Admin