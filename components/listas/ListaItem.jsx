import styled from "styled-components"

const SWrapper = styled.li`
    display: grid;
    justify-content: left;
    grid-template-columns: auto auto;
    grid-template-areas: "barra texto";
    margin: 15px 0;

    h2{
        color: var(--color5);
        margin: 10px;
        grid-area: texto;
        font-size: 1.2vw;
    }
    
    div{
        width: 10px;
        height: 100%;
        background: var(--color5);
        border-radius: 5px;
        grid-area: barra;
    }
`

/**
 * @param   
 * @returns Styled Component
 */
const ListaItem = props => {
    return(
        <SWrapper>
            <div></div>
            <h2>{ props.children }</h2>
        </SWrapper>
    )
}

export default ListaItem