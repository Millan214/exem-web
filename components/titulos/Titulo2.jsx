import styled from "styled-components"

const Titulo2 = styled.h1`
    text-transform: uppercase;
    color: ${ props => props.invert ? 'var(--color1)' : 'var(--color5)' };
    background: ${ props => props.invert ? 'var(--color5)' : 'var(--color1)' };
    padding: 5px 90px;
    border-radius: 10px;
`

export default Titulo2