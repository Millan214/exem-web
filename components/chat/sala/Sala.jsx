import { useContext, useEffect } from "react"
import styled from "styled-components"
import { UserContext } from "../../../pages/App"
import Enviar from "../../icons/Enviar"
import MensajeChat from "../mensaje/MensajeChat"

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

const Sala = props => {

    const user = useContext(UserContext).user

    useEffect(() => {
        //console.log(user)
    })

    const handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        console.log(form['mensaje'].value)
        form['mensaje'].value = ""
    }

    return (
        <SWrapper onSubmit={handleSubmit}>
            <SCabecera>
                <SNotClaimed>¡Escríbenos!</SNotClaimed>
            </SCabecera>
            <SChat>
                <MensajeChat
                    time='3:43 pm'>
                    Hola que tal, tenía una pequeña duda
                </MensajeChat>
                <MensajeChat
                    right
                    time='5:50 pm'>
                    En que te puedo ayoudar?
                </MensajeChat>
                <MensajeChat
                    time='3:43 pm'>
                    Hola que tal, tenía una pequeña duda
                </MensajeChat>
                <MensajeChat
                    right
                    time='5:50 pm'>
                    En que te puedo ayoudar?
                </MensajeChat>
                <MensajeChat
                    time='3:43 pm'>
                    Hola que tal, tenía una pequeña duda
                </MensajeChat>
                <MensajeChat
                    right
                    time='5:50 pm'>
                    En que te puedo ayoudar?
                </MensajeChat>
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