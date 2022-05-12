import styled from "styled-components"

const SHalf = styled.div`
    @media (max-width: 1000px) {
        width: ${ props => props.wrap ? '100%' : '50%' };
    }
    
`

const SWrapper = styled.div`
    display: flex;
    gap: 30px;
    width: 100%;
    height: 100%;

    @media (max-width: 1000px) {
        flex-wrap: ${props => props.wrap ? "wrap" : "nowrap"};
    }
`

/**
 * @param   
 * @returns Styled Component
 */
const HalfLayout = props => {
    return(
        <SWrapper { ...props }>
            <SHalf { ...props }>
                { props.children[1] }
            </SHalf>
            <SHalf { ...props }>
                { props.children[0] }
            </SHalf>
            
        </SWrapper>
    )
}

export default HalfLayout