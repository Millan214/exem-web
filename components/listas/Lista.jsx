import styled from "styled-components"

const SWrapper = styled.ul`
    list-style-type: none;

    li::before {
    }

`

/**
 * @param   
 * @returns Styled Component
 */
const Lista = props => {
    return(
        <SWrapper>
            { props.children }
        </SWrapper>
    )
}

export default Lista