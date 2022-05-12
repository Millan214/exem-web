import styled from "styled-components"

const SWrapper = styled.div`
    
    svg{
        width: 100%;
    }
`

const SContentWrapper = styled.div`
    background: var(--color6);
    padding: 25px;
`

/**
 * @param   
 * @returns Styled Component
 */
const Onda = props => {
    return (
        <SWrapper>
            <SContentWrapper>
                {props.children}
            </SContentWrapper>
            <svg viewBox="0 0 1920 136" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1920 0H0C150 52.4396 468.3 144.018 541.5 90.8127C614.7 37.6079 758.333 60.5418 821 78.6593C868.5 92.8383 994.2 123.289 1117 131.662C1623 158.399 1863.17 55.0278 1920 0Z" fill="#894B31" />
            </svg>
        </SWrapper>
    )
}

export default Onda