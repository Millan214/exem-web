import styled from "styled-components"

const SWrapper = styled.li`
    display: flex;
    align-items: center;

    h2{
        color: var(--color5);
        margin: 10px;
    }
    div{
        width: 15px;
        height: 30px;
        background: var(--color5);
        border-radius: 5px;
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