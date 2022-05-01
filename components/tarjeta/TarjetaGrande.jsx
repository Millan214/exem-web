import styled from "styled-components"
import { FlexLayout } from "../layouts/FlexLayout"

const SWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    cursor: pointer;
`

const SImg = styled.img`
    width: 100%;
    height: 50vh;
    object-fit: cover;
    border-radius: 30px;
    box-shadow: var(--shadow);
    z-index: 2;
`

const SBody = styled.div`
    background: var(--color2);
    margin: 0 50px;
    padding: 40px 40px 10px 40px;
    box-shadow: var(--shadow);
    border-radius: 0 0 20px 20px;

    h1 {
        text-transform: uppercase;
        color: var(--color6);
    }

    svg{
        fill: var(--color5);
    }

    span{
        font-weight: bold;
        color: var(--color5);
    }

    div{
        
        transform: translateX(3%);
    }

`

const TarjetaGrande = props => {
    return(
        <SWrapper>
            <SImg src={ props.img } />
            <SBody>
                <h1>{ props.children }</h1>
                <FlexLayout hAlign={'right'} vAlign={'center'}>
                    <span>{ props.enter }</span>
                    <svg xmlns="http://www.w3.org/2000/svg" height={40} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                </FlexLayout>
            </SBody>
        </SWrapper>
    )
}

export default TarjetaGrande