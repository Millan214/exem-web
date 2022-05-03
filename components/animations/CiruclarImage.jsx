import { useState } from "react"
import { useEffect } from "react"
import styled from "styled-components"

const STitle = styled.div`
    width: 100%;
    text-align: center;
    *{
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

const SWrapper = styled.div`
    display: flex;
    cursor: pointer;
    flex-direction: column;
    padding: ${props => (( (props.size/20) * 2) + 10) + 'px'};
    width: ${props => props.size ? props.size + 'px' : '300px'};
    

    &:hover img{
        ${ props => props.hover ? 'border-radius: 15%' : ''};
    }
`

const SCustomPetal = styled.div`
    position: absolute;
    border-radius: 15%;
    background: var(--color3);
    transition: background-color .5s ease-in-out;
    animation: rotar 20s linear infinite;

    @keyframes rotar {
        0%{
            transform: rotate(0deg);
        }
        100%{
            transform: rotate(360deg);
        }
    }
`

const SBody = styled.div`
    display: flex;
    justify-content: center;

    img {
        z-index: 2;
        width: ${props => props.size ? props.size + 'px' : '300px'};
        height: ${props => props.size ? props.size + 'px' : '300px'};
        object-fit: cover;
        border-radius: 50%;
        transition: border-radius .25s ease-in-out;
        margin-bottom: ${props => props.hasText ? (((props.size / 20 ) * 2) + 10) + 'px' : '0px'};
    }

    ${SCustomPetal} {
        margin: ${props => props.size ? (props.size/20) + 'px' : '25px'};
        width: ${props => props.size ? (props.size - (props.size/20)*2) + 'px' : '280px'};
        height: ${props => props.size ? (props.size - (props.size/20)*2) + 'px' : '280px'};
    }
    
`

/**
 * @param   size: number - Tamaño del circulo en px
 * @param   img: string - Ruta de la imagen
 * @param   alt: string - Texto alternativo de la imagen
 * @param   hasText: boolean - Si se desea mostrar el texto
 * @param   children: string - Texto a mostrar
 * @returns Styled Component
 */
const CiruclarImage = props => {

    const [size, setSize] = useState(window.innerWidth/props.scale)

    useEffect(() => {
        window.addEventListener('resize', () => {
            setSize(window.innerWidth/props.scale)
        })
    })

    return (
        <SWrapper {...props} size={size}>
            <SBody {...props} size={size}>
                <img src={ props.img } alt={ props.alt } />
                <SCustomPetal/>
            </SBody>
            <STitle {...props} size={size}>
                {props.children}
            </STitle>
        </SWrapper>
    )
}

export default CiruclarImage