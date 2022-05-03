import styled from "styled-components"

const Titulo = styled.h1`
    color: var(--color6);
    text-transform: uppercase;
    font-size: 50px;
    ${ props => props.center ? "text-align: center;" : "" };
    ${ props => props.fullWidth ? "width: 100%;" : "" };
`

export default Titulo