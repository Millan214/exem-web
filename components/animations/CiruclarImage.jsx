import { useState } from "react"
import { useEffect } from "react"
import styled from "styled-components"

const STitle = styled.div`
    width: ${props => props.size ? props.size + 'px' : '300px'};
    text-align: center;
    *{
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

const SCustomPetal = styled.div`
    position: absolute;
    border-radius: 15%;
    background: var(--color3);
`

const SBody = styled.div`
    display: flex;
    
    img {
        z-index: 2;
        width: ${props => props.size ? props.size + 'px' : '300px'};
        height: ${props => props.size ? props.size + 'px' : '300px'};
        object-fit: cover;
        border-radius: 50%;
        margin-bottom: ${props => props.hasText ? (((props.size / 20 ) * 2) + 10) + 'px' : '0px'};
    }

    ${SCustomPetal} {
        margin: ${props => props.size ? (props.size/20) + 'px' : '25px'};
        width: ${props => props.size ? (props.size - (props.size/20)*2) + 'px' : '280px'};
        height: ${props => props.size ? (props.size - (props.size/20)*2) + 'px' : '280px'};
    }
    
`

const SWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: ${props => (( (props.size/20) * 2) + 10) + 'px'};
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

    const [size, setSize] = useState(props.size)

    useEffect(() => {
        window.addEventListener('resize', () => {
            if(props.screenSize) {
                setSize(window.innerWidth/4)
                console.log(size)
            }
        })
    })

    return (
        <SWrapper {...props} size={size}>
            <SBody {...props} size={size}>
                <img src={ props.img } alt={ props.alt } />
                <SCustomPetal className="sBackgroundPetal"></SCustomPetal>
            </SBody>
            <STitle {...props} size={size}>
                {props.children}
            </STitle>
        </SWrapper>
    )
}

export default CiruclarImage