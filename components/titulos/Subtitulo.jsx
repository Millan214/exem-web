import styled from "styled-components"

const Subtitulo = styled.h3`
    font-weight: 500;
    color: var(--color5);
    margin: 0;
    padding: 0;
    ${ props => props.upper ? "text-transform: uppercase;" : "" };
    ${ props => props.center ? "text-align: center;" : "" };
    ${ props => props.fullWidth ? "width: 100%;" : "" };
`
export default Subtitulo