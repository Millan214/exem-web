import styled from "styled-components"

const Titulo3 = styled.h1`
    color: var(--secundario-light);
    /*color: var(--color6);*/
    text-transform: uppercase;
    font-size: 50px;
    /*-webkit-text-stroke: 1px black;
    text-shadow: -2px 2px 4px rgba(0, 0, 0, 0.5), 2px -2px 0 rgba(255, 255, 255, 0.9);*/
    text-shadow: -1px 0 black, 1px 0 black, 0 1px black, 0 -1px black
    ${ props => props.center ? "text-align: center;" : "" };
    ${ props => props.fullWidth ? "width: 100%;" : "" };
`

export default Titulo3