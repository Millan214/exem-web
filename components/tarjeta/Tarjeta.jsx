import styled from "styled-components"

const STarjetaWrapper = styled.div`

`

const STarjeta = styled.div`
    background: var(--color2);
    box-shadow: var(--shadow);
    margin: 40px;
    padding: 20px;
    border-radius: 15px;

    color: var(--color7);

    width: 500px;
    overflow: hidden;

    cursor: pointer;

    display: grid;
    grid-template-columns: auto 1fr;
    gap: 20px;
    grid-template-areas: 
        "img nombre"
        "img correo"
        "comentario comentario";

    img {
        width: 100px;
        height: 100px;
        object-fit: cover;
        border-radius: 50%;
        box-shadow: var(--shadow);
        grid-area: img;
    }

    h1{
        grid-area: nombre;
    }

    h2{
        grid-area: correo;
    }

    p{
        grid-area: comentario;
        font-weight: bold;
    }
`

const SBarra = styled.div`
    position: relative;
    width: 100%;
    height: 15px;
    background: var(--color6);
    box-shadow: var(--shadow);
    transform:  translateY(-850%) rotate(-10deg);
    z-index: -1;
`

const Tarjeta = props => {
    return(
        <STarjetaWrapper>
            <STarjeta>
                <img src={ props.imagen } alt="imagen del cliente que opina" />
                <h1>{ props.nombre }</h1>
                <h2>{ props.correo }</h2>
                <p>{ props.comentario }</p>
            </STarjeta>
            <SBarra />
        </STarjetaWrapper>
    )
}

export default Tarjeta