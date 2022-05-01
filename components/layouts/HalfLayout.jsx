import styled from "styled-components"

const SHalf = styled.div`
    width: 50%;
`

const SWrapper = styled.div`
    display: flex;
    gap: 30px;
    width: 100%;
    height: 100%;

`

/**
 * @param   
 * @returns Styled Component
 */
const HalfLayout = props => {
    return(
        <SWrapper>
            <SHalf>
                { props.children[0] }
            </SHalf>
            <SHalf>
                { props.children[1] }
            </SHalf>
        </SWrapper>
    )
}

export default HalfLayout