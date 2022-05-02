import styled from "styled-components"

/**
 * @param invert    Si es true, el color se invertira
 */
const Titulo2 = styled.h1`
    text-transform: uppercase;
    color: ${ props => props.invert ? 'var(--color1)' : 'var(--color5)' };
    background: ${ props => props.invert ? 'var(--color5)' : 'var(--color1)' };
    padding: 5px 30px;
    ${ props => props.pad ? 'padding: 5px '+props.pad+'px;' : '' };
    border-radius: 10px;
`

export default Titulo2